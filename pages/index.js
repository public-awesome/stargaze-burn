import Image from 'next/image'
import CountUp, { useCountUp } from 'react-countup'
import { NextSeo } from 'next-seo';
import axios from 'axios';

import Gauge from '@/components/gauge'
import TotalSupply from '@/components/supply'
import Unbonding from '@/components/unbonding'
import StakedSupply from '@/components/staked'

export default function Home({burnval, data, burnper}) {
  return (
   <section className="flex flex-col justify-between h-screen max-h-screen overflow-hidden">
    <NextSeo
      title={`Stargaze Fair Burn (` + burnper + `%)` }
      description={`Welcome to Stargaze where we have already burned: ` + burnval + ` $STARS.`}
    />
    <nav className="flex w-full z-10 bg-stargaze-accent py-2">
      <div className="flex flex-row m-auto overflow-hidden relative w-auto">
          <ul className="light:text-white dark:text-white flex flex-row w-[calc(400px*4)] animate-scroll font-sans"> 
          <li className="text-white w-[400px]">{burnper} % of supply 🔥 /</li>
            <Unbonding />
            <TotalSupply />
            <StakedSupply />
          </ul>
          <ul className="flex flex-row w-[calc(400px*4)] animate-scroll font-sans">
          <li className="text-white w-[400px]">{burnper} % of supply 🔥 /</li>
            <Unbonding />
            <TotalSupply />
            <StakedSupply />
          </ul>
        </div>
    </nav>
    <div className="flex flex-col z-10 justify-center px-6 h-2/3">
      <Image width="624" height="190" alt="stargaze logo" src="/stargaze.png" className="w-8/12 lg:w-4/12 mx-auto pt-16" />
      <h1 className="lg:text-4xl text-2xl text-white font-sans text-center pt-16">TOTAL B🔥RNED </h1>
      <h2 className="lg:text-5xl text-4xl text-white font-sans text-center mx-auto pt-3"><CountUp end={data[0].total_burn} duration={1.5} separator="," decimals="2" /></h2>
      <h4 className="pl-5 text-lg text-center font-mono mt-2">({burnper}% of supply)</h4>
      <a className="text-center mx-auto w-fit mt-10" href="https://stargaze.zone/launchpad" target="_blank" rel="noreferrer">
        <button className="bg-stargaze-accent text-md text-white px-10 py-3 rounded-lg mx-auto">
          BURN MORE 🔥
        </button>
      </a>
    </div>
    <div className="flex flex-col z-10 align-end mb-5 lg:mb-0 px-3 scale-150 lg:scale-100 lg:max-w-auto overflow-hidden">
      <Gauge percentage={burnper} />
    </div>
   </section>
  )
}

export async function getServerSideProps() {
  try {
    // Fetch data from external API
    const res = await axios.get('https://metabase.constellations.zone/api/public/card/76236082-c8a7-49e5-8433-aae4424a0366/query/json')
    const data = await res.data
    const burnval = (data[0].total_burn).toLocaleString('en-US')

    const res2 = await axios.get('https://rest.stargaze-apis.com/cosmos/bank/v1beta1/supply/ustars')
    const data2 = await res2.data
    const supply = ((data2.amount.amount) / 1000000)

    const burnper = ((data[0].total_burn / supply) * 100).toFixed(3)

    // Pass data to the page via props
    return { props: { burnval, data, burnper } }
  } catch (err) {
    console.log(err)
  }
}
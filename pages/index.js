import Link from 'next/link'
import CountUp, { useCountUp } from 'react-countup'
import { NextSeo } from 'next-seo';

import Gauge from '@/components/gauge.js'
import TotalSupply from '@/components/supply'
import LiquidSupply from '@/components/liquid'
import StakedSupply from '@/components/staked'

export default function Home({burnval, data}) {
  return (
   <section className="flex flex-col justify-between h-screen max-h-screen">
            <NextSeo
          title={burnval + ` $STARS `}
          description={`Welcome to Stargaze where we have already burned: ` + burnval + ` $STARS.`}
        />
    <nav className="flex w-full bg-stargaze-accent py-2">
      <div className="flex flex-row m-auto overflow-hidden relative w-auto">
          <ul className="flex flex-row w-[calc(400px*4)] animate-scroll font-sans"> 
            <li className="w-[400px]">BURNED 🔥 {burnval} /</li>
            <LiquidSupply />
            <TotalSupply />
            <StakedSupply />
          </ul>
          <ul className="flex flex-row w-[calc(400px*4)] animate-scroll font-sans">
            <li className="w-[400px]">BURNED 🔥 {burnval} /</li>
            <LiquidSupply />
            <TotalSupply />
            <StakedSupply />
          </ul>
        </div>
    </nav>
    <div className="flex flex-col justify-center px-6 h-2/3">
      <img src="stargaze.png" className="w-8/12 lg:w-4/12 m-auto pt-16" />
      <h1 className="text-4xl text-white font-sans text-center pt-16">TOTAL B🔥RNED</h1>
      <h2 className="lg:text-5xl text-4xl text-white font-sans text-center mx-auto pt-3"><CountUp end={data[0].total_burn} duration={3} separator="," decimals="2" /></h2>
      <button data-tooltip-target="tooltip-default" className="bg-stargaze-accent hover:bg-black text-white py-3 px-4 rounded mx-auto mt-10">
        BURN MORE 🔥
      </button>
      <div id="tooltip-default" role="tooltip" className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
        Tooltip content
        <div className="tooltip-arrow" data-popper-arrow></div>
      </div>
    </div>
    <div className="flex flex-col align-end px-3 scale-150 lg:scale-100 lg:max-w-auto overflow-hidden">
      <Gauge />
    </div>
   </section>
  )
}

export async function getServerSideProps() {
  try {
    // Fetch data from external API
    const res = await fetch('https://metabase.constellations.zone/api/public/card/76236082-c8a7-49e5-8433-aae4424a0366/query/json')
    const data = await res.json()
    const burnval = (data[0].total_burn).toLocaleString('en-US')

    // Pass data to the page via props
    return { props: { burnval, data } }
  } catch (err) {
    console.log(err)
  }
}
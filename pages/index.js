import Link from 'next/link'
import CountUp, { useCountUp } from 'react-countup'

//import FairBurn from '@/components/fairburn.js'
import Gauge from '@/components/gauge.js'
import TotalSupply from '@/components/supply'
import LiquidSupply from '@/components/liquid'
import StakedSupply from '@/components/staked'
//import FairBurnNav from '@/components/fairburnnav'

export default function Home({burnval, data}) {
  return (
   <section className="flex flex-col justify-between h-screen">
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
    <div className="flex flex-col justify-center px-6">
      <img src="stargaze.png" className="lg:w-5/12 m-auto pt-16" />
      <h1 className="text-4xl text-white font-sans text-center pt-16">TOTAL B🔥RNED</h1>
      <h2 className="lg:text-5xl text-4xl text-white font-sans text-center mx-auto pt-3"><CountUp end={data[0].total_burn} duration={3} separator="," decimals="2" /></h2>
      <Link href="https://stargaze.zone/launchpad" className="text-center w-auto" target="_blank">
        <button className="bg-stargaze-accent lg:w-1/12 bg-stargaze-accent-700 text-white font-sans py-3 px-4 rounded mx-auto mt-10">
          Burn more 🔥
        </button>
      </Link>
    </div>
    <div className="flex flex-col align-end px-3 scale-150 lg:scale-75">
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
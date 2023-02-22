import Link from 'next/link'

import FairBurn from '@/components/fairburn.js'
import Gauge from '@/components/gauge.js'
import TotalSupply from '@/components/supply'
import LiquidSupply from '@/components/liquid'
import StakedSupply from '@/components/staked'
import FairBurnNav from '@/components/fairburnnav'

export async function getStaticProps(context) {
  return {
    props: {}, // will be passed to the page component as props
  }
}

export default function Home() {
  return (
   <section className="flex flex-col justify-between h-screen">
    <nav className="flex w-full bg-stargaze-accent py-2">
      <div className="flex flex-row m-auto overflow-hidden relative w-auto">
          <ul className="flex flex-row w-[calc(400px*4)] animate-scroll font-sans">
            <FairBurnNav />
            <LiquidSupply />
            <TotalSupply />
            <StakedSupply />
          </ul>
          <ul className="flex flex-row w-[calc(400px*4)] animate-scroll font-sans">
            <FairBurnNav />
            <LiquidSupply />
            <TotalSupply />
            <StakedSupply />
          </ul>
        </div>
    </nav>
    <div className="flex flex-col justify-center px-6">
      <img src="stargaze.png" className="lg:w-5/12 m-auto pt-16" />
      <h1 className="text-4xl text-white font-sans text-center pt-16">TOTAL B🔥RNED</h1>
      <FairBurn />
      <Link href="https://stargaze.zone/launchpad" className="text-center" target="_blank">
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

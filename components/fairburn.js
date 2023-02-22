import useSWR from 'swr'
import CountUp, { useCountUp } from 'react-countup'

const fetcher = (...args) => fetch(...args).then((res) => res.json())

export default function FairBurn() {
    const url = 'https://metabase.constellations.zone/api/public/card/76236082-c8a7-49e5-8433-aae4424a0366/query/json'

    const { data, error } = useSWR(url, fetcher)

    if (error) return <div className="lg:text-3xl text-2xl text-white font-sans text-center mx-auto pt-3">Failed to load</div>
    if (!data) return <div className="lg:text-3xl text-2xl text-white font-sans text-center mx-auto pt-3">Loading...</div>

    const fairburn = (data.total_burn).toLocaleString('en-US')

    return (
        <h2 className="lg:text-5xl text-4xl text-white font-sans text-center mx-auto pt-3"><CountUp end={fairburn} duration={3} separator="," decimals="2"></CountUp></h2>
    );
};
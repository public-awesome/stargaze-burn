import useSWR from 'swr'
import CountUp, { useCountUp } from 'react-countup'

const fetcher = (...args) => fetch(...args).then((res) => res.json())

export default function FairBurnNav() {
    const url = 'https://metabase.constellations.zone/api/public/card/76236082-c8a7-49e5-8433-aae4424a0366/query/json'

    const { data, error } = useSWR(url, fetcher)

    if (error) return <li className="w-[400px]">Failed to load /</li>
    if (!data) return <li className="w-[400px]">Loading... /</li>

    const fairburn = (data.total_burned).toLocaleString('en-US')

    return (
        <li className="w-[400px]">BURNED 🔥 {fairburn} /</li>
    );
};
import useSWR from 'swr'

const fetcher = (...args) => fetch(...args).then((res) => res.json())

export default function StakedSupply() {
    const url = 'https://rest.stargaze-apis.com/cosmos/staking/v1beta1/pool'

    const { data, error } = useSWR(url, fetcher)

    if (error) return <li className="w-[400px]">Failed to load /</li>
    if (!data) return <li className="w-[400px]">Loading... /</li>

    const liquid = (data.pool.bonded_tokens / 1000000).toLocaleString('en-US')

    return (
        <li className="w-[400px]">Staked $STARS {liquid} /</li>
    );
};
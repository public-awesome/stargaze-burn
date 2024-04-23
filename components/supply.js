import useSWR from 'swr'

const fetcher = (...args) => fetch(...args).then((res) => res.json())

export default function TotalSupply() {
    const url = 'https://rest.stargaze-apis.com/cosmos/bank/v1beta1/supply/by_denom?denom=ustars'

    const { data, error } = useSWR(url, fetcher)

    if (error) return <li className="w-[400px]">Failed to load /</li>
    if (!data) return <li className="w-[400px]">Loading... /</li>

    const supply = (data.amount.amount / 1000000).toLocaleString('en-US')

    return (
        <li className="w-[400px]">Total supply {supply} /</li>
    );
};
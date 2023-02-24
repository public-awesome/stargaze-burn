import axios from 'axios';

export default async function handler(req, res) {

    const resp = await axios.get('https://metabase.constellations.zone/api/public/card/4a1ab731-cc28-4a41-97fb-13f77c142681/query/json')
    const data = await resp.data

    res.status(200).json(data)
}
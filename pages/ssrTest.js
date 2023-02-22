export default function About({ data }) {
    return (
        <div>
            <h1>{data.total_burn}</h1>
        </div>
    );
}
    
export async function getServerSideProps() {
    // Fetch data from external API
    const res = await fetch(`https://metabase.constellations.zone/api/public/card/76236082-c8a7-49e5-8433-aae4424a0366/query/json`)
    const data = await res.json()
  
    // Pass data to the page via props
    return { props: { data } }
  }
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = nextConfig

module.exports = () => {
  const rewrites = () => {
    return [
      {
        source: "/",
        destination: "https://metabase.constellations.zone/api/public/card/76236082-c8a7-49e5-8433-aae4424a0366/query/json",
      },
    ];
  };
  return {
    rewrites,
  };
};

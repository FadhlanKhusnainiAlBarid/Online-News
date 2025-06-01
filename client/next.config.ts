import type { NextConfig } from "next";
import withFlowbiteReact from "flowbite-react/plugin/nextjs";

const nextConfig: NextConfig = {
  /* config options here */
  env: {
    API_KEY_NYTIMES: process.env.NEXT_PUBLIC_API_KEY_NYTIMES,
  },
  images: {
    domains: ["static01.nyt.com"],
  },
};

export default withFlowbiteReact(nextConfig);

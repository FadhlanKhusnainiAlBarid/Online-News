import type { NextConfig } from "next";
import withFlowbiteReact from "flowbite-react/plugin/nextjs";

const nextConfig: NextConfig = {
  /* config options here */
  env: {
    API_KEY_NYTIMES: process.env.API_KEY_NYTIMES,
  },
};

export default withFlowbiteReact(nextConfig);

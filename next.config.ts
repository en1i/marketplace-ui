import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone", // # create a standalone build
  reactCompiler: true,
};

export default nextConfig;

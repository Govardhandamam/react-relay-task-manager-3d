import type { NextConfig } from "next";
import relay from "./relay.config.json";

const nextConfig: NextConfig = {
  compiler: {
    relay: {
      src: relay.src,
      artifactDirectory: relay.artifactDirectory,
    },
  },
  serverRuntimeConfig: {
    projectRoot: __dirname,
  },
};

export default nextConfig;

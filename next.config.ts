import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  distDir: "build",
  output: "standalone",
  typescript: {
    ignoreBuildErrors: true,
  },
  webpack(config, { isServer }) {
    if (!isServer) {
      config.module.rules.push({
        test: /\.(png|jpe?g|gif|svg)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'static/images/[name].[hash].[ext]',
            },
          },
        ],
      });
    }
    return config;
  },

};

export default nextConfig;


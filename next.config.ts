import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // distDir: 'build',  
  output: 'standalone', 
  typescript: {
    ignoreBuildErrors: true,  
  },
  webpack(config, { isServer }) {
    // Modify webpack config to handle images
    if (!isServer) {
      config.module.rules.push({
        test: /\.(png|jpe?g|gif|svg)$/i,
        type: 'asset/resource', 
        generator: {
          filename: 'static/images/[name].[hash][ext]',
        },
      });
    }

    return config;
  },

  // Redirect configuration (example: use for custom redirects or rewrites)
  async redirects() {
    return [
      {
        source: '/old-route',
        destination: '/new-route',
        permanent: true,
      },
    ];
  },

  // Optional: Configure Image Optimization settings for Vercel (if you want to use next/image)
 
};

export default nextConfig;

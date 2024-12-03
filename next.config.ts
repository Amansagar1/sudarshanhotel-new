import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  basePath:"/",
  // distDir: 'build',  
  distDir:"dist",// Custom build directory
  output: 'standalone',  // For Vercel or standalone deployment
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
    

    // Example: Add support for other file types or modify any other settings
    return config;
  },
 
};

export default nextConfig;

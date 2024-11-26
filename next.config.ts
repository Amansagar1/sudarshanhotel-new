import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // distDir: 'build',  // Custom build directory
  output: 'standalone',  // For Vercel or standalone deployment
  typescript: {
    ignoreBuildErrors: true,  // Ignore TypeScript build errors (for production builds)
  },
  webpack(config, { isServer }) {
    // Modify webpack config to handle images
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

    // Example: Add support for other file types or modify any other settings
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

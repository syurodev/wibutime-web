import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: 'http', // Match the protocol in your URL
				hostname: '160.30.136.38', // Match the hostname
				port: '9000', // Specify the port
				pathname: '**', // Match all paths (double asterisks for recursive matching)
			},
		],
	},
};

export default nextConfig;

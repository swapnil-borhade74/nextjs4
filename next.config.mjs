import { withSentryConfig } from '@sentry/nextjs';

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [{ protocol: 'https', hostname: 'img.clerk.com' }],
  },
};

let sentryConfig;

try {
  sentryConfig = withSentryConfig(nextConfig, {
    org: "swapnil-f4j",
    project: "javascript-nextjs",
    silent: !process.env.CI,
    widenClientFileUpload: true,
    reactComponentAnnotation: {
      enabled: true,
    },
    hideSourceMaps: true,
    disableLogger: true,
    automaticVercelMonitors: true,
  });
} catch (error) {
  console.error("Sentry configuration error:", error);
  throw error; // re-throw to stop further execution
}

export default sentryConfig;

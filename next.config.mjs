const repositoryName = 'VeloCore';
const defaultProductionBasePath = `/${repositoryName}`;
const configuredBasePath = process.env.NEXT_PUBLIC_BASE_PATH;
const basePath = configuredBasePath ?? (process.env.NODE_ENV === 'production' ? defaultProductionBasePath : '');

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  poweredByHeader: false,
  productionBrowserSourceMaps: false,
  ...(basePath ? { basePath, assetPrefix: basePath } : {}),
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
  images: {
    unoptimized: true,
  },
};

export default nextConfig;

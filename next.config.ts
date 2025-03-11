import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  // GitHub Pages에 배포할 때 사용될 기본 경로 (저장소 이름을 입력하세요)
  // 예: '/my-next-app'
  basePath: '/my-next-app',
  images: {
    unoptimized: true, // 정적 내보내기를 위해 필요
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'randomuser.me',
      }
    ],
  },
  // 타입 에러 무시하고 빌드하기
  typescript: {
    ignoreBuildErrors: true,
  },
  // 린트 에러 무시하고 빌드하기
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;

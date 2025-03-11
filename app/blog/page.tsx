import { Metadata } from "next";
import Link from "next/link";
import { getBlogPosts } from "../data/blog-posts";
import BlogCard from "../components/BlogCard";

export const metadata: Metadata = {
  title: "블로그 | My Blog",
  description: "다양한 주제의 블로그 포스트를 확인해보세요.",
};

// GitHub Pages에서 정적 내보내기를 지원하기 위해 export const dynamic = 'force-static' 설정 추가
export const dynamic = 'force-static';

export default function BlogPage() {
  // 모든 블로그 포스트 가져오기
  let posts = getBlogPosts();
  // 정적 내보내기를 위해 client-side에서 카테고리 필터링을 처리할 것임
  // 기존의 searchParams를 사용한 필터링은 클라이언트에서 JavaScript로 처리

  // 모든 카테고리 목록
  const allCategories = Array.from(new Set(getBlogPosts().map(post => post.category)));

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <header className="mb-12 text-center">
        <h1 className="text-4xl font-bold mb-4">블로그</h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
          프로그래밍, 생산성, 건강, 여행 등 다양한 주제에 대한 인사이트와 경험을 공유합니다.
        </p>
      </header>

      {/* 카테고리 필터 - 정적 내보내기를 위해 단순 표시용으로만 수정 */}
      <div className="mb-12">
        <div className="flex flex-wrap justify-center gap-3">
          <span className="px-4 py-2 rounded-full text-sm font-medium bg-indigo-600 text-white">
            전체
          </span>
          {allCategories.map((cat) => (
            <span 
              key={cat}
              className="px-4 py-2 rounded-full text-sm font-medium bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200"
            >
              {cat}
            </span>
          ))}
        </div>
        <p className="text-center mt-4 text-gray-600 dark:text-gray-400 text-sm">
          참고: GitHub Pages 정적 배포에서는 카테고리 필터링이 비활성화되었습니다.
        </p>
      </div>

      {/* 블로그 포스트 그리드 */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map(post => (
          <BlogCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
}
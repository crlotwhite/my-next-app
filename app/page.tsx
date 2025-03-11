import Image from "next/image";
import Link from "next/link";
import { getBlogPosts } from "./data/blog-posts";
import BlogCard from "./components/BlogCard";

export default function Home() {
  // 최신 블로그 포스트 3개 가져오기
  const latestPosts = getBlogPosts().slice(0, 3);

  return (
    <div className="pb-20">
      {/* 히어로 섹션 */}
      <section className="bg-gradient-to-br from-indigo-500 to-purple-600 dark:from-indigo-700 dark:to-purple-900 text-white">
        <div className="max-w-6xl mx-auto px-4 py-20 sm:py-28 md:py-32 flex flex-col items-center text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">나만의 생각과 경험을 공유하는 블로그</h1>
          <p className="text-xl opacity-90 max-w-3xl mb-10">
            프로그래밍, 생산성, 건강, 여행 등 다양한 주제에 대한 인사이트와 경험을 공유합니다.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/blog" className="px-8 py-3 bg-white text-indigo-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors">
              블로그 보기
            </Link>
            <Link href="#latest" className="px-8 py-3 bg-transparent border border-white font-semibold rounded-lg hover:bg-white/10 transition-colors">
              최신 글 보기
            </Link>
          </div>
        </div>
      </section>

      {/* 카테고리 섹션 */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">관심 있는 주제를 탐색해보세요</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <Link href="/blog?category=프로그래밍" className="group">
              <div className="p-6 border border-gray-200 dark:border-gray-700 rounded-lg hover:shadow-md transition-shadow flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-indigo-100 dark:bg-indigo-900 rounded-full flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-indigo-600 dark:text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">프로그래밍</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">코딩, 개발 팁, 튜토리얼</p>
              </div>
            </Link>
            <Link href="/blog?category=생산성" className="group">
              <div className="p-6 border border-gray-200 dark:border-gray-700 rounded-lg hover:shadow-md transition-shadow flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-600 dark:text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2 group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors">생산성</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">시간관리, 업무 효율화, 습관 형성</p>
              </div>
            </Link>
            <Link href="/blog?category=건강" className="group">
              <div className="p-6 border border-gray-200 dark:border-gray-700 rounded-lg hover:shadow-md transition-shadow flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-red-100 dark:bg-red-900 rounded-full flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-red-600 dark:text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2 group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors">건강</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">영양, 운동, 정신건강, 웰빙</p>
              </div>
            </Link>
            <Link href="/blog?category=여행" className="group">
              <div className="p-6 border border-gray-200 dark:border-gray-700 rounded-lg hover:shadow-md transition-shadow flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">여행</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">여행지 추천, 여행 팁, 경험 공유</p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* 최신 글 섹션 */}
      <section id="latest" className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">최신 글</h2>
          <p className="text-center text-gray-600 dark:text-gray-400 mb-12 max-w-3xl mx-auto">
            가장 최근에 작성된 블로그 포스트들을 확인해보세요. 다양한 주제와 인사이트를 발견할 수 있습니다.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {latestPosts.map(post => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="/blog" className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-700 dark:hover:bg-indigo-800 text-white font-medium rounded-lg transition-colors">
              모든 글 보기
            </Link>
          </div>
        </div>
      </section>

      {/* 뉴스레터 섹션 */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">뉴스레터 구독하기</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
            새로운 글이 게시될 때마다 이메일로 알림을 받아보세요. 스팸은 보내지 않으며 언제든지 구독을 취소할 수 있습니다.
          </p>
          <form className="flex flex-col sm:flex-row gap-4 justify-center max-w-lg mx-auto">
            <input 
              type="email" 
              placeholder="이메일 주소" 
              className="px-4 py-3 bg-gray-100 dark:bg-gray-700 border-0 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600 flex-grow"
              required
            />
            <button 
              type="submit"
              className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-700 dark:hover:bg-indigo-800 text-white font-medium rounded-lg transition-colors"
            >
              구독하기
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}

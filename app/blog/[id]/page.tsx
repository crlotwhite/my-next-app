import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getBlogPost, getBlogPosts } from "../../data/blog-posts";

// 정적 내보내기 설정
export const dynamic = 'force-static';

type Props = {
  params: { id: string }
}

// 동적 메타데이터 생성
export function generateMetadata({ params }: Props): Metadata {
  const post = getBlogPost(params.id);
  
  if (!post) {
    return {
      title: "포스트를 찾을 수 없습니다 | My Blog",
    };
  }
  
  return {
    title: `${post.title} | My Blog`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [post.coverImage],
    },
  };
}

// 정적 경로 생성
export function generateStaticParams() {
  const posts = getBlogPosts();
  return posts.map((post) => ({
    id: post.id,
  }));
}

export default function BlogPostPage({ params }: Props) {
  const post = getBlogPost(params.id);
  
  // 포스트가 없으면 404 페이지 표시
  if (!post) {
    notFound();
  }
  
  // 날짜 형식화
  const formattedDate = new Date(post.date).toLocaleDateString('ko-KR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
  
  // 콘텐츠를 마크다운 형식으로 변환하여 HTML로 렌더링
  // 간단한 마크다운 스타일링을 위한 함수
  const renderMarkdown = (content: string) => {
    // 제목
    content = content.replace(/^# (.+)$/gm, '<h1 class="text-3xl font-bold mt-8 mb-4">$1</h1>');
    content = content.replace(/^## (.+)$/gm, '<h2 class="text-2xl font-bold mt-6 mb-3">$1</h2>');
    content = content.replace(/^### (.+)$/gm, '<h3 class="text-xl font-bold mt-5 mb-2">$1</h3>');
    
    // 단락
    content = content.replace(/^(?!\<h|\<ul|\<ol|\<li)(.+)$/gm, '<p class="mb-4">$1</p>');
    
    // 굵은 텍스트
    content = content.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
    
    // 기울임 텍스트
    content = content.replace(/\*(.+?)\*/g, '<em>$1</em>');
    
    // 목록
    content = content.replace(/^- (.+)$/gm, '<li class="ml-6 mb-1 list-disc">$1</li>');
    
    // 목록 아이템들을 ul로 감싸기
    content = content.replace(/(<li.*?>.*?<\/li>(\n|$))+/g, '<ul class="mb-4">$&</ul>');
    
    return content;
  };
  
  const htmlContent = renderMarkdown(post.content);

  return (
    <article className="max-w-4xl mx-auto px-4 py-12">
      {/* 헤더 */}
      <header className="mb-8">
        <Link 
          href="/blog" 
          className="inline-flex items-center text-indigo-600 dark:text-indigo-400 mb-6 hover:underline"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          블로그로 돌아가기
        </Link>
        
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">{post.title}</h1>
        
        <div className="flex items-center mb-6">
          <div className="w-12 h-12 relative rounded-full overflow-hidden mr-4">
            <Image 
              src={post.author.picture} 
              alt={post.author.name} 
              fill
              style={{ objectFit: 'cover' }}
            />
          </div>
          <div>
            <div className="font-semibold">{post.author.name}</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">
              {formattedDate} · 
              <Link href={`/blog?category=${post.category}`} className="ml-1 text-indigo-600 dark:text-indigo-400 hover:underline">
                {post.category}
              </Link>
            </div>
          </div>
        </div>
      </header>
      
      {/* 커버 이미지 */}
      <div className="relative h-[300px] sm:h-[400px] md:h-[500px] w-full mb-10 rounded-lg overflow-hidden">
        <Image 
          src={post.coverImage} 
          alt={post.title} 
          fill
          style={{ objectFit: 'cover' }}
          priority
        />
      </div>
      
      {/* 내용 */}
      <div 
        className="prose prose-lg dark:prose-invert max-w-none"
        dangerouslySetInnerHTML={{ __html: htmlContent }}
      />
      
      {/* 태그 */}
      {post.tags && post.tags.length > 0 && (
        <div className="mt-10 pt-6 border-t border-gray-200 dark:border-gray-800">
          <h3 className="text-lg font-semibold mb-3">태그</h3>
          <div className="flex flex-wrap gap-2">
            {post.tags.map(tag => (
              <span 
                key={tag} 
                className="px-3 py-1 bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded-full text-sm"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      )}
      
      {/* 작성자 정보 */}
      <div className="mt-10 pt-6 border-t border-gray-200 dark:border-gray-800">
        <h3 className="text-lg font-semibold mb-4">작성자</h3>
        <div className="flex items-center">
          <div className="w-16 h-16 relative rounded-full overflow-hidden mr-6">
            <Image 
              src={post.author.picture} 
              alt={post.author.name} 
              fill
              style={{ objectFit: 'cover' }}
            />
          </div>
          <div>
            <div className="font-semibold text-lg">{post.author.name}</div>
            {post.author.bio && (
              <p className="text-gray-600 dark:text-gray-400">{post.author.bio}</p>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}
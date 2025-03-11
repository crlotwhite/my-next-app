import Image from 'next/image';
import Link from 'next/link';
import { BlogPost } from '../types';

interface BlogCardProps {
  post: BlogPost;
}

export default function BlogCard({ post }: BlogCardProps) {
  const { id, title, excerpt, coverImage, date, category } = post;
  
  // 날짜 형식화
  const formattedDate = new Date(date).toLocaleDateString('ko-KR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105">
      <Link href={`/blog/${id}`}>
        <div className="relative h-48 w-full">
          <Image 
            src={coverImage} 
            alt={title} 
            fill 
            style={{ objectFit: 'cover' }}
            // GitHub Pages에서는 placeholder blur와 blurDataURL이 문제가 될 수 있어 제거
          />
        </div>
        <div className="p-5">
          <div className="flex justify-between items-center mb-2">
            <span className="inline-block px-3 py-1 text-xs font-semibold text-indigo-600 dark:text-indigo-400 bg-indigo-100 dark:bg-indigo-900 rounded-full">
              {category}
            </span>
            <span className="text-xs text-gray-500 dark:text-gray-400">{formattedDate}</span>
          </div>
          <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">{title}</h3>
          <p className="text-gray-600 dark:text-gray-300 text-sm line-clamp-3">{excerpt}</p>
          <div className="mt-4">
            <span className="text-indigo-600 dark:text-indigo-400 font-medium inline-flex items-center">
              더 읽기
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
              </svg>
            </span>
          </div>
        </div>
      </Link>
    </div>
  );
}
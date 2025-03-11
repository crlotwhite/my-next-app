export interface BlogPost {
  id: string;
  title: string;
  content: string;
  excerpt: string;
  coverImage: string;
  date: string;
  category: string;
  author: Author;
  tags?: string[];
}

export interface Author {
  name: string;
  picture: string;
  bio?: string;
}
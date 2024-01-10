import { readFile } from 'fs/promises';
import path from 'path';

type Post = {
  id: number;
  title: string;
  description: string;
  date: string | Date;
  category: string;
  path: string;
};

export const getPosts = async (): Promise<Post[]> => {
  const filePath = path.join(process.cwd(), 'data', 'posts.json');
  return readFile(filePath, 'utf-8').then(JSON.parse);
};

export const getPost = async (id: number): Promise<string> => {
  const posts = await getPosts();
  const post = posts.find((post) => post.id === id);

  const filePath = path.join(
    process.cwd(),
    'data',
    'posts',
    `${post?.path}.md`
  );

  return readFile(filePath, 'utf-8');
};

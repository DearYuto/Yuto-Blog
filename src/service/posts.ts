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

import React from 'react';
import { getPosts } from '@/service/posts';
import Flex from '@/components/atoms/flex/Flex';
import Card from '@/components/molecules/card/Card';
import Link from 'next/link';

export default async function PostPage() {
  const posts = await getPosts();

  // 모든 포스트를 볼 수 있는 페이지

  return (
    <Flex
      style={{ maxWidth: '1200px', margin: '0 auto' }}
      wrap='wrap'
      justifyContent='center'
    >
      <Flex
        style={{ maxWidth: '100%' }}
        justifyContent='flexStart'
        gap='md'
        wrap='wrap'
        width='auto'
      >
        {posts.map((post) => {
          return (
            <Link key={post.id} href={`posts/${post.id}`}>
              <Card>
                <Card.Title>{post.title}</Card.Title>
                <Card.Content>{post.description}</Card.Content>
              </Card>
            </Link>
          );
        })}
      </Flex>
    </Flex>
  );
}

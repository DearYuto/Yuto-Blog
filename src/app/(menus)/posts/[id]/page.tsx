import { getPost } from '@/service/posts';
import React from 'react';

import MarkdownViewer from '@/components/organisms/markdown/MarkdownViewer';

type Props = {
  params: { id: string };
};

export default async function PostDetailPage({ params }: Props) {
  const post = await getPost(Number(params.id));

  return (
    <>
      <MarkdownViewer>{post}</MarkdownViewer>
    </>
  );
}

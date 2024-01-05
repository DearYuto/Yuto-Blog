'use client';

import Tabs from '@/components/molecules/tab/Tabs';

export default function Home() {
  return (
    <div>
      <Tabs activeTabIndex={0}>
        <Tabs.Label label='탭1' index={0}></Tabs.Label>
        <Tabs.Content>탭 컨텐츠1</Tabs.Content>

        <Tabs.Label label='탭2' index={1}></Tabs.Label>
        <Tabs.Content>탭 컨텐츠2</Tabs.Content>

        <Tabs.Label label='탭3' index={2}></Tabs.Label>
        <Tabs.Content>탭 컨텐츠3</Tabs.Content>
      </Tabs>
    </div>
  );
}

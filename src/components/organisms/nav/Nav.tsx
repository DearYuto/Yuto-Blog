import { comfortaa, nanum_gothic } from '@/app/layout';
import Flex from '@/components/atoms/flex/Flex';
import Text from '@/components/atoms/text/Text';
import Link from 'next/link';
import React from 'react';
import { contaier } from './nav.css';

export default function Nav() {
  return (
    <nav className={`${contaier} ${nanum_gothic.className}`}>
      <Flex alignItems='center' justifyContent='spaceBetween'>
        <Link href={'/'}>
          <Text size='lg' weight='bold' as='h1'>
            유토의 하루
          </Text>
        </Link>
        <div className={`${comfortaa.className}`}>
          <Flex gap='md'>
            <Link href={'/about'}>
              <Text>About</Text>
            </Link>
            <Link href={'/contact'}>
              <Text>Contact</Text>
            </Link>
            <Link href={'/posts'}>
              <Text>Posts</Text>
            </Link>
          </Flex>
        </div>
      </Flex>
    </nav>
  );
}

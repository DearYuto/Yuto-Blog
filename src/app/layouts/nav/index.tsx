import { comfortaa, nanum_gothic } from '@/app/layout';
import Link from 'next/link';
import React from 'react';

export default function Nav() {
  return (
    <header className={'z-10 fixed backdrop-blur flex w-full bg-[#ffffff50]'}>
      <nav className='relative flex w-full p-4 max-w-[1200px] justify-between m-auto'>
        <Link href={'/'}>
          <h1>유토의 하루 </h1>
        </Link>
        <ul className={`flex gap-4 ${comfortaa.className}`}>
          <li>
            <Link href={'/about'}>About</Link>
          </li>
          <li>
            <Link href={'/contact'}>Contact</Link>
          </li>
          <li>
            <Link href={'/posts'}>Posts</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

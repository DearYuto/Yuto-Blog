import { comfortaa, nanum_gothic } from '@/app/layout';
import Link from 'next/link';
import React from 'react';

export default function Nav() {
  return (
    <nav className='z-10 fixed h-[56px] w-full m-auto backdrop-blur bg-[#ffffff50] flex items-center justify-center'>
      <div className='max-w-[1200px] h-[50px] flex justify-between items-center flex-1'>
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
      </div>
    </nav>
  );
}

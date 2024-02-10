'use client';

import React from 'react';
import Image from 'next/image';

import Flex from '@/components/atoms/flex/Flex';
import Text from '@/components/atoms/text/Text';
import Tabs from '@/components/molecules/tab/Tabs';

import { container, left, right } from './aboutPage.css';

import profile from '../../../../public/images/profile/profile.jpg';
import Link from 'next/link';
import { palette } from '@/utils/colors';

export default function AboutPage() {
  return (
    <Flex justifyContent='center' alignItems='center'>
      <div className={container}>
        <Flex height='full'>
          <div className={left}>
            <Flex height='full' direction='column' alignItems='center'>
              <Image
                style={{
                  background: '#ddd',
                  borderRadius: '100%',
                  display: 'flex',
                }}
                src={profile}
                width='250'
                height='250'
                alt='profile_image'
              />
              <Flex
                style={{ padding: '20px', marginTop: '20px' }}
                height='full'
                direction='column'
              >
                <Text size='2xl' weight='bold'>
                  {process.env.USER_NAME_KR}
                </Text>
                <Text
                  style={{ marginTop: '5px' }}
                  weight='bold'
                  color='gray600'
                >
                  {process.env.USER_NAME_EN}
                </Text>
                <Text
                  style={{ marginTop: '20px' }}
                  color='primary'
                  weight='bold'
                >
                  Frontend Developer
                </Text>
                <Text size='xs' color='gray500' style={{ marginTop: '20px' }}>
                  내용 준비중
                </Text>
                <Text size='xs' color='gray500'>
                  내용 준비중
                </Text>
                <Text size='xs' style={{ marginTop: '20px' }} color='gray500'>
                  🌎 Republic of korea
                </Text>
                <div
                  style={{
                    marginTop: 'auto',
                  }}
                >
                  <Flex gap='xs' direction='column'>
                    <Text size='xs' color='gray400'>
                      💌 준비중..
                    </Text>
                    <Text size='xs' color='gray400'>
                      <Link
                        style={{ color: palette.gray400 }}
                        href={'https://github.com/DearYuto'}
                      >
                        💻 https://github.com/DearYuto
                      </Link>
                    </Text>
                  </Flex>
                </div>
              </Flex>
            </Flex>
          </div>
          <div className={right}>
            <Tabs activeTabIndex={0}>
              <Tabs.Label key={0} index={0} label='Introduce' />
              <Tabs.Content>내용 준비중입니다.</Tabs.Content>

              <Tabs.Label key={1} index={1} label='Career' />
              <Tabs.Content>
                <Flex direction='column'>
                  <h4>내용 준비중</h4>
                  <p>내용 준비중</p>
                </Flex>
              </Tabs.Content>

              <Tabs.Label key={2} index={2} label='Project' />
              <Tabs.Content>내용 준비중입니다.</Tabs.Content>

              <Tabs.Label key={3} index={3} label='Skills' />
              <Tabs.Content>내용 준비중입니다.</Tabs.Content>
            </Tabs>
          </div>
        </Flex>
      </div>
    </Flex>
  );
}

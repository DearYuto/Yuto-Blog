# 바닐라 익스트랙 Storybook 충돌 에러 트러블슈팅

Vanilla-extract + storybook을 사용한 환경에서 발생한 충돌 이슈를 기록한다.

먼저, 첫 번째로 만난 이슈이다.

```jsx
Styles were unable to be assigned to a file. This is generally caused by one of the following:

- You may have created styles outside of a '.css.ts' context
- You may have incorrect configuration. See https://vanilla-extract.style/documentation/getting-started
```

컴포넌트에 바닐라 익스트랙을 적용하려고 했더니 스타일을 적용할 수 없다며…ㅠㅠ

스토리북에서 에러를 뿜어내고 있었다.

도대체 뭐가 문젠지 원인을 알 수가 없어서 에러 메시지를 구글링해보았다.

구글링 서치 중 바닐라 익스트랙 디스커션을 발견할 수 있었고

https://github.com/vanilla-extract-css/vanilla-extract/issues/458

`비슷한 이슈로 추정되는 글을 발견`했다.

그리고 혹시 스토리북과 충돌 이슈일까 싶어 무작정 스토리북 공식문서를 찾았다.

[Integrate Vanilla Extract with Storybook | Storybook](https://storybook.js.org/recipes/@vanilla-extract/css)

> 플러그인 설치해보기

```jsx
# For Vite users
yarn add -D @vanilla-extract/vite-plugin
```

공식문서따라 플러그인을 설치해었는데도 여전히 동일한 에러가 뜬다.

개발 환경에서 스타일은 제대로 적용되는 것을 보니 스토리북과 뭔가 호환이 안되는 문제가 있는 것으로 추정된다.

다른 디스커션이나 이슈가 있는지 찾아봤다.

https://github.com/vanilla-extract-css/vanilla-extract/issues/835

아쉽게도 소용이 없었고 다음은 버전을 올려보기로 했다.

> npm update 해보기

혹시 모르니 메이저 버전을 제외하고 버전을 올려봤다.

하지만 이것도 실패..

> 우여곡절 끝에 첫 번째 이슈 해결!

결국 `main.ts` 파일에 에드온이나 `뭔가 설정을 추가해야 할 것 같다는 생각`이 들어서 계속 서치해봤다.

공식문서와 챗지피티의 도움을 받았고, `webpackFianl` 설정으로 바닐라 익스트랙 플러그인을 세팅해주었더니 드디어 성공했다.

```jsx
npm install @vanilla-extract/css @vanilla-extract/webpack-plugin style-loader css-loader --save-dev
```

```jsx
import type { StorybookConfig } from '@storybook/nextjs';
import { VanillaExtractPlugin } from '@vanilla-extract/webpack-plugin';

const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-onboarding',
    '@storybook/addon-interactions',
  ],
  framework: {
    name: '@storybook/nextjs',
    options: {},
  },
  docs: {
    autodocs: 'tag',
  },
  webpackFinal: async (config) => {
    config?.plugins?.push(new VanillaExtractPlugin());

    return config;
  },
};
export default config;
```

## 또 다른 이슈 발생.

import 구문에서 스토리북이 `@` 를 인식하지 못하는 문제였고,

이번 이슈는 비교적 빨리 해결할 수 있었다. (feat. chatGPT)

> 💡 Next.js에서 import alias 사용하는 경우 설정

```jsx
// path를 import 후 사용
import path from 'path';

webpackFinal: async (config) => {
    config?.plugins?.push(new VanillaExtractPlugin());

		// 아래 코드 추가
    config.resolve = config.resolve || {};
    config.resolve.alias = config.resolve.alias || {};
    config.resolve.alias['@'] = path.resolve(__dirname, '../src');
		//

    return config;
  },
```

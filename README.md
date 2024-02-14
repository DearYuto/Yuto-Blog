# 2024 BLOG PROJECT. 🐈

현재 개발 `진행중`인 프로젝트입니다.

### 💻 Tech Stacks.

<img src="https://img.shields.io/badge/VanillaExtract-CCFBF1?style=flat-round&logo=css3&logoColor=4A5E65"/> <img src="https://img.shields.io/badge/TypeScript-3178C6?style=flat-round&logo=TypeScript&logoColor=white"/>
<img src="https://img.shields.io/badge/Next.js-000000?style=flat-round&logo=Next.js&logoColor=white"/> <img src="https://img.shields.io/badge/Storybook-FF4785?style=flat-round&logo=Storybook&logoColor=white"/>

### 📔 Docs.

[Storybook](https://65aa1746f3cde2304b1184b8-owqzcfhnem.chromatic.com/?path=/docs/colors--docs)

### ✈ TroubleShooting.

[Issue](https://github.com/DearYuto/Yuto-Blog/issues)

---

## 기능 구현 목록 📄

- [x] nav 메뉴 구성

  - [x] 내 블로그 로고가 존재하고, 로고를 클릭하면 `/` 경로로 이동한다.
  - [x] about, posts, contact 로 구성되어 있다.
  - [x] about은 클릭 시 `/about`으로 이동한다.
  - [x] posts는 클릭 시 `/posts`로 이동한다.
  - [x] contact는 클릭 시 `/contact`로 이동한다.

- [x] about 페이지 구성

  - [x] 내 프로필을 확인할 수 있다.

- [ ] posts 페이지 구성

  - [ ] 내가 작성한 게시글을 확인할 수 있다.
  - [ ] 게시글별 카테고리를 구성할 수 있다.
  - [ ] 카테고리를 누르면 /post/:category 경로로 이동된다.
  - [ ] 카테고리를 누르면 해당 카테고리에 작성한 게시글을 확인할 수 있다.
  - [ ] 전체보기 카테고리에서는 작성한 모든 게시글을 확인할 수 있다.

- [ ] contact 페이지 구성

  - [ ] 내 이메일, 깃허브 주소, 컨텍 가능한 정보를 보여준다.

- [ ] 게시글

  - [ ] 게시글은 카드 컴포넌트로 구현한다.
  - [ ] 카드 컴포넌트는 썸네일, 제목, 날짜, 내용 미리보기, 카테고리 정보로 구성되어 있다.

- [ ] 게시글 카드를 누르면 디테일 페이지를 확인할 수 있다.

  - [ ] 작성한 게시글 내용을 볼 수 있다. (제목, 썸네일, 본문, 작성일자)
  - [ ] 디테일 페이지는 마크다운을 사용하여 작성할 수 있다.
  - [ ] 다음, 이전 작성 게시글로 이동할 수 있다.

- [ ] 작성한 게시글 중에서 추천 게시글를 캐러셀로 보여준다.

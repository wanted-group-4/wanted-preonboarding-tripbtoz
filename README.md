# 트립비토즈 프론트엔드 과제

## 호텔 예약 사이트 🏨

> **by. 원티드 프리온보딩 4팀 (2022.08.01 ~ 06)**

# 💡 핵심 로직

### 랜딩 & 조회 페이지 (Search.tsx)

#### SearchBar.tsx 컴포넌트

1.  날짜란 클릭 → 캘린더 모달이 열리고 → 체크인, 체크아웃 날짜를 선택
2.  웹일 때는 날짜 선택 이후 자동으로 인원선택 모달이 열리고 → 어른, 어린이 인원수 선택
3.  서치바에서 선택한 날짜, 인원에 맞을 search 파라미터로 작성해 라우팅

#### Search.tsx 페이지

1.  queryString의 변화에 따라 데이터 fetch 요청
2.  react-query의 infinite query, page 파라미터를 이용해 infinity scroll 을 위한 데이터를 응답받고
3.  응답받은 호텔 데이터들을 각각 카드 컴포넌트로 만들고 무한스크롤로 조회

<div>
  <img width="48%" src="https://user-images.githubusercontent.com/87647245/183127757-d0a3ac4a-300e-4d8d-a4b0-8620bc3542e7.png">
  <img width="48%" src="https://user-images.githubusercontent.com/87647245/183127765-8472d9e7-a98d-4308-bfc0-ad7f0448c9f5.png">
</div>

### 상세페이지

#### Detail.tsx

- 상세페이지에서 예약버튼을 클릭하면 정보가 서버에 post 요청 및 localStorage 저장

#### MyPage.tsx

- 예약된 호텔 정보 조회

<div align="center">
  <img width="48%" src="https://user-images.githubusercontent.com/87647245/183133622-a6c88153-3e01-4ab7-8653-9635da2bff58.png">
  <img width="48%" src="https://user-images.githubusercontent.com/87647245/183133601-148700b5-5fae-44d2-a510-620c3a3f3fff.png">
</div>

# 💡 실행 방법

```bash
# with yarn
# install
$ yarn install

# run
$ yarn start
```

# 💡 구현 상세

### 01. 사전 작업

- 프로젝트 초기 세팅 [박소영](https://github.com/soyoung931014) 👍
- 반응형을 고려한 전체 UI 목업 제작 (figma) [이미림](https://github.com/mrlee323) 👍

<img src="https://user-images.githubusercontent.com/87647245/183127767-568f3996-657c-4c5c-ad84-89f6dd0b4589.png" alt="figma">

### 02. 역할 및 팀원 소개

| 팀원 | 역할 | 상세 | 유의할 점 |
| --- | --- | --- | --- |
| [이가람](https://github.com/devmagrfs) | api 제작 | react-query를 이용한 api 구현 (검색, 예약) | infinite Queries |
| [서소희](https://github.com/greenish0902) | 서치바 | UI, 검색 내용을 쿼리스트링으로 전달 | 반응형 |
| [이미림](https://github.com/mrlee323) | 서치바 - 캘린더 모달 | UI, 검색창에 선택한 날짜 전달 | 반응형 |
| [박소영](https://github.com/soyoung931014) | 서치바 - 인원수 / 예약확인 모달 | UI, 검색창에 모달에서 선택한 인원수 전달 | 반응형 |
| [박지훈](https://github.com/JiehoonPark) | 랜딩페이지, 마이페이지 | UI, 페이지 조회, 무한스크롤 | 반응형, Infinite Queries |
| [성열하](https://github.com/Hotsumm) | 상세페이지, 상세페이지 카드 | UI, 카드 (스켈레톤, 트랜지션), 예약 및 저장 | 반응형 |

### 03. 기술 스택

- **TypeScript & ReactJS (Create React App with yarn)**
- **[Styles]** styled-components, styled-reset
- **[API] a**xios, json-server
- **[Routing]** react-router-dom
- **[Icons]** react-icons
- **[Date]** date-fns
- **[State]** @tanstack/react-query

### 04. 반응형 및 레이아웃 구조 세팅

#### 반응형

- styled-component의 theme 기능 이용 (480px, 820px, 900px)

```jsx
const size = {
  mobile: '480px',
  middle: '820px',
  tablet: '900px',
};

const deviceSize = {
  mobile: `(max-width : ${size.mobile})`,
  middle: `(max-width : ${size.middle})`,
  tablet: `(max-width : ${size.tablet})`,
};

// 중략

const theme = {
  color,
  size,
  deviceSize,
};

export default theme;
```

#### 레이아웃

- 공통 레이아웃 구조 사전에 정의

```jsx
function Layout() {
  return (
    <LayoutContainer>
      <Header />
      <Main>
        <Outlet />
      </Main>
    </LayoutContainer>
  );
}
```

## 💡 페이지별 구현 결과

### Search 페이지

#### 캘린더

- [x] 오늘부터 12개월 이내의 달력 표출
- [x] 기본값 1주일 뒤 1박
- [x] 지난 날짜는 선택 불가
- [x] 체크인 날짜와 체크아웃 날짜를 선택시 자동으로 범위 내 highlighting
- [x] 웹에서는 슬라이더, 모바일은 스크롤
- [x] 이전 날짜 또는 새로운 날짜 선택시 초기화 및 새로운 시작일 지정

<div align="center">
 <img width="48%" src="https://user-images.githubusercontent.com/87647245/183127757-d0a3ac4a-300e-4d8d-a4b0-8620bc3542e7.png">
 <img width="18%" src="https://user-images.githubusercontent.com/87647245/183127738-c4b29e17-0e57-434f-93bc-a860cb4bd3d0.png">
 <img width="18%" src="https://user-images.githubusercontent.com/87647245/183127749-840aaeda-9920-4b2d-927d-d142dd679833.png">
</div>

#### 인원 선택

- [x] +, - 버튼으로 인원수 지정
- [x] 성인, 아동 구분
- [x] 기본값 성인 2, 아동 0

 <div align="center">
   <img width="68%" src="https://user-images.githubusercontent.com/87647245/183127765-8472d9e7-a98d-4308-bfc0-ad7f0448c9f5.png">
   <img width="20%" src="https://user-images.githubusercontent.com/87647245/183127761-46d6310a-638e-4827-98e5-d15dc936f344.png">
 </div>

#### 무한스크롤

React Query의 Infinite Queries 를 이용한 무한스크롤 요청

- [x] 한 번에 10개의 정보 요청
- [x] 로딩바 노출: Loading 시 스켈레톤 UI 와 트랜지션 적용
- [x] 마지막 호텔인 경우 "마지막 호텔입니다" 표시

<div align="center">
 <img width="24%" src="https://user-images.githubusercontent.com/87647245/183127783-3a0496e3-37fa-4613-b8ce-42e765583156.png">
 <img width="24%" src="https://user-images.githubusercontent.com/87647245/183127958-65fa1161-17fb-4908-a586-639add3e8bd6.png">
 <img width="24%" src="https://user-images.githubusercontent.com/87647245/183127772-6aaeba2f-6cb2-4da5-acde-3f641323828e.png">
 <img width="24%" src="https://user-images.githubusercontent.com/87647245/183127769-ab79e443-d5c8-4179-a58c-f30095b93131.png">
</div>

### Detail 페이지

개별 호텔정보 조회

- [x] useLocation 으로 호텔명과 정보를 받아서 fetch 요청
- [x] 호텔 리스트 재검색시 랜딩페이지로 이동해 조회
- [x] 예약 기능 구현: DB에 post 요청으로 저장 & localStorage에 저장
- [x] 저장할 정보: 호텔 이름, 체크인, 체크아웃 날짜, 인원수

<div align="center">
  <img width="48%" src="https://user-images.githubusercontent.com/87647245/183133622-a6c88153-3e01-4ab7-8653-9635da2bff58.png">
  <img width="24%" src="https://user-images.githubusercontent.com/87647245/183133568-3df3e4d0-1d73-40ae-9cfd-69b50976ea33.png">
</div>

### MyPage 페이지

예약 결과 조회

- [x] 예약 기능 구현: DB에 저장된 예약정보를 fetch 해서 조회

<div align="center">
  <img width="48%" src="https://user-images.githubusercontent.com/87647245/183133601-148700b5-5fae-44d2-a510-620c3a3f3fff.png">
  <img width="24%" src="https://user-images.githubusercontent.com/87647245/183127772-6aaeba2f-6cb2-4da5-acde-3f641323828e.png">
</div>

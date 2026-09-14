# react2022

React와 Vite로 구성한 포트폴리오형 웹 애플리케이션입니다. 영화 검색, YouTube 검색, 레퍼런스, 포트폴리오, 소개 및 문의 화면을 제공합니다.

## 시작하기

### 설치

```bash
npm install
```

### 개발 서버

```bash
npm run dev
```

개발 서버를 실행한 뒤 터미널에 표시된 로컬 주소로 접속합니다.

### 테스트

```bash
npm test
```

Vitest, jsdom, Testing Library를 사용해 테스트를 실행합니다.

### 프로덕션 빌드

```bash
npm run build
```

빌드 결과는 `dist/`에 생성됩니다. 빌드 결과를 확인하려면 다음 명령을 사용합니다.

```bash
npm run preview
```

## GitHub Pages 배포

`master` 브랜치에 push하면 GitHub Actions가 자동으로 빌드하고 Pages에 배포합니다.

저장소 설정에서 `Settings > Pages > Build and deployment > Source`를 `GitHub Actions`로 선택해야 합니다. 배포 주소는 다음과 같습니다.

`https://dnwls7738.github.io/react2022/`

영화 및 YouTube API를 사용하려면 저장소의 `Settings > Secrets and variables > Actions`에 다음 Secrets를 추가합니다.

```text
VITE_MOVIE_API
VITE_YOUTUBE_API
```

Vite 환경 변수는 브라우저에 포함되므로 API 키는 완전한 비밀 값이 아닙니다. TMDB와 YouTube 콘솔에서 도메인, 사용량, API 권한을 제한해야 합니다.

## 주요 명령

| 명령 | 설명 |
| --- | --- |
| `npm run dev` | Vite 개발 서버 실행 |
| `npm start` | Vite 개발 서버 실행 |
| `npm test` | 테스트 단일 실행 |
| `npm run build` | 프로덕션 빌드 |
| `npm run preview` | 빌드 결과 미리보기 |

## 프로젝트 구조

```text
src/
├─ App.jsx                    라우팅 설정
├─ index.jsx                  React 진입점
├─ style.scss                 전역 스타일 진입점
├─ components/
│  ├─ basics/                 기본 UI 컴포넌트
│  ├─ includes/               페이지별 재사용 콘텐츠
│  ├─ layout/                 공통 레이아웃
│  └─ pages/                  라우트 화면
└─ assets/
	├─ fonts/                  로컬 폰트
	├─ json/                   정적 JSON 데이터
	└─ styles/                 SCSS partial
```

주요 경로는 다음과 같습니다.

- `/`: 메인 화면
- `/about`: 소개
- `/reference`: 레퍼런스 목록
- `/refer-detail`: 레퍼런스 상세
- `/movie`: 영화 검색
- `/youtube`: YouTube 검색
- `/portfolio`: 포트폴리오
- `/contact`: 문의

## 환경 변수와 외부 API

영화와 YouTube 화면은 외부 API를 사용합니다. 로컬 환경에서는 `.env.local` 파일에 다음 값을 설정해야 합니다.

```env
VITE_MOVIE_API=TMDB_API_KEY
VITE_YOUTUBE_API=YOUTUBE_API_KEY
```

현재 소스는 위 값을 `import.meta.env`에서 읽습니다. API 키는 저장소에 커밋하지 않습니다.

외부 API를 사용하는 기능은 API 키, 네트워크 연결, CORS 정책, API 사용량 제한에 따라 실행 결과가 달라질 수 있습니다.

## 작업 기록

변경 작업 후에는 실행한 테스트와 빌드 결과, 변경 요약, 검증하지 못한 범위를 이 문서에 한국어로 기록합니다.

### 2026-09-14

- README에 프로젝트 개요, 실행 명령, 구조, 라우트, 환경 변수 및 작업 기록 규칙을 작성했습니다.
- `npm.cmd test`: 테스트 파일 1개, 테스트 1개 통과
- `npm.cmd run build`: 프로덕션 빌드 성공
- 빌드 중 Sass `@import` 문법의 향후 제거 예정 경고가 발생했지만 빌드는 정상 완료되었습니다.

### 2026-09-14 추가 현대화

- Create React App을 제거하고 Vite 8 기반으로 전환했습니다.
- React 19, React Router 7, Vitest 및 최신 Testing Library로 업그레이드했습니다.
- `npm test`: 테스트 파일 1개, 테스트 1개 통과
- `npm run build`: Vite 프로덕션 빌드 성공
- `npm audit --audit-level=high`: 고위험 취약점 0개
- Sass `@import` 문법은 Dart Sass 3.0에서 제거될 예정이므로 추후 `@use`/`@forward`로 전환해야 합니다.

### 2026-09-14 GitHub Pages 설정

- 저장소 하위 경로 `/react2022/`에 맞춰 Vite `base`를 설정했습니다.
- GitHub Pages 정적 호스팅에 맞춰 `HashRouter`를 사용하도록 변경했습니다.
- `master` push 시 GitHub Actions가 Vite 빌드 결과를 Pages에 배포하도록 추가했습니다.
- 영화 및 YouTube API 환경 변수를 `VITE_MOVIE_API`, `VITE_YOUTUBE_API`로 통일했습니다.
- `npm test`: 테스트 파일 1개, 테스트 1개 통과
- `npm run build`: Pages용 프로덕션 빌드 성공

# Exchange Application

실시간 환율 정보를 기반으로 외화를 매수/매도할 수 있는 환전 웹 애플리케이션입니다.

## 주요 기능

- **이메일 기반 인증** - JWT 토큰을 활용한 로그인/로그아웃
- **실시간 환율 조회** - USD, JPY, EUR, CNY, GBP 환율을 1분 주기로 갱신
- **환전 주문** - 매수/매도 탭을 통한 외화 환전 및 실시간 견적 계산
- **지갑 관리** - KRW, USD, JPY 등 다중 통화 잔액 확인
- **주문 내역** - 환전 거래 이력 조회

## 기술 스택

| 분류 | 기술 |
|------|------|
| Framework | React 19 |
| Language | TypeScript |
| Build | Vite |
| Routing | React Router DOM 7 |
| Server State | TanStack React Query |
| HTTP Client | Axios |
| Styling | Vanilla Extract (zero-runtime CSS) |
| Icons | Lucide React |
| Linting | ESLint, Prettier |
| Package Manager | pnpm |

## 프로젝트 구조

Feature-based design(도메인 기반 구조)을 따릅니다.

```
src/
├── features/                         # 도메인별 기능 모듈
│   ├── auth/                         # 인증
│   │   ├── apis/                     # AuthAPI (login)
│   │   ├── components/
│   │   │   ├── login-form.tsx        # 로그인 폼
│   │   │   └── protected-route.tsx   # 인증 라우트 보호
│   │   ├── contexts/                 # AuthContext, Provider
│   │   └── hooks/
│   │       └── useAuth.ts
│   │
│   ├── exchange/                     # 환율
│   │   ├── apis/                     # ExchangeRatesAPI (getLatest)
│   │   ├── components/
│   │   │   ├── dashboard/            # 환율 대시보드
│   │   │   └── rate/                 # 개별 환율 카드
│   │   └── hooks/
│   │       └── useExchangeRates.ts
│   │
│   ├── order/                        # 환전 주문
│   │   ├── apis/                     # OrderAPI (quote, create, getOrders)
│   │   ├── components/
│   │   │   ├── exchange-form.tsx     # 환전 폼 (매수/매도)
│   │   │   └── order-history.tsx     # 주문 내역
│   │   └── hooks/
│   │       ├── useCreateOrder.ts
│   │       ├── useOrders.ts
│   │       └── useQuote.ts
│   │
│   └── wallet/                       # 지갑
│       ├── apis/                     # WalletAPI (getMy)
│       ├── components/
│       │   └── wallet-summary.tsx    # 지갑 잔액 요약
│       └── hooks/
│           └── useMyWallet.ts
│
├── pages/                            # 페이지 컴포넌트
│   ├── auth/
│   │   └── login-page.tsx            # 로그인 페이지
│   ├── home/
│   │   └── home-page.tsx             # 메인 대시보드 (환율 + 환전 + 지갑)
│   └── my/
│       └── my-page.tsx               # 마이페이지 (주문 내역)
│
├── shared/                           # 공통 모듈
│   ├── apis/                         # Axios 인스턴스, 토큰 유틸
│   ├── components/
│   │   ├── layout/                   # 레이아웃 (Header + Outlet)
│   │   └── ui/
│   │       ├── error-boundary/       # 에러 바운더리
│   │       ├── header/               # 헤더 네비게이션
│   │       └── spinner/              # 로딩 스피너
│   ├── constants/                    # 시간 상수 (SECOND, MINUTE 등)
│   └── styles/                       # 글로벌 스타일, flex 유틸리티
│
├── main.tsx                          # 앱 진입점
├── router.tsx                        # 라우트 정의
└── vite-env.d.ts
```

## 시작하기

### 사전 요구사항

- [Node.js](https://nodejs.org/) (v18 이상)
- [pnpm](https://pnpm.io/)

### 설치

```bash
pnpm install
```

### 개발 서버 실행

```bash
pnpm dev
```

`http://localhost:5173`에서 앱이 실행됩니다.

### 프로덕션 빌드

```bash
pnpm build
```

### 빌드 미리보기

```bash
pnpm preview
```

### 린트

```bash
pnpm lint
```

## API 프록시

개발 환경에서 `/api` 요청은 `https://exchange-example.switchflow.biz`로 프록시됩니다. (`vite.config.ts`에서 설정)

## 경로 별칭

`@/`는 `src/` 디렉토리를 가리킵니다. (`tsconfig.json`에서 설정)

```typescript
import { useAuth } from '@/features/auth/hooks/useAuth';
```

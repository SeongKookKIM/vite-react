# React + TypeScript + Vite + Yarn

## 프로젝트 생성시

```js
npm create vite@latest
or
yarn create vite
```

```js
# npm 6.x
npm create vite@latest [프로젝트 명] --template react-ts

# npm 7+, '--'를 반드시 붙여주세요
npm create vite@latest [프로젝트 명] -- --template react-ts

# yarn
yarn create vite [프로젝트 명] --template react-ts

# pnpm
pnpm create vite [프로젝트 명] --template react-ts
```

## Create React App대신 Vite를 사용하는 이유?

우선 CRA는 자바스크립트 코드로 구성된 툴인 Webpack을 사용합니다.
자바스크립트는 기본적으로 `interpreted` 언어이기 때문에 느립니다.
코드의 양이 적다면 차이를 느끼기 어려울 수도 있지만, 처리해야 할 코드 양이 방대한 경우에는 그 단점이 확실히 느껴질 겁니다.
그래서 개발자들은 위와 같은 단점을 해결하기 위해 `Go`와 같은 저급언어(low-level language)를 활용하여 자바스크립트 툴을 창조하였고, 그렇게 해서 생겨난 게 `Esbuild`이며 `Esbuild`를 기반으로 만들어진 빌드툴인 Vite를 사용하게 된 것 입니다.

## TypeScriptr + SWC VS TypeScript

- SWC란?
  SWC란 `Speedy Web Compiler`의 약자로 `Rust`라는 언어로 제작이 된 말 그대로 매우 빠른 자바스크립트 컴파일러이며, 기존 `Babel`이 하던 일의 대체제라고 합니다.
  또한 SWC는 컴파일러이지만 웹팩과 같은 자바스크립트 번들러의 기능도 제공하고 있다고 합니다.
  따라서 그냥 컴파일러가 아닌 `SWC`란 `Rust`기반의 플랫폼입니다.

- SWC가 왜 빠를까?
  바로 `SWC`가 `Rust` 기반의 툴이기 때문입니다.
  `Rust` 언어의 특징이 바로 병렬 처리를 고려한 언어라는 점 입니다.
  따라서 간단하게 설명을 하자면 싱글 스레드 언어인 자바스크립트로 작성이 된 `Babel`과는 다르게 `SWC`는 동시에 여러 파일들을 변환 할 수 있기 때문에 빠르다는 것 입니다.
  공식 문서에 따르면 SWC는 단일 스레드에서 Babel보다 20배 빠르고 4개 코어에서 70배 빠르다고 합니다.

### ESLint 옵션 추가

"no-unused-vars": "off",
"react/prop-types":"off",

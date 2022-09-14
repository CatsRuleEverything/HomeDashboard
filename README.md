# Home Dashboard

![sample image](https://user-images.githubusercontent.com/87305109/189620310-37b2182f-2362-4f59-b711-b6ad4ffc4bf5.png)
_sample image_

- `react`
- `enact`

# 개발환경 설정 - git clone을 하고나서

## 1. enact cli 설치하기

```bash
npm install -g @enact/cli
```

## 2. webOS template 설치하기

```bash
enact template install @enact/template-webostv
```

## 3. 개발을 위해 node module 설치

```bash
npm install
```

# 참고 사항

## API library - sandstone Library
sandstone library에는 많은 유용한 components가 존재합니다. 그 중에서 몇 가지를 소개합니다.

Enact에선 component를 적용한 효과를 미리 볼 수 있도록 sandstone sample을 제공합니다.이를 참고하여 필요한 기능을 확인할 수 있습니다. 

[샌드스톤 도큐먼트](https://enactjs.com/sampler/sandstone/?path=/story/about-a-tour-of-sampler--a-tour-of-sampler)

_버튼 사용 예시_

```javascript
import Button from '@enact/sandstone/Button';

<Button>click me</Button>
```

_드롭다운 사용 예시_

```javascript
import Dropdown from '@enact/sandstone/Dropdown';

<Dropdown
  inline
  title="Options"
>
  {['Option 1', 'Option 2', 'Option 3', 'Option 4', 'Option 5']}
</Dropdown>
```

# enact 관련

## Available Scripts

In the project directory, you can run:

### `npm run serve`

Builds and serves the app in the development mode.<br>
Open [http://localhost:8080](http://localhost:8080) to view it in the browser.

The page will reload if you make edits.<br>

### `npm run pack` and `npm run pack-p`

Builds the project in the working directory. Specifically, `pack` builds in development mode with code un-minified and with debug code included, whereas `pack-p` builds in production mode, with everything minified and optimized for performance. Be sure to avoid shipping or performance testing on development mode builds.

### `npm run watch`

Builds the project in development mode and keeps watch over the project directory. Whenever files are changed, added, or deleted, the project will automatically get rebuilt using an active shared cache to speed up the process. This is similar to the `serve` task, but without the http server.

### `npm run clean`

Deletes previous build fragments from ./dist.

### `npm run lint`

Runs the Enact configuration of Eslint on the project for syntax analysis.

### `npm run test` and `npm run test-watch`

These tasks will execute all valid tests (files that end in `-specs.js`) that are within the project directory. The `test` is a standard single execution pass, while `test-watch` will set up a watcher to re-execute tests when files change.

# wedding 청첩장
## spec
* react
* typescript
* yarn berry 사용
* vscode 

## setting
### yarn & typescipt 설정
* yarn 설치
  * $ npm install -g yarn
* project 생성
  * $ yarn create react-app wedding --template typescript
* node_moudles 폴더 제거
* Yarn Berry (with PnP) 사용
  * yarn berry 적용
    * $ yarn set version berry
  * PnP 모드 활성화 (node module 대신 사용 명시)
    * $ yarn config set nodeLinker pnp
    * => .yarnrc.yml 파일에 추가 "nodeLinker: pnp"
  * 패키지 설치 (.pnp.cjs 파일 생성됨)
    * $ yarn install
  * .zip 내부의 파일을 직접 접근을 위해 ZipFS Plugin 설치
  * Yarn PnP(Plug’n’Play) 환경에서 VSCode가 패키지를 정상적으로 인식할 수 있도록 설정
    * $ yarn dlx @yarnpkg/sdks vscode
  * typescript sdk 설정
    * Yarn PnP(Plug’n’Play) 환경에서 VSCode가 패키지를 정상적으로 인식할 수 있도록 설정
    * command + shift + p 
    * Select Typescript Version 선택
      * use workspace version 선택
  * zero install 을 위한 gitignore 설정    
    * https://yarnpkg.com/getting-started/qa#which-files-should-be-gitignored

  * .yarn/cache 폴더 안생기는경우 enableGlobalCache false 
    * 
    ```bash
    enableGlobalCache: false
    cacheFolder: .yarn/cache
    ```
  * tsx 오류시 재설치
    * $ yarn remove @testing-library/jest-dom 
    * $ yarn add -D @testing-library/jest-dom 

### ESLint / Prettier 설치
* plugin 설치
  * ESLint / Prettier
* 관련 라이브러리 설치
  * $ yarn add -D eslint prettier eslint-plugin-prettier eslint-config-prettier eslint-plugin-react eslint-config-react-app
* eslint config 설정
  * 기존 package.json 에 설정되어있음 => 분리 (eslintConfig 부분 삭제)
  * .eslintrc.json 생성 후 설정 (eslint": "^8.46.0" / 9 버전부터 달라짐)
* prettier 설정
  * .prettierrc 생성 후 설정
* 저장시 수행되도록 설정
  * command + ,
  * setting.json
    ```bash
    "editor.codeActionsOnSave": {
      "source.fixAll.eslint": true
    },
    ```
* LF / CRLF 통일
  * 줄 바꿈 문자가 Linux, macOS 와 Windows 가 다름 => LF 통일
  * settings.json
    ```bash
    "files.eol": "\n",
    ```
  * git 에 자동 변환설정
    * 현재 확인
      * $ git config --global core.autocrlf
      * Linux/macOS 는 input 설정 (커밋 시 LF 변환)
      * Window 는 true 설정 (커밋 시 LF 변환)
      * $ git config --global core.autocrlf true

### Craco (Create-React-App Configuration Override)
* React 프로젝트에서 Webpack의 경로 alias 설정을 쉽게 적용할 수 있도록 도와주는 라이브러리
  * ../../Button 대신 @components/Button 사용
* $ yarn add -D @craco/craco craco-alias
* craco.config.js 생성
* tsconfig.paths.json 생성
* package.json의 scripts craco 로 수정

### sass (Syntactically Awesome Stylesheets)
* CSS를 더 강력하고 효율적으로 작성할 수 있도록 도와주는 CSS 확장 언어
* 변수, 중첩(Nesting), 믹스인(Mixins) 등의 기능 지원
* $ yarn add classnames sass
* classNames.bind 사용
  * SCSS Module을 사용할 때 동적으로 클래스를 관리할 수 있도록 도와주는 함수
  * cx()를 통해 CSS Module의 클래스명을 안전하게 적용
 
### JSON Server 사용
* https://github.com/typicode/json-server
* REST API를 손쉽게 구축할 수 있는 툴로, JSON 파일을 데이터베이스처럼 활용하여 CRUD API를 자동 생성
* $ yarn add -D json-server
* 실시간 변경을 반영을 위해 watch 사용
  * package.json > scripts

## 폰트
* 폰트를 src 디렉토리에 추가
* => 번들링 과정에서 포함되어 애플리케이션과 함께 배포되며, 이를 통해 폰트 로딩 최적화 및 캐싱 전략을 적용
* 무료 폰트 다운
  * https://hangeul.naver.com/fonts
* 폰트 포멧 변경
  * https://cloudconvert.com/ttf-converter
* `WOFF` 또는 `WOFF2` 사용 => WOFF2 지원하지 않는 버전 많아서 지원안하는 경우 WOFF 사용으로 로직추가
  * 압축 지원 (TTF/OTF보다 용량 작음)
* font 일반/bold 등 여러개있을때
  * @font-face 를 여러개 선언하여 font-weight: normal과 font-weight: bold를 분리
  * SCSS에서 font-weight: bold를 지정하면 자동으로 NanumGothicBold 적용
* 글꼴이 다이나믹하게 바뀌는 경우 => font-size 적용하면 됨

## 이미지
* https://www.iconfinder.com/
* 무료 이미지 선택

## animation
* css
  * animation: [keyframes-name] [duration] [iteration-count] [timing-function]
    * keyframes-name: @keyframes에서 정의한 애니메이션 이름
    * duration: 애니메이션의 지속 시간
    * iteration-count: 애니메이션 반복 횟수
    * timing-function: 애니메이션의 타이밍 함수
  * ex) heart 라고 정의한 keyframes를 1.2초 간격으로 무한 반복
    ```css
    animation: heart 1.2s infinite linear;
    ```

## Reset CSS
* 브라우저마다 기본적으로 제공하는 스타일을 초기화하여 동일한 환경에서 동일한 스타일을 적용할 수 있도록 도와주는 CSS
  * https://meyerweb.com/eric/tools/css/reset/
## 비디오 포맷
* MP4
  * 고화질
  * 브라우저 호환성이 좋음
* WebM
  * 웹 최적화
  * 파일 크기 작고 빠른 스트리밍 가능
* 호환성
  * https://caniuse.com/?search=mp4
* video poster
  * 비디오 파일이 로딩되기 전에 보여지는 이미지
* 개발참고
  * https://developer.mozilla.org/en-US/docs/Web/HTML/Element/video
  * create react app 은 / 적으면 public 아래 바라봄
    * /video.mp4 => public/video.mp4
  * <vidio\> 속성
    * autoplay: 비디오 자동 재생
      * source 사용하면 muted 속성 필요
    * loop: 비디오 반복 재생
    * controls: 비디오 컨트롤러 표시
    * muted: 비디오 음소거
    * poster: 비디오 로딩 전에 보여지는 이미지

* 적응형 비트 프로토콜(Adaptive Bitrate Protocol, ABR)
  * 네트워크 상태에 따라 실시간 품질 조정

## date 처리
* ISO 8601 형식의 날짜 문자열을 JavaScript Date 객체로 변환
  * import { parseISO } from 'date-fns';

## React.ReactNode
* React에서 렌더링할 수 있는 모든 요소를 포함
* <div>뿐만 아니라 텍스트, 컴포넌트, JSX, 배열, null 등도 허용하여 선언시 받을 수 있음

## grid
* https://developer.mozilla.org/ko/docs/Web/CSS/CSS_Grid_Layout

## flicking
* https://naver.github.io/egjs-flicking/

## css
* object-fit: cover;
  * 이미지가 요소의 크기에 맞게 확대 또는 축소되어 보이도록 설정
  * 이미지 비율은 유지
  * 이미지가 요소의 크기보다 클 때 이미지를 잘라내어 보여줌
* object-fit: contain;
  * 이미지가 요소의 크기에 맞게 확대 또는 축소되어 보이도록 설정
  * 이미지 비율은 유지
  * 이미지가 요소의 크기보다 클 때 이미지를 축소하여 보여줌
* postion relative
  * 자식 요소의 위치를 상대적으로 설정
  * postion absolute
    * 부모 요소를 기준으로 자식 요소의 위치를 설정

* 가상 선택자
* ImageGallery.module.scss
  * &::after
    * 요소의 내용 뒤에 콘텐츠를 추가
    * 실제 DOM 요소를 추가하지 않고도 꾸밈 요소를 삽입할 수 있어서 유용 (진짜 DOM 요소 없이 높이 공간 확보)
    * 레이아웃을 깔끔하게 유지하면서 비율 고정 박스를 만들 수 있음
    * 가로세로 비율을 유지하면서 이미지를 삽입할 때 사용
      * display: block으로 공간 차지
        * display: block을 사용하는 이유는 이 가짜 요소가 실제 공간을 차지하게 만들기 위해서
      * content: ""으로 가상 요소 생성
        * HTML에 실제로 존재하지 않는 가짜 요소이기 때문에, 내용이 없으면 아무것도 렌더링되지 않아서 content 속성으로 표시할 내용을 꼭 지정 ""
      * padding-bottom: 100%로 가로세로 비율을 1:1로 설정
  * &::before
    * 요소의 내용 앞에 콘텐츠를 추가
* display: block;
  * 요소를 블록 레벨 요소로 지정
  * padding-bottom 100% 로 주면 가로세로 비율이 1:1이 됨  
* display: block은 공간을 확보하고, position: absolute는 그 공간 위에 정확히 배치하기 위해 사용
  * => 두 개가 합쳐져야 비율 고정 + 정렬된 콘텐츠가 완성

## uesQuery
* 데이터 요청(fetch), 캐싱, 로딩 상태 관리, 에러 처리, 자동 재요청(refetch) 등을 간편하게 처리할 수 있는 커스텀 훅
* react-query의 useQuery를 사용하려면, QueryClientProvider로 애플리케이션을 감싸서 QueryClient를 설정
  * react-query는 데이터 캐싱과 상태 관리를 위한 중앙 관리자(QueryClient) 를 사용 
  * 즉, QueryClientProvider는 이 QueryClient 인스턴스를 리액트 컴포넌트 트리 전체에 공유할 수 있도록 해주는 역할
  * QueryClientProvider로 애플리케이션을 감싸면, 하위 컴포넌트에서 useQuery를 사용할 수 있음
  * QueryClient는 react-query의 중앙 데이터 캐시 및 상태 관리를 담당하는 핵심 객체

## 훅(Hook)
* React 함수형 컴포넌트에서 상태(state)나 생명주기(lifecycle) 같은 기능을 사용할 수 있게 해주는 함수
  * useState: 상태값을 관리
  * useEffect: 컴포넌트가 렌더링될 때마다 특정 작업을 수행
  * useContext: 상위 컴포넌트에서 하위 컴포넌트로 데이터를 전달
  * useReducer: 복잡한 상태 로직을 컴포넌트 밖으로 분리
  * useCallback: 함수의 재생성을 방지(성능 최적화)
  * useMemo: 연산된 값을 재사용(성능 최적화)
  * useRef: 함수형 컴포넌트에서 ref를 쉽게 사용

## npm 다운로드 트렌드 확인
* https://www.npmtrends.com/

## swiper
* https://swiperjs.com/react
  * 이미지를 슬라이드로 보여주는 라이브러리
* dimmed
  * 배경을 어둡게 처리해서 포커스를 특정 요소에 주거나, 사용자 입력을 제한할 때 쓰는 반투명 레이어
  * 모달창 띄울 때 배경 어두워지는 것
* JSX는 하나의 루트 요소만 반환해야 함
  * Fragment 사용
    * <></> 또는 <React.Fragment></React.Fragment>로 묶어서 반환
* 외부 라이브러리의 스타일을 커스터마이징 하려면 스코프를 조심
  * swiper 스타일을 커스터마이징하려면, swiper 스타일을 덮어쓰기 위해 swiper 클래스를 사용
  * swiper 클래스를 사용하면 swiper 라이브러리에서 사용하는 클래스와 충돌하지 않음

## 'React' refers to a UMD global, but the current file is a module. Consider adding an import instead.ts(2686)
* import React from 'react'; 추가
* 또는 tsconfig.json 에 compilerOptions 설정 추가
  ```json
  // tsconfig.json
  {
    "compilerOptions": {
      "jsx": "react-jsx"
    }
  }
  ```
* 또는 index.tsx 인식이 안되어서 이름지정 

## @mixin
* Sass에서 반복되는 스타일을 한 번만 정의하고 필요할 때마다 @include로 불러와서 재사용
```scss
@mixin mixin이름 {
  style
}

.my-class {
  @include mixin이름;
}

```

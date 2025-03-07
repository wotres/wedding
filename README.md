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

## Craco (Create-React-App Configuration Override)
* React 프로젝트에서 Webpack의 경로 alias 설정을 쉽게 적용할 수 있도록 도와주는 라이브러리
  * ../../Button 대신 @components/Button 사용
* $ yarn add -D @craco/craco craco-alias
* craco.config.js 생성
* tsconfig.paths.json 생성
* package.json의 scripts craco 로 수정

## sass (Syntactically Awesome Stylesheets)
* CSS를 더 강력하고 효율적으로 작성할 수 있도록 도와주는 CSS 확장 언어
* 변수, 중첩(Nesting), 믹스인(Mixins) 등의 기능 지원
* $ yarn add classnames sass
* classNames.bind 사용
  * SCSS Module을 사용할 때 동적으로 클래스를 관리할 수 있도록 도와주는 함수
  * cx()를 통해 CSS Module의 클래스명을 안전하게 적용

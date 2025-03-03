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


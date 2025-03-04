const CracoAlias = require('craco-alias')

module.exports = {
  plugins: [
    {
      plugin: CracoAlias, // craco-alias 플러그인 사용
      options: {
        source: 'tsconfig', // TypeScript의 tsconfig.json을 기반으로 alias 설정
        tsConfigPath: 'tsconfig.paths.json', // alias 설정이 있는 파일 경로
      },
    },
  ],
}

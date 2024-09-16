# Node.js 공식 이미지를 베이스로 사용
FROM node:18.18.0

# 작업 디렉토리 설정
WORKDIR /src

# 모노레포 루트의 yarn.lock 파일과 pluma의 package.json 복사
COPY yarn.lock ./
COPY service/pluma/package.json ./package.json

# yarn.lock 및 package.json을 기반으로 패키지 설치
RUN yarn install

# 현재 서브 프로젝트(pluma)의 나머지 파일 복사
COPY . .

# 서브 프로젝트의 의존성 설치 및 빌드 수행
RUN yarn install && yarn build

# 애플리케이션 실행 명령
CMD ["yarn", "start"]
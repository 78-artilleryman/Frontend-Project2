# Node.js 18 이미지 사용
FROM node:18

# 애플리케이션 작업 디렉토리 설정
WORKDIR /app

# Corepack 활성화 및 지정된 Yarn 버전 사용
RUN corepack enable && corepack prepare yarn@4.3.1 --activate

# 의존성 설치를 위한 package.json과 yarn.lock 복사
COPY ../../package.json ./
COPY ../../yarn.lock ./

# 의존성 설치
RUN yarn install --production

# 프로젝트의 모든 파일 복사
COPY . .

# Next.js 애플리케이션 빌드
RUN yarn workspace pluma build

# 애플리케이션 실행docker build -t pluma .
CMD ["yarn", "workspace", "pluma", "start"]

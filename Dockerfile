FROM node:alpine AS build
WORKDIR /app
COPY . .

RUN npm install pnpm -g

RUN pnpm install 

EXPOSE 5174
CMD ["pnpm",  "dev"]
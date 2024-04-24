# Next.jsをDockerコンテナで実行するサンプル

検証用なので本番環境などで利用しないでください。

## 事前条件

```sh
% node -v
v20.12.2
% docker -v
Docker version 24.0.2, build cb74dfc
```

## ビルド

`nextjs-docker`の部分はイメージの名前なので自由に変更可能です。

```sh
% docker build -t nextjs-docker .
```

## 実行

検証用なので`--rm`を指定して実行したコンテナの片付けを行っています。

```sh
% docker run -p 3000:3000 --rm nextjs-docker
```

この場合、 http://localhost:3000 で確認できます。 `Ctrl`+`C`で停止します。

### デーモン化する場合

Dockerをバックグラウンドで実行し、他の作業ができるようにします。

```sh
% docker run -p 3000:3000 --rm -d nextjs-docker
```

- https://docs.docker.jp/engine/reference/commandline/run.html

#### 実行中のコンテナの情報を表示する

```sh
% docker ps
# CONTAINER ID   IMAGE           COMMAND                   CREATED         STATUS
# 5be76b806d6f   nextjs-docker   "docker-entrypoint.s…"   5 seconds ago   Up 4 seconds
```

- https://docs.docker.jp/engine/reference/commandline/ps.html

#### 実行中のコンテナのログを取得する

この環境ではNext.jsの実行ログが表示されます。

```sh
% docker logs -tf 5be76b806d6f
```

- https://docs.docker.jp/engine/reference/commandline/logs.html

#### 実行中のコンテナにログイン

コンテナ内部でシェルを実行します。

```sh
% docker exec -it 5be76b806d6f sh
# /app $
```

- https://docs.docker.jp/engine/reference/commandline/exec.html

#### コンテナを停止する

```sh
% docker stop 5be76b806d6f
```

# Original Next.js README

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.


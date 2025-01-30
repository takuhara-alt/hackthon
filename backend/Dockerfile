FROM node:18

WORKDIR /app

# `package.json` を確実にコピー
COPY package.json package-lock.json ./

# 依存関係のインストール
RUN npm install

# 残りのコードをコピー
COPY . .

# ポートを開放
EXPOSE 3000

CMD ["npm", "run", "dev"]

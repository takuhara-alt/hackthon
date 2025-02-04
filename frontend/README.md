# Hackathon

このプロジェクトは、Hackathon イベント用の React アプリケーションです。Docker を使用して、簡単に開発環境を構築し、MySQL データベースと連携できます。

## 必要なもの

- Docker
- Git

## セットアップ手順

### 1. リポジトリのクローン

まず、プロジェクトのリポジトリをクローンします。

```bash
git clone <repository-url>
cd hackathon
```
## 2. 開発環境の立ち上げ
、以下のコマンドで Docker コンテナをビルドし、アプリケーションを起動します
```angular2html
docker-compose up --build
```
これにより、以下のサービスが立ち上がります
- React アプリケーション: ポート 3000 でアクセス可能
- MySQL データベース: ポート 3306 でアクセス可能
## 3. アプリケーションの確認
http://localhost:3000 にアクセスし、React アプリケーションが動作しているか確認します。

## 4. データベース接続の確認
MySQL に接続するための情報は、docker-compose.yml 内に記載されています
```
ホスト名: db（コンテナ名）
ポート: 3306
データベース名: hackathon
ユーザー名: hackathon_user
パスワード: hackathon_pass
```
## 5. 開発の進め方
- ソースコードは src/ ディレクトリ内にあります。React アプリケーションのソースコードを変更し、保存することで、開発サーバーが自動的に更新されます（ホットリロード）。
- 必要に応じて、バックエンドの MySQL データベースを操作することもできます。
- 新しいパッケージを追加した場合は、コンテナ内で npm install を実行して依存関係をインストールしてください。
## ディレクトリ構成
```angular2html
/hackathon
├── Dockerfile            # React アプリケーションの Dockerfile
├── docker-compose.yml    # Docker Compose 設定ファイル
├── node_modules/         # Docker 内で依存関係がインストールされる
├── package.json          # アプリケーションの依存関係とスクリプト
├── package-lock.json     # npm の依存関係ロックファイル
├── src/                  # React アプリケーションのソースコード
├── nginx/                # (オプション) Nginx 設定ファイル
├── .gitignore            # node_modules を Git に含めないように設定
└── README.md             # このファイル
```
# 注意点
- docker-compose.yml で定義されたサービス（React アプリケーションと MySQL）を同時に起動するためには、docker-compose up --build を使用してください。
- npm install や npm run build などのコマンドは、Docker コンテナ内で実行されるため、ホスト側の環境に影響はありません。
## 質問 (FAQ)
- Q: node_modules/ がないのに依存関係はどうやってインストールされるのか？
- A: Dockerfile で npm install を実行するため、コンテナ内に依存関係がインストールされます。ローカルには node_modules を含める必要はありません。

- Q: npm run start でエラーが発生する場合は？
- A: まず、docker-compose logs を使ってエラーメッセージを確認し、必要に応じて設定を修正してください。

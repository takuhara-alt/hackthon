const express = require('express');
const app = express();
const port = 5000;

// ミドルウェアの設定（例: JSONをパース）
app.use(express.json());

// 基本的なルート
app.get('/', (req, res) => {
    res.send('Hello from the backend!');
});

// 他のAPIエンドポイントもここに定義する
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});

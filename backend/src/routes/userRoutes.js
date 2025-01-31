const express = require('express');
const router = express.Router();

// ユーザー情報を取得するエンドポイント
router.get('/users', (req, res) => {
    res.json({ users: [{ id: 1, name: 'John Doe' }] });
});

module.exports = router;

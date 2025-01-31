const authenticate = (req, res, next) => {
    const token = req.header('Authorization');
    if (!token) {
        return res.status(401).json({ message: 'No token provided' });
    }

    // トークン検証処理（仮）
    if (token === 'valid-token') {
        next();
    } else {
        res.status(403).json({ message: 'Forbidden' });
    }
};

module.exports = authenticate;

const getUsers = (req, res) => {
    res.json({ users: [{ id: 1, name: 'John Doe' }] });
};

module.exports = { getUsers };

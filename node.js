// api/byPassApi.js
module.exports = (req, res) => {
    const { query } = req;
    const bypassLink = query.bypassapi || 'https://raw.githubusercontent.com/your-repo/default-link';
    res.status(200).json({ bypassLink });
};

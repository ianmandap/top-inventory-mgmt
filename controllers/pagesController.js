async function getHome(req, res) {
  res.redirect('/items')
};

module.exports = {
  getHome
}
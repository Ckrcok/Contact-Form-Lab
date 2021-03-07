function getForm(req, res) {
  res.render("contactus");
}

function handle_sumbit(req, res) {
  res.send("Thanks loser");
}

module.exports = {
  getForm,
  handle_sumbit,
};

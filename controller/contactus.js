function getForm(req, res) {
  res.render("contactus");
}

function handle_sumbit(req, res) {
  res.render("thanks", req.body);
}

module.exports = {
  getForm,
  handle_sumbit,
};

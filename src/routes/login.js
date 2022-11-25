const auth = require("../models/Auth/");
const bcrypt = require("bcryptjs");

module.exports = (app) => {
  app.post("/api/login", async (req, res) => {
    const { email, password } = req.body;

    if (password === "" || password === null || password === undefined)
      return res.status(203).send("Fill the password please");
    if (email === "" || email === null || email === undefined)
      return res.status(203).send("Fill the email please");
    const user = await auth.findOne({ email }).select("+password");
    if (!user) return res.status(203).send("Email or password is not valid");

    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch)
      return res.status(203).send("Email or password is not valid");

    user.password = undefined;
    res.json({
      email,
      password
    });
  });
};

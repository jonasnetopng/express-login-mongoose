const auth = require("../models/Auth/");
const { validateEmail } = require("../utils");
const bcrypt = require("bcryptjs");
const { v4: uuidv4 } = require("uuid");

module.exports = (app) => {
  app.post("/api/register", async (req, res) => {
    let { username, email, password } = req.body;

    if (password === "")
      return res.status(203).send("Fill the password please");
    if (password.length < 6)
      return res
        .status(203)
        .send("Password length must be atleast 8 characters");
    if (!validateEmail(email))
      return res.status(203).send("Email is not valid");
    if (await auth.findOne({ email }))
      return res.status(203).send("This email already exists");
    password = await bcrypt.hash(password, 10);

    // create custom username if null
    if (username === "" || username === null || username === undefined) {
      username = "user-" + uuidv4();
    }

    const user = await auth.create({
      username,
      email,
      password
    });

    user.password = undefined;
    res.json({
      username,
      email,
      password
    });
  });
};

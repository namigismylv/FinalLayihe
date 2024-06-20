const { users } = require("../Models/User.model");

const usersController = {
  register: async (req, res) => {
    try {
      const user = await users.create({ ...req.body });
      res.status(201).send(user);  // 201 Created status kodu ilə cavab veririk
    } catch (err) {
      res.status(500).send({ message: "Server error", error: err });
    }
  },
  login: async (req, res) => {
    try {
      const { email, password } = req.body;
      const user = await users.findOne({ email, password });
      if (user) {
        res.status(200).send("Successful");
      } else {
        res.status(401).send("Incorrect email or password");  // 401 Unauthorized status kodu ilə cavab veririk
      }
    } catch (err) {
      res.status(500).send({ message: "Server error", error: err });
    }
  }
};

module.exports = { usersController };

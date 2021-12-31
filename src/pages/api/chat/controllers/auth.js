const { connect } = require("getstream");
const bcrypt = require("bcrypt");
const StreamChat = require("stream-chat").StreamChat;
const crypto = require("crypto");

require("dotenv").config();

const signup = async (req, res) => {
  try {
    const { fullName, username, password, emailAddress } = req.body;
    const userId = crypto.randomBytes(16).toString("hex");
    const serverClient = connect(
      "cbm38u2v9hn6",
      "kx38xg35z93ays3am9gxtw5cyjrxcxb2txecztjrnf6khgq7n5d8jvphgd96za7y",
      "1154078"
    );
    const hashedPassword = await bcrypt.hash(password, 10);
    const token = serverClient.createUserToken(userId);

    res.status(200).json({
      token,
      fullName,
      username,
      userId,
      hashedPassword,
      emailAddress,
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({ message: error });
  }
};

const login = async (req, res) => {
  try {
    const { username, password } = req.body;
    const serverClient = connect(
      "cbm38u2v9hn6",
      "kx38xg35z93ays3am9gxtw5cyjrxcxb2txecztjrnf6khgq7n5d8jvphgd96za7y",
      "1154078"
    );
    const client = StreamChat.getInstance("cbm38u2v9hn6");
    const { users } = await client.queryUsers({ name: username });

    if (!users.length)
      return res.status(400).json({ message: "User not found" });

    const success = bcrypt.compare(password, users[0].hashedPassword);
    const token = serverClient.createUserToken(users[0].id);

    if (success) {
      res.status(200).json({
        token,
        fullName: users[0].fullName,
        username,
        userId: users[0].id,
      });
    } else {
      res.status(500).json({ message: "Incorrect password" });
    }
  } catch (error) {
    ads;
    console.log(error);
    res.status(500).json({ message: error });
  }
};
module.exports = { signup, login };

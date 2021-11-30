const bcrypt = require("bcrypt");
const { connect } = require("getstream");
const StreamChat = require("stream-chat").StreamChat;
const crypto = require("crypto");
require("dotenv").config();

const apiKey = process.env.STREAM_API_KEY;
const apiSecret = process.env.STREAM_API_SECRET;
const appId = process.env.STREAM_APP_ID;

const login = async (req, res) => {
  try {
    const { username, password } = req.body;
    const serverClient = connect(apiKey, apiSecret, appId);
    const client = StreamChat.getInstance(apiKey, apiSecret);

    const { users } = await client.query({ name: username });
    if (!users.length) {
      return res.status(400).json({ message: "User not found" });
    }
    const success = await bcrypt.compare(password, users[0].hashedPassword);

    const token = serverClient.createUserToken(users[0].id);

    if (success) {
      res
        .status(200)
        .json({
          token,
          userId: users[0].id,
          username,
          fullName: users[0].fullName,
          phoneNumber: users[0].phoneNumber,
          email: users[0].email,
        });
    } else {
      res.status(400).json({ message: "credentials don't match" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error });
  }
};

const signUp = async (req, res) => {
  try {
    const { fullName, username, phoneNumber, email, password } = req.body;
    const userId = crypto.randomBytes(16).toString("hex");
    const serverClient = connect(apiKey, apiSecret, appId);
    const hashedPassword = await bcrypt.hash(password, 10);
    const token = serverClient.createUserToken(userId);
    res.status(200).json({
      token,
      userId,
      username,
      fullName,
      phoneNumber,
      email,
      password: hashedPassword,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error });
  }
};

module.exports = { signUp, login };

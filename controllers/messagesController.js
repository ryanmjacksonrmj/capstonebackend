const messageModel = require("../model/messageModel");

module.exports.addMessage = async (req, res, next) => {
  try {
    const { from, to, message } = req.body;
    const data = await messageModel.create({
      message: { text: message },
      users: { from, to },
      sender: from,
    });
    if (data) {
      return res.json({ msg: "Message added successfully." });
    }
    return res.json({ msg: "Failed to add message to the database. " });
  } catch (ex) {
    next(ex);
  }
};
module.exports.getAllMessages = async (req, res, next) => {
  try {
    const { from, to } = req.body;
    console.log(from, to);
    const messages = await messageModel
      .find({
        $or: [
          { $and: [{ "users.from": from }, { "users.to": to }] },
          { $and: [{ "users.from": to }, { "users.to": from }] },
        ],
      })
      .sort({ updatedAt: 1 });
    console.log("MESSAGES", messages, "MESSAGES");
    const projectMessages = messages.map((msg) => {
      return {
        fromSelf: msg.sender.toString() === from,
        message: msg.message.text,
      };
    });
    res.json(projectMessages);
  } catch (ex) {
    next(ex);
  }
};

const services = require("../../services");

module.exports = {
  async getContactList(req, res) {
    try {
      const contactList = await services.contactServices.get.getContactList();
      res
        .status(200)
        .json({ status: true, message: "contact list", data: contactList });
    } catch (err) {
      console.log(err);
      res.status(500).json({ status: false, message: err });
    }
  },
};

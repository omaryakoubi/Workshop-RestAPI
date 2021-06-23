const Contact = require("../../models/Contact");

module.exports = {
  async getContactByEmail(email) {
    try {
      return await Contact.findOne({ email });
    } catch (err) {
      console.log(err);
      return err;
    }
  },

  async getContactByPhoneNumber(phoneNumber) {
    try {
      return await Contact.findOne({ phoneNumber });
    } catch (err) {
      console.log(err);
      return err;
    }
  },

  async getContactList() {
    try {
      return await Contact.find();
    } catch (err) {
      console.log(err);
      return err;
    }
  },

  async getContactById(id) {
    try {
      return await Contact.findById(id);
    } catch (err) {
      console.log(err);
      return err;
    }
  },
};

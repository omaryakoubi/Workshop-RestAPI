const Contact = require("../../models/Contact");

module.exports = {
  async createContact(firstName, lastName, phoneNumber, email) {
    try {
      return await Contact.create({ firstName, lastName, phoneNumber, email });
    } catch (err) {
      console.log(err);
      return err;
    }
  },
};

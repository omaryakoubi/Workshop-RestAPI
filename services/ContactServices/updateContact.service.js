const Contact = require("../../models/Contact");

module.exports = {
  async updateContact(id, firstName, lastName, phoneNumber, email) {
    try {
      return await Contact.findByIdAndUpdate(id, {
        firstName,
        lastName,
        phoneNumber,
        email,
      });
    } catch (err) {
      console.log(err);
      return err;
    }
  },
};

const Contact = require("../../models/Contact");

module.exports = {
  async deleteContact(id) {
    try {
      return await Contact.findByIdAndRemove(id);
    } catch (err) {
      console.log(err);
      return err;
    }
  },
};

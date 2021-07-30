const services = require("../../services");

module.exports = {
  async updateContact(req, res) {
    try {
      const { id } = req.params;
      const { firstName, lastName, phoneNumber, email } = req.body;

      let existingContact = await services.contactServices.get.getContactById(
        id
      );

      const existingPhoneNumber =
        await services.contactServices.get.getContactByPhoneNumber(phoneNumber);

      const existingEmail =
        await services.contactServices.get.getContactByEmail(email);

      if (existingPhoneNumber && phoneNumber !== existingContact.phoneNumber) {
         return res.status(406).json({status: false, message:"phone number already exist."})
      }

      if (existingEmail && email !== existingContact.email) {
        return res.status(406).json({status: false, message:"email already exist."})
      }

      if (existingContact) {
        await services.contactServices.update.updateContact(
          id,
          firstName,
          lastName,
          phoneNumber,
          email
        );

        existingContact = await services.contactServices.get.getContactById(id);

        res.status(200).json({
          status: true,
          message: "contact edited.",
          data: existingContact,
        });
      } else {
        res.status(404).json({ status: false, message: "contact not exist." });
      }
    } catch (err) {
      console.log(err);
      res.status(500).json({ status: false, message: err });
    }
  },
};

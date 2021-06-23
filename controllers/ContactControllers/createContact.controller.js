const services = require("../../services");

module.exports = {
  async createContact(req, res) {
    try {
      const { firstName, lastName, phoneNumber, email } = req.body;

      const existingPhoneNumber =
        await services.contactServices.get.getContactByPhoneNumber(phoneNumber);

      const existingEmail =
        await services.contactServices.get.getContactByEmail(email);

      if (phoneNumber.toString().length !== 8) {
        res.status(406).json({
          status: false,
          message: "phoneNumber length must be 8 digits",
        });
      }

      if (existingPhoneNumber) {
        res.status(406).json({
          status: false,
          message: "phoneNumber already exist",
        });
      }

      if (!email.includes("@")) {
        res.status(406).json({
          status: false,
          message: "email must includes @",
        });
      }

      if (existingEmail) {
        res.status(406).json({
          status: false,
          message: "email already exist",
        });
      }

      const newContact = await services.contactServices.create.createContact(
        firstName,
        lastName,
        phoneNumber,
        email
      );

      res.status(201).json({
        status: true,
        message: "contact created successfully",
        data: newContact,
      });
    } catch (err) {
      res.status(500).json({ status: false, message: err });
      console.log(err);
    }
  },
};

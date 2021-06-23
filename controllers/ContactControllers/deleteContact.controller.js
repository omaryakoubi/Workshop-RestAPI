const services = require("../../services");

module.exports = {
  async deleteContact(req, res) {
    try {
      const { id } = req.params;
      const existingContact = await services.contactServices.get.getContactById(
        id
      );

      if (existingContact) {
        await services.contactServices.delete.deleteContact(id);
        res
          .status(200)
          .json({ status: true, message: "contact deleted successfully" });
      } else {
        res.status(404).json({ status: false, message: "contact not found" });
      }
    } catch (err) {
      console.log(err);
      res.status(500).json({ staus: false, message: err });
    }
  },
};

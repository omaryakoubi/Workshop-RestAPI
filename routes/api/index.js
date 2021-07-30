const router = require("express").Router();
const controllers = require("../../controllers/contactControllers");

router.post(
  "/createContact",
  controllers.create.createContact
);

router.get("/contactList", controllers.get.getContactList);

router.put(
  "/editContact/:id",
  controllers.update.updateContact
);

router.delete(
  "/deleteContact/:id",
  controllers.delete.deleteContact
);

module.exports = router;

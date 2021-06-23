const router = require("express").Router();
const controllers = require("../../controllers");

router.post(
  "/createContact",
  controllers.contactControllers.create.createContact
);

router.get("/contactList", controllers.contactControllers.get.getContactList);

router.put(
  "/editContact/:id",
  controllers.contactControllers.update.updateContact
);

router.delete(
  "/deleteContact/:id",
  controllers.contactControllers.delete.deleteContact
);

module.exports = router;

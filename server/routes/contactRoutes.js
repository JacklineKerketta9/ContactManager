import express from "express";

import authMiddleware from "../middleware/authMiddleware.js";

import {
  createContact,
  getContacts,
  getContactById,
  updateContact,
  deleteContact,
  toggleFavorite,
} from "../controllers/contactController.js";

import {
  contactValidator,
} from "../validators/contactValidator.js";

const router = express.Router();

// All routes protected
router.use(authMiddleware);

router.post(
  "/",
  contactValidator,
  createContact
);

router.get("/", getContacts);

router.get("/:id", getContactById);

router.put("/:id", updateContact);

router.delete("/:id", deleteContact);

router.patch(
  "/:id/favorite",
  toggleFavorite
);

export default router;

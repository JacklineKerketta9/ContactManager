import Contact from "../models/Contact.js";
import { validationResult } from "express-validator";
import { getPagination } from "../utils/pagination.js";


// CREATE CONTACT
export const createContact = async (req, res, next) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const contact = await Contact.create({
      ...req.body,
      userId: req.userId,
    });

    res.status(201).json(contact);
  } catch (error) {
    next(error);
  }
};



// GET ALL CONTACTS (Search + Filter + Tags + Pagination)
export const getContacts = async (req, res, next) => {
  try {
    const {
      search = "",
      favorite,
      tag,
      page = 1,
      limit = 10,
    } = req.query;

    const query = {
      userId: req.userId,
    };

    // SEARCH
    if (search) {
      query.$or = [
        { name: { $regex: search, $options: "i" } },
        { email: { $regex: search, $options: "i" } },
        { phone: { $regex: search, $options: "i" } },
      ];
    }

    // FAVORITE FILTER
    if (favorite !== undefined) {
      query.favorite = favorite === "true";
    }

    // TAG FILTER
    if (tag) {
      query.tags = { $in: [tag] };
    }

    const { skip, limit: lim } = getPagination(
      page,
      limit
    );

    const contacts = await Contact.find(query)
      .skip(skip)
      .limit(lim)
      .sort({ createdAt: -1 });

    const total = await Contact.countDocuments(query);

    res.json({
      contacts,
      total,
      page: Number(page),
      pages: Math.ceil(total / limit),
    });
  } catch (error) {
    next(error);
  }
};



// GET SINGLE CONTACT
export const getContactById = async (
  req,
  res,
  next
) => {
  try {
    const contact = await Contact.findOne({
      _id: req.params.id,
      userId: req.userId,
    });

    if (!contact) {
      return res
        .status(404)
        .json({ message: "Contact not found" });
    }

    res.json(contact);
  } catch (error) {
    next(error);
  }
};



// UPDATE CONTACT
export const updateContact = async (
  req,
  res,
  next
) => {
  try {
    const contact = await Contact.findOneAndUpdate(
      {
        _id: req.params.id,
        userId: req.userId,
      },
      req.body,
      { new: true }
    );

    if (!contact) {
      return res
        .status(404)
        .json({ message: "Contact not found" });
    }

    res.json(contact);
  } catch (error) {
    next(error);
  }
};



// DELETE CONTACT
export const deleteContact = async (
  req,
  res,
  next
) => {
  try {
    const contact = await Contact.findOneAndDelete({
      _id: req.params.id,
      userId: req.userId,
    });

    if (!contact) {
      return res
        .status(404)
        .json({ message: "Contact not found" });
    }

    res.json({ message: "Contact deleted" });
  } catch (error) {
    next(error);
  }
};



// TOGGLE FAVORITE
export const toggleFavorite = async (
  req,
  res,
  next
) => {
  try {
    const contact = await Contact.findOne({
      _id: req.params.id,
      userId: req.userId,
    });

    if (!contact) {
      return res
        .status(404)
        .json({ message: "Contact not found" });
    }

    contact.favorite = !contact.favorite;
    await contact.save();

    res.json(contact);
  } catch (error) {
    next(error);
  }
};

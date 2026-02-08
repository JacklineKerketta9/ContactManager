import React, {
  useState,
} from "react";

import { useNavigate } from "react-router-dom";

import {
  createContact,
} from "../services/contactService";

function ContactForm() {

  const navigate = useNavigate();

  /* ================= STATE ================= */

  const [form, setForm] =
    useState({
      name: "",
      email: "",
      phone: "",
      company: "",
      tags: "",
      notes: "",
      favorite: false,
    });

  /* ================= HANDLE CHANGE ================= */

  const handleChange = (e) => {

    const {
      name,
      value,
      type,
      checked,
    } = e.target;

    setForm({
      ...form,
      [name]:
        type === "checkbox"
          ? checked
          : value,
    });
  };

  /* ================= SUBMIT ================= */

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      ...form,
      tags: form.tags
        ? form.tags.split(",")
        : [],
    };

    await createContact(payload);

    navigate("/dashboard");
  };

  /* ================= UI ================= */

  return (
    <div className="form-page">

      <form
        className="contact-form enhanced"
        onSubmit={handleSubmit}
      >

        <h2>Add New Contact</h2>

        {/* ===== Row 1 ===== */}

        <div className="form-row">

          <input
            name="name"
            placeholder="Full Name"
            value={form.name}
            onChange={handleChange}
            required
          />

          <input
            name="phone"
            placeholder="Phone Number"
            value={form.phone}
            onChange={handleChange}
            required
          />

        </div>

        {/* ===== Row 2 ===== */}

        <div className="form-row">

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={form.email}
            onChange={handleChange}
          />

          <input
            name="company"
            placeholder="Company"
            value={form.company}
            onChange={handleChange}
          />

        </div>

        {/* ===== Tags ===== */}

        <input
          name="tags"
          placeholder="Tags (Work, Friends...)"
          value={form.tags}
          onChange={handleChange}
        />

        {/* ===== Notes ===== */}

        <textarea
          name="notes"
          placeholder="Notes"
          rows="4"
          value={form.notes}
          onChange={handleChange}
        />

        {/* ===== Favorite Toggle ===== */}

        <label className="favorite-toggle">

          <input
            type="checkbox"
            name="favorite"
            checked={form.favorite}
            onChange={handleChange}
          />

          Mark as Favorite ⭐

        </label>

        {/* ===== Buttons ===== */}

        <div className="form-actions">

          <button
            type="submit"
            className="theme-btn"
          >
            Save Contact
          </button>

          <button
            type="button"
            className="theme-btn outline"
            onClick={() =>
              navigate("/dashboard")
            }
          >
            Cancel
          </button>

        </div>

      </form>

    </div>
  );
}

export default ContactForm;

import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

import {
  getContact,
  updateContact,
} from "../services/contactService";

function ContactDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [editMode, setEditMode] = useState(false);

  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    company: "",
    tags: "",
    notes: "",
    favorite: false,
  });

  // Fetch contact
  useEffect(() => {
  const fetchContact = async () => {
    try {
      const res = await getContact(id);

      setForm({
        name: res.data.name || "",
        phone: res.data.phone || "",
        email: res.data.email || "",
        company: res.data.company || "",
        tags: res.data.tags?.join(", ") || "",
        notes: res.data.notes || "",
        favorite: res.data.favorite || false,
      });

    } catch (error) {
      console.error("Failed to fetch contact", error);
    }
  };

  fetchContact();
}, [id]);


  // Change handler
  const handleChange = (e) => {
    const { name, value, type, checked } =
      e.target;

    setForm({
      ...form,
      [name]:
        type === "checkbox"
          ? checked
          : value,
    });
  };

  // Update submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    await updateContact(id, {
      ...form,
      tags: form.tags
        .split(",")
        .map((t) => t.trim()),
    });

    navigate("/dashboard");
  };

  return (
    <div className="form-page">

      <form
        className="contact-form enhanced"
        onSubmit={handleSubmit}
      >

        {/* ===== HEADER ===== */}
        <div className="card-header">

          <div className="back-row">
            <button
              type="button"
              className="theme-btn back-btn"
              onClick={() =>
                navigate("/dashboard")
              }
            >
              ← Back
            </button>
          </div>

          <h2>Contact Details</h2>

        </div>

        {/* ===== ROW 1 ===== */}
        <div className="form-row">
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            disabled={!editMode}
          />

          <input
            type="text"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            disabled={!editMode}
          />
        </div>

        {/* ===== ROW 2 ===== */}
        <div className="form-row">
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            disabled={!editMode}
          />

          <input
            type="text"
            name="company"
            value={form.company}
            onChange={handleChange}
            disabled={!editMode}
          />
        </div>

        {/* ===== TAGS ===== */}
        <input
          type="text"
          name="tags"
          value={form.tags}
          onChange={handleChange}
          disabled={!editMode}
          placeholder="Tags"
        />

        {/* ===== NOTES ===== */}
        <textarea
          name="notes"
          value={form.notes}
          onChange={handleChange}
          disabled={!editMode}
          placeholder="Notes"
        />

        {/* ===== FAVORITE ===== */}
        <label className="favorite-check">
          <input
            type="checkbox"
            name="favorite"
            checked={form.favorite}
            onChange={handleChange}
            disabled={!editMode}
          />
          Mark as Favorite ⭐
        </label>

        {/* ===== BUTTONS ===== */}
        {!editMode ? (
          <button
            type="button"
            className="theme-btn"
            onClick={() =>
              setEditMode(true)
            }
          >
            Edit Contact
          </button>
        ) : (
          <div className="btn-row">

            <button
              type="submit"
              className="theme-btn"
            >
              Update Contact
            </button>

            <button
              type="button"
              className="theme-btn outline"
              onClick={() =>
                setEditMode(false)
              }
            >
              Cancel
            </button>

          </div>
        )}

      </form>
    </div>
  );
}

export default ContactDetails;

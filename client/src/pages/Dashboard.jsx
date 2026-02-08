import React, {
  useEffect,
  useState,
} from "react";

import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";

import {
  getContacts,
  deleteContact,
  toggleFavorite,
} from "../services/contactService";

function Dashboard() {

  const [contacts, setContacts] =
    useState([]);

  const [search, setSearch] =
    useState("");

  const [favoriteOnly, setFavoriteOnly] =
    useState(false);

  const [tag, setTag] =
    useState("");

  const [tagsList, setTagsList] =
    useState([]);

  const [page, setPage] =
    useState(1);

  const [pages, setPages] =
    useState(1);

  const navigate = useNavigate();

  /* ================= FETCH CONTACTS ================= */

  const fetchContacts = async () => {

    const params = {
      search,
      tag,
      page,
      limit: 10,
    };

    // ✅ Add favorite ONLY if filter ON
    if (favoriteOnly) {
      params.favorite = true;
    }

    const res = await getContacts(params);

    setContacts(res.data.contacts);
    setPages(res.data.pages);
  };

  /* ================= FETCH TAGS ================= */

  const fetchTags = async () => {

    const res = await getContacts({
      limit: 1000,
    });

    const allTags =
      res.data.contacts.flatMap(
        (c) => c.tags || []
      );

    const uniqueTags = [
      ...new Set(allTags),
    ];

    setTagsList(uniqueTags);
  };

  useEffect(() => {
    fetchContacts();
  }, [search, favoriteOnly, tag, page]);

  useEffect(() => {
    fetchTags();
  }, []);

  /* ================= ACTIONS ================= */

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  const handleAddContact = () => {
    navigate("/contact/new");
  };

  const handleView = (id) => {
    navigate(`/contact/${id}`);
  };

  const handleDelete = async (id) => {

    await deleteContact(id);

    setContacts((prev) =>
      prev.filter(
        (c) => c._id !== id
      )
    );
  };

  const handleFavorite = async (id) => {

    await toggleFavorite(id);

    setContacts((prev) =>
      prev.map((c) =>
        c._id === id
          ? {
              ...c,
              favorite:
                !c.favorite,
            }
          : c
      )
    );
  };

  /* ================= UI ================= */

  return (
    <div className="dashboard-page">

      <Navbar
        search={search}
        setSearch={setSearch}
        onLogout={handleLogout}
      />

      <div className="dashboard-container">

        <div className="dashboard-header">

          <h2>Dashboard</h2>

          <button
            className="theme-btn"
            onClick={handleAddContact}
          >
            Add New Contact
          </button>

        </div>

        {/* ===== Filters ===== */}

        <div className="filter-bar">

          <button
            className="theme-btn"
            onClick={() =>
              setFavoriteOnly(
                !favoriteOnly
              )
            }
          >
            {favoriteOnly
              ? "Showing: Favorites"
              : "Filter: Favorites"}
          </button>

          <select
            value={tag}
            onChange={(e) =>
              setTag(e.target.value)
            }
          >
            <option value="">
              All Tags
            </option>

            {tagsList.map(
              (t, i) => (
                <option
                  key={i}
                  value={t}
                >
                  {t}
                </option>
              )
            )}

          </select>

        </div>

        {/* ===== Table ===== */}

        <table className="contact-table">

          <thead>
            <tr>
              <th>Name</th>
              <th>Phone</th>
              <th>Email</th>
              <th>Favorite</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>

            {contacts.length === 0 ? (
              <tr>
                <td colSpan="5">
                  No contacts found
                </td>
              </tr>
            ) : (
              contacts.map((c) => (
                <tr key={c._id}>

                  <td>{c.name}</td>
                  <td>{c.phone}</td>
                  <td>{c.email}</td>

                  <td
                    style={{
                      cursor:
                        "pointer",
                    }}
                    onClick={() =>
                      handleFavorite(
                        c._id
                      )
                    }
                  >
                    {c.favorite
                      ? "⭐"
                      : "☆"}
                  </td>

                  <td className="action-buttons">

                    <button
                      className="theme-btn"
                      onClick={() =>
                        handleView(
                          c._id
                        )
                      }
                    >
                      View
                    </button>

                    <button
                      className="theme-btn"
                      onClick={() =>
                        handleDelete(
                          c._id
                        )
                      }
                    >
                      Delete
                    </button>

                  </td>

                </tr>
              ))
            )}

          </tbody>

        </table>

        {/* ===== Pagination ===== */}

        <div className="pagination">

          <button
            className="theme-btn"
            disabled={page === 1}
            onClick={() =>
              setPage(page - 1)
            }
          >
            Prev
          </button>

          <span>
            Page {page} / {pages}
          </span>

          <button
            className="theme-btn"
            disabled={
              page === pages
            }
            onClick={() =>
              setPage(page + 1)
            }
          >
            Next
          </button>

        </div>

      </div>

    </div>
  );
}

export default Dashboard;

import axios from "axios";

const API = axios.create({
  baseURL: `${process.env.REACT_APP_API_URL}/api`,
});

// Attach token automatically
API.interceptors.request.use((req) => {
  const token = localStorage.getItem("token");

  if (token) {
    req.headers.Authorization = `Bearer ${token}`;
  }

  return req;
});


// 🔹 GET ALL CONTACTS (search/filter/pagination)
export const getContacts = (params) =>
  API.get("/contacts", { params });


// 🔹 CREATE CONTACT
export const createContact = (data) =>
  API.post("/contacts", data);


// 🔹 GET SINGLE CONTACT
export const getContact = (id) =>
  API.get(`/contacts/${id}`);


// 🔹 UPDATE CONTACT
export const updateContact = (id, data) =>
  API.put(`/contacts/${id}`, data);


// 🔹 DELETE CONTACT
export const deleteContact = (id) =>
  API.delete(`/contacts/${id}`);


// 🔹 TOGGLE FAVORITE
export const toggleFavorite = (id) =>
  API.patch(`/contacts/${id}/favorite`);


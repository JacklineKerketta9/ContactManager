import React from "react";
import { useNavigate } from "react-router-dom";
import { toggleFavorite } from "../services/contactService";

function ContactRow({ contact }) {
  const navigate = useNavigate();

  const toggle = async () => {
    await toggleFavorite(contact._id);
    window.location.reload();
  };

  return (
    <tr>
      <td onClick={() => navigate(`/contact/${contact._id}`)}>
        {contact.name}
      </td>

      <td>{contact.phone}</td>
      <td>{contact.email}</td>

      <td onClick={toggle}>
        {contact.favorite ? "⭐" : "☆"}
      </td>
    </tr>
  );
}

export default ContactRow;

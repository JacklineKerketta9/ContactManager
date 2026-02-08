import React from "react";
import ContactRow from "./ContactRow";

function ContactTable({ contacts }) {
  return (
    <table className="contact-table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Phone</th>
          <th>Email</th>
          <th>Favorite</th>
        </tr>
      </thead>

      <tbody>
        {contacts.map((c) => (
          <ContactRow key={c._id} contact={c} />
        ))}
      </tbody>
    </table>
  );
}

export default ContactTable;

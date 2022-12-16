import React from "react";

export const ContactPicker = ({contacts, onChange}) => {
  return (
    <select onChange={onChange}>
      <option selected="selected" value={null}>No contact selected</option>
      {contacts.map((value) => {
        return <option value={value.name}>{value.name}</option>
      })}
    </select>
  );
};

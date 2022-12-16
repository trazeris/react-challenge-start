import React from "react";

export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit
}) => {
  const handleNameChange = ({target}) => {
    setName(target.value);
  }
  const handlePhoneChange = ({target}) => {
    setPhone(target.value);
  }
  const handleEmailChange = ({target}) => {
    setEmail(target.value);
  }
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" required placeholder="name" value={name} onChange={handleNameChange} />
      <input type="phone" required placeholder="phone" value={phone} onChange={handlePhoneChange} />
      <input type="email" required placeholder="email" value={email} onChange={handleEmailChange} />
      <input type="submit" value="Add" />
    </form>
  );
};

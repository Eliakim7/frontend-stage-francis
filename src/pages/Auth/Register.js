import React, { useState } from "react";

function Register() {
  const [firstname, setName] = useState("");
  const [lastname, setPicture] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <h1>Register</h1>
      <form>
        <div>
          <label htmlFor="firstname">Prénom</label>
          <input
            value={firstname}
            onChange={(e) => setName(e.target.value)}
            type="text"
            name="firstname"
          />
        </div>
        <div>
          <label htmlFor="lastname">Nom</label>
          <input
            value={lastname}
            onChange={(e) => setPicture(e.target.value)}
            type="text"
            name="lastname"
          />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            name="email"
          />
        </div>
        <div>
          <label htmlFor="password">Mot de Passe</label>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            name="password"
          />
        </div>
        <button>S'enregistrer</button>
      </form>
      <button>Déjà un compte ? Connectez-vous ici</button>
    </>
  );
}

export default Register;

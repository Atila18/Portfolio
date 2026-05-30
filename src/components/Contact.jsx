
import { useState } from "react";
import "./scss components/Contact.scss"

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("idle");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch("http://localhost:3001/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      // ✅ IMPORTANT : on lit du JSON
      const data = await res.json();

      if (!data.success) throw new Error();

      setStatus("success");
      setForm({ name: "", email: "", message: "" });
    } catch (error) {
  console.error("Erreur lors de l'envoi :", error); // <-- On utilise la variable ici !
  setStatus("error");
}
  };

  return (
    <div style={{ maxWidth: 500, margin: "50px auto", fontFamily: "Arial" }}>
      <h1>Contact</h1>

      <form onSubmit={handleSubmit}>
        <input
          name="name"
          placeholder="Nom"
          value={form.name}
          onChange={handleChange}
          style={{ display: "block", marginBottom: 10, width: "100%" }}
        />

        <input
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          style={{ display: "block", marginBottom: 10, width: "100%" }}
        />

        <textarea
          name="message"
          placeholder="Message"
          value={form.message}
          onChange={handleChange}
          style={{ display: "block", marginBottom: 10, width: "100%" }}
        />

        <button className="send" type="submit">
          {status === "loading" ? "Envoi..." : "Envoyer"}
        </button>

        {status === "success" && <p className="police" style={{ color: "green" }}>Envoyé ✅</p>}
        {status === "error" && <p className="police" style={{ color: "red" }}>Erreur ❌</p>}
      </form>
    </div>
  );
}


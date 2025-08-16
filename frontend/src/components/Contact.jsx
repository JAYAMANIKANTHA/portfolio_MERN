import { useState } from "react";

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const res = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setStatus("✅ Message sent successfully!");
        setForm({ name: "", email: "", message: "" }); // clear form
      } else {
        setStatus("❌ Failed to send message. Try again.");
      }
    } catch (error) {
      setStatus("⚠️ Server error. Please try later.");
    }
  };

  return (
    <div>
      <h2>Contact Me</h2>
      <form onSubmit={handleSubmit}>
        <input
          name="name"
          placeholder="Your Name"
          value={form.name}
          onChange={handleChange}
          required
        />
        <input
          name="email"
          type="email"
          placeholder="Your Email"
          value={form.email}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={form.message}
          onChange={handleChange}
          required
        />
        <button type="submit">Send</button>
      </form>
      {status && <p>{status}</p>}
    </div>
  );
}

export default Contact;

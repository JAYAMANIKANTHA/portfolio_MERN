import Contact from "../models/Contact.js";

export const submitContact = async (req, res) => {
  try {
    const { name, email, message } = req.body;
    if (!name || !email || !message)
      return res.status(400).json({ message: "All fields required" });
    const saved = await Contact.create({ name, email, message });
    res.status(201).json({ ok: true, id: saved._id });
  } catch (e) {
    res.status(500).json({ message: "Server error" });
  }
};

export const getContacts = async (req, res) => {
  try {
    // Simple token check to avoid exposing all data publicly
    const token = req.headers["x-admin-token"];
    if (token !== process.env.ADMIN_TOKEN)
      return res.status(401).json({ message: "Unauthorized" });

    const contacts = await Contact.find().sort({ createdAt: -1 });
    res.json(contacts);
  } catch {
    res.status(500).json({ message: "Server error" });
  }
};

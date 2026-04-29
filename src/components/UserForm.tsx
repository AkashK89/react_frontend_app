import { useState } from "react";
import { createUser } from "../api/userApi";

export default function UserForm({ onUserAdded }: any) {
  const [form, setForm] = useState({ name: "", email: "", mobile_number: "" });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true);

    try {
      await createUser(form);
      setForm({ name: "", email: "", mobile_number: "" });
      onUserAdded();
    } catch (err) {
      alert("Error creating user");
    }

    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Create User</h2>

      <input
        placeholder="Name"
        value={form.name}
        required
        onChange={(e) => setForm({ ...form, name: e.target.value })}
      />

      <br /><br />

      <input
        placeholder="Email"
        value={form.email}
        required
        onChange={(e) => setForm({ ...form, email: e.target.value })}
      />

      <br /><br />

      <input
        placeholder="Mobile Number"
        value={form.mobile_number}
        required
        onChange={(e) => setForm({ ...form, mobile_number: e.target.value })}
      />

      <br /><br />

      <button type="submit" disabled={loading}>
        {loading ? "Saving..." : "Submit"}
      </button>
    </form>
  );
}
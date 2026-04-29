import { useState } from "react";
import UserForm from "./components/UserForm";
import UserList from "./components/UserList";

export default function App() {
  const [refresh, setRefresh] = useState(0);

  return (
    <div style={{ padding: 40, fontFamily: "Arial" }}>
      <h1>🚀 Luminx Frontend Test</h1>

      <UserForm onUserAdded={() => setRefresh((r) => r + 1)} />

      <hr />

      <UserList refresh={refresh} />
    </div>
  );
}
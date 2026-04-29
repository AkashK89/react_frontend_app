import { useEffect, useState } from "react";
import { getUsers } from "../api/userApi";

export default function UserList({ refresh }: any) {
  const [users, setUsers] = useState<any[]>([]);

  useEffect(() => {
    fetchUsers();
  }, [refresh]);

  const fetchUsers = async () => {
    try {
      const data = await getUsers();
      setUsers(data);
    } catch {
      alert("Error fetching users");
    }
  };

  return (
    <div>
      <h2>User List</h2>

      {users.length === 0 ? (
        <p>No users found</p>
      ) : (
        <ul>
          {users.map((u, i) => (
            <li key={i}>
              {u.name} - {u.email}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
const BASE_URL = import.meta.env.VITE_API_URL;

export const createUser = async (data: any) => {
  const res = await fetch(`${BASE_URL}/users`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!res.ok) throw new Error("Failed to create user");
  return res.json();
};

export const getUsers = async () => {
  const res = await fetch(`${BASE_URL}/users`);

  if (!res.ok) throw new Error("Failed to fetch users");
  return res.json();
};
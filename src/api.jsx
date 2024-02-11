export const host = "https://reqres.in/";

export async function getUsers(page) {
  const response = await fetch(`${host}api/users?page=${page}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (response.status === 200) {
    return response.json();
  } else {
    throw new Error("Такой пользователь не найден");
  }
}

export async function getUserCard(id) {
  const response = await fetch(`${host}api/users/${id}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (response.status === 200) {
    return response.json();
  } else {
    throw new Error("Такой пользователь не найден");
  }
}

export async function registerUser(email, password) {
  const response = await fetch(`${host}api/register`, {
    method: "POST",
    body: JSON.stringify({
      email: email,
      password: password,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (response.status === 400) {
    throw new Error("Пользователь не авторизован");
  }
  const data = response.json();
  return data;
}

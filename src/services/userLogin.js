export const userLogin = async (requestBody) => {
  try {
    const url = "https://fakestoreapi.com/auth/login";

    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestBody),
    };

    const res = await fetch(url, requestOptions);

    if (!res.ok) {
      throw new Error("Error en la petición.");
    }

    const data = await res.json();

    return data;
  } catch (error) {
    console.error("Error al iniciar sesión:", error);
    throw error;
  }
};

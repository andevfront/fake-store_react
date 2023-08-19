export const getAllProducts = async () => {
  try {
    const url = "https://fakestoreapi.com/products";

    const res = await fetch(url);

    if (!res.ok) {
      throw new Error("Error en la petición.");
    }

    const data = await res.json();

    return data;
  } catch (error) {
    console.error("Error al obtener los productos:", error);
    throw error;
  }
};

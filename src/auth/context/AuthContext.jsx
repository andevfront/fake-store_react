import { createContext } from "react";
import { useMutation } from "react-query";
import { userLogin } from "../../services";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const mutation = useMutation(userLogin, {
    onSuccess: (data) => {
      console.log("datos", data);
    },
    onError: (error) => {
      console.error("Error al intentar iniciar sesión:", error);
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const { username, password } = Object.fromEntries(formData);

    if (username.trim().length <= 0 || password.trim().length <= 0) return;

    mutation.mutate({
      username: username,
      password: password,
    });
  };

  const data = { handleSubmit };

  return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>;
};

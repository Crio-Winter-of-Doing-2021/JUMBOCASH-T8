import { API } from "./axios";

export const login = (login_details, navigate, setError, setIsLoading) => {
  API.post("login/", login_details)
    .then((response) => {
      localStorage.setItem("token", response.data.token);
      navigate("/main");
    })
    .catch((err) => {
      setIsLoading(true);
      setError("Invalid Credentials");
    });
};

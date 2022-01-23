import { API } from "./axios";

export const login = (login_details, navigate, setError, setIsLoading) => {
  API.post("login/", login_details)
    .then((response) => {
      localStorage.setItem("token", response.data.token);
      navigate("/Main");
    })
    .catch((err) => {
      setIsLoading(true);
      setError("Invalid Credentials");
    });
};

export const register = (
  register_details,
  navigate,
  setError,
  setIsLoading
) => {
  API.post("register", register_details)
    .then((res) => {
      setIsLoading(true);
      navigate("/");
    })
    .catch((err) => {
      setIsLoading(true);
      err.response.status === 400
        ? setError("User already exist!")
        : setError("Something went wrong!");
    });
};

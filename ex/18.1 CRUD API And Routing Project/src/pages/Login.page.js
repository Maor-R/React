import { useState } from "react";

import { validateEmail } from "../utils/validateEmail";

import { Logo, FormRow, Modal } from "../components";
import Wrapper from "../styles/styled/Login.styled";

import { users } from "../data";

const initialState = {
  id: "",
  name: "",
  email: "",
  password: "",
  type: "",
  isVote: false,
};


const Login = () => {
  const [values, setValues] = useState(initialState);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [errorMessages, setErrorMessages] = useState([]);
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [userPassword, setUserPassword] = useState("");

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    if (name === "email") {
      const userMatch = users.filter((user) => user.email === value);

      if (userMatch[0] !== undefined) {
        setValues({
          ...values,
          [name]: value,
          type: userMatch[0].type,
          id: userMatch[0].id,
          name: userMatch[0].name,
        });
        setUserPassword(userMatch[0].password);
      } else {
        setValues({ ...values, [name]: value });
      }
    } else {
      setValues({ ...values, [name]: value });
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();

    setIsLoading(true);

    const { name, email, password, id, type } = values;

    if (!email || validateEmail(email)) {
      const msg = "Please enter a valid email";
      handleError(msg, setEmailError);
    } else if (!id) {
      const msg = "The email address does not exist";
      handleError(msg, setEmailError);
    } else {
      setEmailError(false);
    }

    if (!password) {
      const msg = "Please enter a password";
      handleError(msg, setPasswordError);
    } else if (id && userPassword !== password) {
      const msg = "The password is incorrect";
      handleError(msg, setPasswordError);
    } else {
      setPasswordError(false);
    }

    if (
      !email ||
      validateEmail(email) ||
      !password ||
      !id ||
      (id && userPassword !== password)
    ) {
      setIsLoading(false);
      return;
    } else {
      localStorage.setItem("userData", JSON.stringify(values));

      setTimeout(() => {
        window.location.reload(false);
      }, 1000);
    }
  };

  const handleError = (msg, setMethod) => {
    setMethod(true);
    const messages = errorMessages;
    messages.push(msg);
    setErrorMessages(messages);
    setIsError(true);
  };

  const closeModal = () => {
    setIsError(false);
    setErrorMessages([]);
  };

  return (
    <Wrapper className="full-page">
      <form className="form" onSubmit={onSubmit}>
        <Logo />
        {/* email field */}
        <FormRow
          error={emailError}
          type="email"
          name="email"
          value={values.email}
          handleChange={handleChange}
        />
        {/* password field */}
        <FormRow
          error={passwordError}
          type="password"
          name="password"
          value={values.password}
          handleChange={handleChange}
        />
        <button type="submit" className="btn btn-block" disabled={isLoading}>
          {isLoading ? "loading..." : "Log In"}
        </button>
      </form>
      {isError && <Modal closeModal={closeModal} messages={errorMessages} />}
    </Wrapper>
  );
};

export default Login;

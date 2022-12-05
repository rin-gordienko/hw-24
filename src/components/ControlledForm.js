import { useState } from "react";

const ControlledForm = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const [emailValue, setEmailValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    if (
      emailValue === "" ||
      passwordValue === "" ||
      confirmPassword === ""
    ) {
      setErrorMessage("You need to fill all fields");
      return;
    }

    if (passwordValue !== confirmPassword) {
      setErrorMessage("The passwords don't match");
      return;
    }

    const isEmailValid = /\S+@\S+\.\S+/;
    if (!isEmailValid.test(emailValue)) {
      setErrorMessage("Enter valid email");
      return;
    }

    console.log({ email: emailValue , password: passwordValue });
  };

  const handleEmailInput = ({ target: { value } }) => {
    setErrorMessage("");
    setEmailValue(value);
  };
  const handlePasswordInput = ({ target: { value } }) => {
    setErrorMessage("");
    setPasswordValue(value);
  };
  const handleConfirmPassword = ({ target: { value } }) => {
    if(errorMessage) {
      setErrorMessage(""); }

    setConfirmPassword(value);
  };

  const handleReset = ({ target: { value } }) => {
    setEmailValue("");
    setPasswordValue("");
    setConfirmPassword("");
    setErrorMessage("");
  };

  return (
    <form onSubmit={handleSubmit} noValidate>
      <label>
        Email
        <input
          type="email"
          name="email"
          value={emailValue}
          onChange={handleEmailInput}
        />
      </label>
      <label>
        Password
        <input
          type="password"
          name="password"
          value={passwordValue}
          onChange={handlePasswordInput}
        />
      </label>
      <label>
        {" "}
        Confirm password
        <input
          type="password"
          name="confirm"
          value={confirmPassword}
          onChange={handleConfirmPassword}
        />
      </label>
      {errorMessage && <h4 className="error">{errorMessage}</h4>}
      <button type="submit">Sign Up</button>
      <button type="reset" onClick={handleReset}>
        Reset
      </button>
    </form>
  );
};

export default ControlledForm;

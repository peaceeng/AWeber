import React, { useState } from "react";

export const PasswordComponent = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isValid, setIsValid] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const validatePassword = () => {
    const minLength = 6;
    const uppercaseRegex = /[A-Z]/;
    const lowercaseRegex = /[a-z]/;
    const numberRegex = /[0-9]/;
    const specialCharRegex = /[!@#$%^&*()_\-+={[}\]|:;"'<,>.]/;

    if (password < minLength) {
      setIsValid(false);
      setErrorMessage("Password length must be equal or longer than 6!");
    } else if (!uppercaseRegex.test(password)) {
      setIsValid(false);
      setErrorMessage("Password must contain UPPERCASE letter!");
    } else if (!lowercaseRegex.test(password)) {
      setIsValid(false);
      setErrorMessage("Password must contain lowercase letter!");
    } else if (!numberRegex.test(password)) {
      setIsValid(false);
      setErrorMessage("Password must contain digit!");
    } else if (!specialCharRegex.test(password)) {
      setIsValid(false);
      setErrorMessage("Password must contain special character!");
    } else if (password !== confirmPassword) {
      setIsValid(false);
      setErrorMessage("Password must be equal to confirm password!");
    } else {
      setIsValid(true);
      setErrorMessage("");
    }
  };

  const onPasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const OnConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    validatePassword();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="password">
          <label>
            Password:
            <input
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={onPasswordChange}
            />
          </label>
          <label>
            Show:
            <input
              id="check"
              type="checkbox"
              value={showPassword}
              onChange={() => setShowPassword((prev) => !prev)}
            />
          </label>
        </div>
        <div className="confirm">
          <label>
            Confirm Password:
            <input
              type={showPassword ? "text" : "password"}
              value={confirmPassword}
              onChange={OnConfirmPasswordChange}
            />
          </label>
        </div>
        <button type="submit">Submit</button>
      </form>
      {isValid ? (
        <p>Password successful!</p>
      ) : (
        <p style={{ color: "red" }}>{errorMessage}</p>
      )}
    </div>
  );
};

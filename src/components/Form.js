import React from "react";
import ErrorIcon from "../images/icon-error.svg";

const Form = () => {
  const [userDetails, setUserDetails] = React.useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });


  const handleChange = (event) => {
    const name = event.target.name;
    setUserDetails({ ...userDetails, [name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (userDetails.firstName.trim().length === 0) {
      document
        .querySelector("#firstNameErrorIcon")
        .classList.add("show-error-icon");
      document
        .querySelector("#firstNameErrorMessage")
        .classList.add("show-error-icon");
      document.querySelector(".form--first-name").classList.add("error");
    } else {
      document
        .querySelector("#firstNameErrorIcon")
        .classList.remove("show-error-icon");
      document
        .querySelector("#firstNameErrorMessage")
        .classList.remove("show-error-icon");
      document.querySelector(".form--first-name").classList.remove("error");
    }

    if (userDetails.lastName.trim().length === 0) {
      document
        .querySelector("#lastNameErrorIcon")
        .classList.add("show-error-icon");
      document
        .querySelector("#lastNameErrorMessage")
        .classList.add("show-error-icon");
      document.querySelector(".form--last-name").classList.add("error");
    } else {
      document
        .querySelector("#lastNameErrorIcon")
        .classList.remove("show-error-icon");
      document
        .querySelector("#lastNameErrorMessage")
        .classList.remove("show-error-icon");
      document.querySelector(".form--last-name").classList.remove("error");
    }

    if (userDetails.email.trim().length === 0) {
      document
        .querySelector("#emailErrorIcon")
        .classList.add("show-error-icon");
      document
        .querySelector("#emailErrorMessage")
        .classList.add("show-error-icon");
      document.querySelector(".form--email").classList.add("error");
    } else {
      document
        .querySelector("#emailErrorIcon")
        .classList.remove("show-error-icon");
      document
        .querySelector("#emailErrorMessage")
        .classList.remove("show-error-icon");
      document.querySelector(".form--email").classList.remove("error");
    }

    // if (
    //   userDetails.email.trim().length > 0 &&
    //   !VerifyEmail(userDetails.email)
    // ) {
    //   document.querySelector("#emailErrorMessage").innerHTML =
    //     "Looks Like this is not an email";
    // } else{
    //   return true
    // }

    if (userDetails.password.trim().length === 0) {
      document
        .querySelector("#passwordErrorIcon")
        .classList.add("show-error-icon");
      document
        .querySelector("#passwordErrorMessage")
        .classList.add("show-error-icon");
      document.querySelector(".form--password").classList.add("error");
    } else {
      document
        .querySelector("#passwordErrorIcon")
        .classList.remove("show-error-icon");
      document
        .querySelector("#passwordErrorMessage")
        .classList.remove("show-error-icon");
      document.querySelector(".form--password").classList.remove("error");
    }

    if (
      (userDetails.firstName.trim().length &&
        userDetails.lastName.trim().length &&
        userDetails.email.trim().length &&
        userDetails.password.trim().length) > 0
    ) {
      window.alert("Registration Successful");
    }

    //
    // console.log(event.target);
    // console.log(userDetails);
  };

  return (
    <div className="form">
      <header className="form--heading">
        Try it free 7 days then $20/mo. thereafter
      </header>
      <form name="myForm" className="form-control" onSubmit={handleSubmit}>
        <div className="form--input--div-holder">
          <div className="form--input-area">
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              className="form--first-name"
              onChange={handleChange}
              value={userDetails.firstName}
            />
            <span className="error-icon" id="firstNameErrorIcon">
              <img src={ErrorIcon} alt="error" />
            </span>
          </div>
          <span className="error-message" id="firstNameErrorMessage">
            First name cannot be empty
          </span>
        </div>
        <div className="form--input--div-holder">
          <div className="form--input-area">
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              className="form--last-name"
              onChange={handleChange}
              value={userDetails.lastName}
            />
            <span className="error-icon" id="lastNameErrorIcon">
              <img src={ErrorIcon} alt="error" />
            </span>
          </div>
          <span className="error-message" id="lastNameErrorMessage">
            Last name cannot be empty
          </span>
        </div>
        <div className="form--input--div-holder">
          <div className="form--input-area">
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              className="form--email"
              onChange={handleChange}
              value={userDetails.email}
            />
            <span className="error-icon" id="emailErrorIcon">
              <img src={ErrorIcon} alt="error" />
            </span>
          </div>
          <span className="error-message" id="emailErrorMessage">
            Email cannot be empty
          </span>
        </div>
        <div className="form--input--div-holder">
          <div className="form--input-area">
            <input
              type="password"
              name="password"
              placeholder="Password"
              className="form--password"
              onChange={handleChange}
              value={userDetails.password}
            />
            <span className="error-icon" id="passwordErrorIcon">
              <img src={ErrorIcon} alt="error" />
            </span>
          </div>
          <span className="error-message" id="passwordErrorMessage">
            Password cannot be empty
          </span>
        </div>
        <button className="form--btn-submit">Claim Your Free Trial</button>
        <p className="form--tnc">
          By clicking the button, you are agreeing to our{" "}
          <a href="/">Terms and Services</a>
        </p>
      </form>
    </div>
  );
};

export default Form;

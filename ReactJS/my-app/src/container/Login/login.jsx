import styled from "styled-components";
import logo from "assets/logo.png";
import icon_arrow from "assets/icon_arrow.svg";
import icon_gg from "assets/icon_gg.png";
import cactus from "assets/cactus.png";
import working from "assets/working.svg";
import icon_fb from "assets/icon_fb.svg";
import icon_github from "assets/icon_github.svg";
import { Form, Field } from "react-final-form";
import { FORM_yERROR } from "final-form";
const StyledLoginPage = styled.div`
  * {
    margin: 0;
    padding: 0;
  }
  .body {
    background-color: #0093e9;
    background-image: linear-gradient(160deg, #0093e9 0%, #80d0c7 100%);
    width: 100%;
    height: 1000px;
    display: flex;
    position: relative;
  }
  .login {
    position: absolute;
    width: 1248px;
    height: 800px;
    left: 130px;
    top: 100px;
    background-color: white;
    border-radius: 22px;
  }
  .login-right {
    position: absolute;
    width: 348px;
    height: 800px;
    left: 1030px;
    top: 100px;
    border-radius: 22px;
    background-color: #74c5f3;
  }
  .logo {
    margin-left: 30px;
    margin-top: 30px;
  }
  .logo img {
    border-radius: 12px;
    width: 100px;
    height: 100px;
  }
  .login-form {
    margin-top: 25px;
    margin-left: 50px;

    font-weight: 600;

    letter-spacing: 0em;
    text-align: left;
    /* position: relative; */
  }
  .info {
    padding-top: 22px;
    padding-bottom: 10px;

    font-family: "Poppins";
    font-style: normal;
    /* font-weight: 300; */
    font-size: 16px;
    line-height: 24px;

    color: #000000;
    position: relative;
  }

  .username {
    width: 470px;
    height: 46px;
    background: #c0dbea;
    border-radius: 4px;
    padding-left: 12px;
    padding-right: 20px;
  }
  .password {
    width: 470px;
    height: 46px;
    background: #c0dbea;
    border-radius: 4px;
    padding-left: 12px;
    padding-right: 20px;
  }
  .forgot-password {
    position: absolute;
    top: 372px;
    left: 418px;
    font-size: 16px;
  }
  .btn-login {
    position: absolute;
    left: 114px;
    top: 246px;
  }
  .btn-login button {
    background: #d885a3;
    border-radius: 23px;
    width: 150px;
    height: 46px;
    color: white;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
  .btn-login:hover {
    cursor: pointer;
  }

  .or {
    position: absolute;
    left: 255px;
    top: 564px;

    font-family: Nunito;
    font-size: 14px;
    font-weight: 400;
    line-height: 19px;
    letter-spacing: 0em;
    text-align: left;
  }
  a {
    text-decoration: none;
  }

  .connect {
    margin-left: 50px;
    display: flex;
    position: relative;
    top: 160px;
    left: 54px;
  }
  .social-media {
    /* box-sizing: border-box; */

    width: 125px;
    height: 50px;
    background: #ffffff;
    border: 1px solid #6096b4;
    border-radius: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 10px;
  }
  .social-media:hover {
    cursor: pointer;
  }
  .social-media img {
    /* display: flex; */
    position: absolute;
  }
  .create-account {
    display: flex;
    padding-left: 132px;
    padding-top: 184px;
  }
  .left {
    padding-right: 15px;
  }
  .working {
    position: absolute;
    top: 212px;
    right: 78px;
  }
  .login-right {
    display: flex;
    position: relative;
  }
  .cactus {
    width: 50px;
    height: 100px;
    position: absolute;
    top: 250px;
    right: 150px;
  }
  .cactus img {
    width: 200px;
    height: 500px;
  }
`;
const onSubmit = (values) => {
  if (values.username !== "abc") {
    return { username: "Unknown username" };
  }
  if (values.password !== "def") {
    return { [FORM_ERROR]: "Login Failed" };
  }
  window.alert("LOGIN SUCCESS!");
};
export const LoginPage = () => {
  return (
    <StyledLoginPage>
      <div className="body">
        <div className="login">
          <div className="logo">
            <img src={logo} alt="" />
          </div>
          <div className="login-form">
            <h2
              style={{ fontSize: "56px", lineHeight: "50px" }}
              className="info"
            >
              Log In
            </h2>
            {/* <form action="#" className onsubmit="checkLogin()">
              <div className="info">Username</div>
              <input
                type="text"
                className="username"
                placeholder="Username"
                autofocus
              />
              <div className="info">Password</div>
              <div className="forgot-password">
                <a href>Forgot Password ?</a>
              </div>
              <input
                type="password"
                className="password"
                placeholder="Password"
              />
              <div className="btn-login">
                <button className="btn-login">
                  <p>LOGIN IN</p>
                  <img src={icon_arrow} alt="" />
                </button>
              </div>
            </form> */}

            <Form
              onSubmit={onSubmit}
              validate={(values) => {
                const errors = {};
                if (!values.username) {
                  errors.username = "Required";
                }
                if (!values.password) {
                  errors.password = "Required";
                }
                return errors;
              }}
              render={({
                submitError,
                handleSubmit,
                form,
                submitting,
                pristine,
                values,
              }) => (
                <form onSubmit={handleSubmit}>
                  <Field name="username">
                    {({ input, meta }) => (
                      <div>
                        <label className="info">Username</label>
                        <input
                          {...input}
                          className="username"
                          type="text"
                          placeholder="Username"
                        />
                        {(meta.error || meta.submitError) && meta.touched && (
                          <span>{meta.error || meta.submitError}</span>
                        )}
                      </div>
                    )}
                  </Field>
                  <Field name="password">
                    {({ input, meta }) => (
                      <div>
                        <label className="info">Password</label>
                        <input
                          {...input}
                          className="password"
                          type="password"
                          placeholder="Password"
                        />
                        {meta.error && meta.touched && (
                          <span>{meta.error}</span>
                        )}
                      </div>
                    )}
                  </Field>
                  {submitError && <div className="error">{submitError}</div>}
                  <div className="buttons">
                    <button  type="submit" disabled={submitting}>
                      Log In
                    </button>
                    <button
                      type="button"
                      onClick={form.reset}
                      disabled={submitting || pristine}
                    >
                      Reset
                    </button>
                  </div>
                  <pre>{JSON.stringify(values, 0, 2)}</pre>
                </form>
              )}
            />
            <div className="or">
              <a href>or continue with</a>
            </div>
          </div>
          <div className="connect">
            <div className="social-media">
              <img
                style={{ width: "19px", height: "24px" }}
                src={icon_gg}
                alt=""
              />
            </div>
            <div className="social-media">
              <img src={icon_github} alt="" />
            </div>
            <div className="social-media">
              <img src={icon_fb} alt="" />
            </div>
          </div>
          <div className="create-account">
            <div className="left">Don’t have an account yet?</div>
            <div className="right">
              <a href>Sign up for free</a>
            </div>
          </div>
        </div>
        <div className="login-right">
          <div className="working">
            <img src={working} alt="" />
          </div>
          <div className="cactus">
            <img src={cactus} alt="" />
          </div>
        </div>
      </div>
    </StyledLoginPage>
  );
};

import React, { useContext } from "react";
import { Formik } from "formik";
import Style from "./Signup.module.css";
import { Link, useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { userContxtApi } from "../Context/UserContexProviderApi";
import { loginValidation } from "../helper/loginValidation";

export default function LoginTest(props) {
  const { data } = useContext(userContxtApi);
  const navigate = useNavigate();
  // const history = useHistory()
  return (
    <>
      <Formik
        initialValues={{
          email: "",
          UserName: "",
          passWord: "",
        }}
        validationSchema={Yup.object({
          UserName: Yup.string()
            .min(3, "Must be 3 character or more")
            .required("required"),
          passWord: Yup.string()
            .min(3, "Must be 3 character or more")
            .required("required"),
        })}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(loginValidation(values, data)));
            if (loginValidation(values, data)) {
              localStorage.setItem(
                "username",
                JSON.stringify({ cond: true, user: values.UserName })
              );
              navigate("/");
              window.location.reload();
            }
            setSubmitting(false);
          }, 400);
        }}
      >
        {(formik) => (
          <div className={Style.container}>
            <div className={Style.formcont}>
              <form onSubmit={formik.handleSubmit}>
                <h3>Login</h3>
                {/* firstname */}
                <label htmlFor="firstName">UserName</label>
                <input
                  id="UserName"
                  name="UserName"
                  type="text"
                  placeholder="johnd"
                  {...formik.getFieldProps("UserName")}
                />
                <div style={{ height: "30px" }}>
                  {formik.errors.UserName && formik.touched.UserName ? (
                    <span style={{ color: "red" }}>
                      {" "}
                      *{formik.errors.UserName}
                    </span>
                  ) : null}
                </div>

                {/* pass */}
                <label htmlFor="passWord">Password</label>
                <input
                  id="passWord"
                  name="passWord"
                  type="password"
                  placeholder="m38rmF$"
                  {...formik.getFieldProps("passWord")}
                />
                <div style={{ height: "30px" }}>
                  {formik.errors.passWord && formik.touched.passWord ? (
                    <span style={{ color: "red" }}>
                      *{formik.errors.passWord}
                    </span>
                  ) : null}
                </div>
                <button className={Style.btn} type="submit">
                  {props.btnName ? props.name : "Login"}
                </button>
                <Link to={"/signup"}>Signup</Link>
              </form>
            </div>
          </div>
        )}
      </Formik>
      <div
        style={{
          backgroundColor: "dodgerblue",
          width: "40%",
          margin: "0px auto",
          textAlign: "center",
          borderRadius: "10px",
        }}
      >
        <h5>username password example to check validation works</h5>
        exp:<h4>username: johnd -- pass: m38rmF$</h4>
        <a href="https://fakestoreapi.com/users">
          https://fakestoreapi.com/users
        </a>
      </div>
    </>
  );
}

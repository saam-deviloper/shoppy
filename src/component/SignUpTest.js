import React from "react";
import { Formik } from "formik";
import Style from "./Signup.module.css";
import { Link } from "react-router-dom";
import * as Yup from "yup";

export default function SignUpTest() {
  return (
    <>
      <Formik
        initialValues={{
          email: "",
          firstName: "",
          lastName: "",
          passWord: "",
          rePass: "",
          id: 0,
        }}
        validationSchema={Yup.object({
          firstName: Yup.string()
            .max(10, "Must be 10 character or less")
            .required("required"),
          lastName: Yup.string()
            .max(15, "Must be 15 character or less")
            .required("required"),
          email: Yup.string()
            .email("not valid email")
            .required("required")
            .required("required"),
          passWord: Yup.string()
            .max(10, "Must be 8 character or more")
            .required("required"),
          rePass: Yup.string()
            .oneOf([Yup.ref("passWord"), null], "password must match")
            .required("required"),
        })}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            values.id++;
            alert(JSON.stringify(values, null, 2));
            localStorage.setItem("user", JSON.stringify(values));
            setSubmitting(false);
          }, 400);
        }}
      >
        {(formik) => (
          <div className={Style.container}>
            <div className={Style.formcont}>
              <form onSubmit={formik.handleSubmit}>
                <h3>SignUp for free</h3>
                {/* firstname */}
                <label htmlFor="firstName">First Name</label>
                <input
                  id="firstName"
                  name="firstName"
                  type="text"
                  {...formik.getFieldProps("firstName")}
                />
                <div style={{ height: "30px" }}>
                  {formik.errors.firstName && formik.touched.firstName ? (
                    <span style={{ color: "red" }}>
                      *{formik.errors.firstName}
                    </span>
                  ) : null}
                </div>
                {/* lastname */}
                <label htmlFor="firstName">Last Name</label>
                <input
                  id="lastName"
                  name="lastName"
                  type="text"
                  {...formik.getFieldProps("lastName")}
                />
                <div style={{ height: "30px" }}>
                  {formik.errors.lastName && formik.touched.lastName ? (
                    <span style={{ color: "red" }}>
                      *{formik.errors.lastName}
                    </span>
                  ) : null}
                </div>
                {/* email */}
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  {...formik.getFieldProps("email")}
                />
                <div style={{ height: "30px" }}>
                  {formik.errors.email && formik.touched.email ? (
                    <span style={{ color: "red" }}>
                      *{formik.errors.email}
                    </span>
                  ) : null}
                </div>
                {/* pass */}
                <label htmlFor="passWord">Password</label>
                <input
                  id="passWord"
                  name="passWord"
                  type="password"
                  {...formik.getFieldProps("passWord")}
                />
                <div style={{ height: "30px" }}>
                  {formik.errors.passWord && formik.touched.passWord ? (
                    <span style={{ color: "red" }}>
                      *{formik.errors.passWord}
                    </span>
                  ) : null}
                </div>
                {/* repass */}
                <label htmlFor="rePass">Re-enter password</label>
                <input
                  id="rePass"
                  name="rePass"
                  type="password"
                  {...formik.getFieldProps("rePass")}
                />
                <div style={{ height: "30px" }}>
                  {formik.errors.rePass && formik.touched.rePass ? (
                    <span style={{ color: "red" }}>
                      *{formik.errors.rePass}
                    </span>
                  ) : null}
                </div>
                <button className={Style.btn} type="submit">
                  submit
                </button>
                <Link to={"/login"}>Login</Link>
                {/* <a onClick={() => console.log(data)}>Login</a> */}
              </form>
            </div>
          </div>
        )}
      </Formik>
      {/* <UserContext data={user} /> */}
    </>
  );
}

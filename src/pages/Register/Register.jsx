// import React from 'react
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { useFormik } from "formik";
import * as Yup from "yup";

// Icons
import { HiUserAdd } from "react-icons/hi";

const Register = () => {
  // Formik
  const [successMessage, setSuccessMessage] = useState("");

  // InitialState
  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
      repassword: "",
      name: "",
      surname: "",
    },
    validationSchema: Yup.object().shape({
      username: Yup.string()
        .max(50, "Kullanıc adınız 50 karakter veya daha az olmalıdır")
        .required("Kullanıcı adı gereklidir"),
      email: Yup.string()
        .email("Geçersiz e-mail adresi")
        .required("E-mail adresi gereklidir"),
      password: Yup.string()
        .min(8, "Parola en az 8 karakter olmalıdır")
        .required("Parola gereklidir")
        .matches(/[0-9]/, "En az bir rakam içermelidir"),
      repassword: Yup.string()
        .oneOf([Yup.ref("password"), null], "Parolalar eşleşmelidir")
        .required("Parola tekrar gereklidir"),
      name: Yup.string()
        .max(50, "Adınız 50 karakter veya daha az olmalıdır")
        .required("Adınız gereklidir"),
      surname: Yup.string()
        .max(50, "Soyadınız 50 karakter veya daha az olmalıdır")
        .required("Soyadınız gereklidir"),
    }),
    onSubmit: (values, { resetForm }) => {
      // alert(JSON.stringify(values, null, 2));
      setSuccessMessage("Başarıyla kayıt oldunuz.");
      resetForm();
    },
  });

  useEffect(() => {
    if (successMessage) {
      setTimeout(() => {
        setSuccessMessage("");
      }, 5000);
    }
  }, [successMessage]);

  return (
    <>
      <Helmet>
        <title>Üye Ol | HDFilmcehennemi | Film izle | HD Film izle</title>
      </Helmet>
      <section className="register">
        <div className="container">
          <div className="register-content">
            <div className="title">
              <h5 className="head">
                <HiUserAdd className="icon" /> Üye Ol
              </h5>
            </div>
            <div className="register-form">
              <form action="" onSubmit={formik.handleSubmit}>
                {successMessage && (
                  <div className="success">{successMessage}</div>
                )}

                <div className="form-group">
                  <input
                    id="username"
                    name="username"
                    type="text"
                    placeholder="Kullanıcı Adınız*"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.username}
                    className={`input ${
                      formik.touched.username && formik.errors.username
                        ? "err-border"
                        : ""
                    }`}
                  />
                  {formik.touched.username && formik.errors.username ? (
                    <span className="error">{formik.errors.username}</span>
                  ) : null}
                </div>
                <div className="form-group">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="E-mail Adresiniz*"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.email}
                    className={`input ${
                      formik.touched.email && formik.errors.email
                        ? "err-border"
                        : ""
                    }`}
                  />
                  {formik.touched.email && formik.errors.email ? (
                    <span className="error">{formik.errors.email}</span>
                  ) : null}
                </div>
                <div className="form-group">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    placeholder="Parolanız*"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.password}
                    className={`input ${
                      formik.touched.password && formik.errors.password
                        ? "err-border"
                        : ""
                    }`}
                  />
                  {formik.touched.password && formik.errors.password ? (
                    <span className="error">{formik.errors.password}</span>
                  ) : null}
                </div>
                <div className="form-group">
                  <input
                    id="repassword"
                    name="repassword"
                    type="password"
                    placeholder="Parolanız Tekrar*"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.repassword}
                    className={`input ${
                      formik.touched.repassword && formik.errors.repassword
                        ? "err-border"
                        : ""
                    }`}
                  />
                  {formik.touched.repassword && formik.errors.repassword ? (
                    <span className="error">{formik.errors.repassword}</span>
                  ) : null}
                </div>
                <div className="form-group">
                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Adınız*"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.name}
                    className={`input ${
                      formik.touched.name && formik.errors.name
                        ? "err-border"
                        : ""
                    }`}
                  />
                  {formik.touched.name && formik.errors.name ? (
                    <span className="error">{formik.errors.name}</span>
                  ) : null}
                </div>
                <div className="form-group">
                  <input
                    id="surname"
                    name="surname"
                    type="text"
                    placeholder="Soyadınız*"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.surname}
                    className={`input ${
                      formik.touched.surname && formik.errors.surname
                        ? "err-border"
                        : ""
                    }`}
                  />
                  {formik.touched.surname && formik.errors.surname ? (
                    <span className="error">{formik.errors.surname}</span>
                  ) : null}
                </div>

                <button type="submit">Kayıt Ol</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Register;

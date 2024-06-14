// import React from 'react'
import { useState } from "react";
import { Helmet } from "react-helmet";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useEffect } from "react";

const Contact = () => {
  // Formik
  const [successMessage, setSuccessMessage] = useState("");

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      message: "",
    },
    validationSchema: Yup.object().shape({
      name: Yup.string()
        .max(50, "Adınız 50 karakter veya daha az olmalıdır")
        .required("İsim gereklidir"),
      email: Yup.string()
        .email("Geçersiz e-posta adresi")
        .required("E-Posta gereklidir"),
      message: Yup.string()
        .max(500, "Mesaj 500 karakter veya daha az olmalıdır")
        .required("Mesaj gereklidir"),
    }),
    onSubmit: (values, { resetForm }) => {
      // alert(JSON.stringify(values, null, 2));
      setSuccessMessage("İletişim mesajınız başarıyla gönderildi.");
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
        <title>İletişim | HDFilmcehennemi | Film izle | HD Film izle</title>
      </Helmet>
      <section className="contact">
        <div className="container">
          <div className="contact-content">
            <div className="title">
              <h5 className="head">İletişim</h5>
            </div>
            <div className="main-content">
              <div className="warning">
                <p className="text">Sevgili ziyaretçilerimiz,</p>
                <p className="text">
                  Sitemizin ismini kullanarak{" "}
                  <b>Yorum Yaz, Görev Yap, Para Kazan</b> şeklinde mesajlar
                  göndererek <b>Universal Pictures</b> firmasından yazdığını
                  söyleyen kişilerin oyununa gelmeyiniz.
                </p>
                <p className="text">
                  <b>Fishing</b> adı verilen avlama yöntemi ile insanları
                  kandırarak gelir elde etmeye çalışmaktadırlar.
                </p>
                <p className="text">Sitemizle bir alakası bulunmamaktadır.</p>
              </div>
              <p className="text-email">
                Mail iletişim: infoyabancidiziizle@gmail.com
              </p>
              <div className="contact-form">
                <h2 className="head">İletişim Formu</h2>
                <form action="" onSubmit={formik.handleSubmit}>
                  {successMessage && (
                    <div className="success">{successMessage}</div>
                  )}

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
                      id="email"
                      name="email"
                      type="email"
                      placeholder="E-Posta*"
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
                    <textarea
                      id="message"
                      name="message"
                      placeholder="Mesajınız*"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.message}
                      className={`input ${
                        formik.touched.message && formik.errors.message
                          ? "err-border"
                          : ""
                      }`}
                    />
                    {formik.touched.message && formik.errors.message ? (
                      <span className="error textarea-err">
                        {formik.errors.message}
                      </span>
                    ) : null}
                  </div>

                  <button type="submit">Gönder</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;

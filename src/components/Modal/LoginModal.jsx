// import React from 'react'
import PropTypes from "prop-types";
import { useEffect, useState } from "react";

// Icons
import { CgLogIn } from "react-icons/cg";
import { FaQuestionCircle } from "react-icons/fa";

const LoginModal = ({ isOpen, onClose }) => {
  // Tab content
  const [active, setActive] = useState("content1");

  const changeContent = (content) => {
    setActive(content);
  };

  // Content1 isActive
  useEffect(() => {
    if (isOpen) {
      setActive("content1");
    }
  }, [isOpen]);

  return (
    <div className={`modal ${isOpen ? "open" : ""}`}>
      <div className="overlay" onClick={onClose}></div>
      <div className="form-login">
        {/* Content 1 */}
        {active === "content1" && (
          <div className="login-inner">
            <div className="title">
              <div className="left">
                <CgLogIn className="icon" />
                Üye Girişi
              </div>
              <div className="cancel" onClick={onClose}>
                x
              </div>
            </div>
            <div className="content">
              <input
                type="text"
                className="inp"
                placeholder="Kullanıcı Adınız"
              />
              <input type="password" className="inp" placeholder="Parolanız" />
              <label className="remember">
                <input type="checkbox" defaultChecked />
                <p>Beni Hatırla</p>
              </label>
              <button className="login-btn">Giriş Yap</button>
              <p className="forget" onClick={() => changeContent("content2")}>
                Parolanı mı Unuttun?
              </p>
            </div>
          </div>
        )}

        {/* Content 2 */}
        {active === "content2" && (
          <div className="login-inner">
            <div className="title">
              <div className="left">
                <FaQuestionCircle className="icon" />
                Parola Sıfırla
              </div>
              <div className="cancel" onClick={onClose}>
                x
              </div>
            </div>
            <div className="content">
              <input
                type="text"
                className="inp"
                placeholder="Mail veya Kullanıcı Adınız"
              />
              <button className="login-btn">Yeni Parola Al</button>
              <p className="forget" onClick={() => changeContent("content1")}>
                Giriş Yap
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

LoginModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default LoginModal;

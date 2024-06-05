import React, { useEffect, useRef, useState } from "react";
import enFlag from "@assets/images/en.webp";
import faFlag from "@assets/images/fa.webp";
import { useAppContext } from "../context/app/AppContext";

const ChangeLanguage = () => {
  const [show, setShow] = useState(false);
  const ref = useRef();

  const { language, changeLanguage } = useAppContext();

  useEffect(() => {
    const checkInfoClickOutside = (e) => {
      if (show && ref.current && !ref.current.contains(e.target)) {
        setShow(false);
      }
    };

    document.addEventListener("mousedown", checkInfoClickOutside);

    return () => {
      document.removeEventListener("mousedown", checkInfoClickOutside);
    };
  }, [show]);

  return (
    <div className="dropdown">
      <a
        onClick={() => {
          setShow(true);
        }}
        className="nav-flag dropdown-toggle"
      >
        <img src={language === "fa" ? faFlag : enFlag} alt="English" />
      </a>
      <div
        ref={ref}
        className={`dropdown-menu dropdown-menu-end ${
          show ? "show" : undefined
        }`}
      >
        <a
          className="dropdown-item fw-bolder d-flex align-items-center gap-2"
          style={{ textAlign: language === "fa" ? "right" : "left" }}
          onClick={() => changeLanguage("fa")}
        >
          <img src={faFlag} width="20" className="ms-2" />
          <span className="align-middle">فارسی</span>
        </a>

        <a
          className="dropdown-item fw-bolder d-flex align-items-center gap-2"
          style={{ textAlign: language === "fa" ? "right" : "left" }}
          onClick={() => changeLanguage("en")}
        >
          <img src={enFlag} width="20" className="ms-2" />
          <span className="align-middle">English</span>
        </a>
      </div>
    </div>
  );
};

export default ChangeLanguage;

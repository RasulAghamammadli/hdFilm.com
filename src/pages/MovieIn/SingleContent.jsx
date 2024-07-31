// import React from 'react'

// Icons
import { FaCirclePlay } from "react-icons/fa6";
import { FaRegLightbulb } from "react-icons/fa";
import { FaFlag } from "react-icons/fa";
import { FaPlusSquare } from "react-icons/fa";

const SingleContent = () => {
  return (
    <>
      {/* Title */}
      <div className="title">
        <div className="head">
          <h5 className="head-text">
            <FaCirclePlay className="icon" />
            Film adı
          </h5>
          <span className="head-text-right">
            Film adı
          </span>
        </div>
      </div>
      {/* Title */}

      {/* Video top */}
      <div className="video-top">
        <div>
          <h4>Vidrame - TR</h4>
        </div>
        <div className="manage-video">
          <button>
            <FaRegLightbulb className="manage-video-icon" />
            Sinema Modu
          </button>
          <button>
            <FaFlag className="manage-video-icon" />
            Hata Bildir
          </button>
          <button>
            <FaPlusSquare className="manage-video-icon" />
            Listeye Ekle
          </button>
        </div>
      </div>
      {/* Video top */}

      {/* Video */}
        <video>
          <source src="" />
        </video>
      {/* Video */}
    </>
  );
};

export default SingleContent;

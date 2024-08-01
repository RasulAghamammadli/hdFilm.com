import React from 'react';

// Icons
import { FaCirclePlay } from "react-icons/fa6";
import { FaRegLightbulb } from "react-icons/fa";
import { FaFlag } from "react-icons/fa";
import { FaPlusSquare } from "react-icons/fa";
import YouTube from "react-youtube";
import { FaShare } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { AiFillLike } from "react-icons/ai";
import { AiFillDislike } from "react-icons/ai";
//Icons

const SingleContent = () => {
  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      autoplay: 0,
    },
  };

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
      <div>
        <YouTube videoId="2J2iZcKIkk8" opts={opts} />
      </div>
      <div className='video-bottom'>
        <div className="video-bottom-left">
          <div className="share-left">
            <p>Paylaş</p>
            <FaShare className='share-icon' />
          </div>
          <div className='share-right'>
            <Link to='https://www.facebook.com/' target='blank' className='social'>
              <FaFacebookF />
              <Link to='https://www.facebook.com/' target='blank'>Facebook</Link>
            </Link>
            <Link to='https://x.com/?mx=2' target='blank' className='social'>
              <FaTwitter />
              <Link to='https://x.com/?mx=2' target='blank'>Twitter</Link>
            </Link>
            <Link to='https://web.whatsapp.com/' target='blank' className='social'>
              <FaWhatsapp />
              <Link to='https://web.whatsapp.com/' target='blank'>WhatsApp</Link>
            </Link>
          </div>
        </div>
        <div className='video-bottom-right'>
          <div className='like'>
            <AiFillLike />
            <button>Beğendim</button>
          </div>
          <div className='dislike'>
            <AiFillDislike />
            <button>Beğenmedim</button>
          </div>
        </div>
      </div>
      {/* Video */}
    </>
  );
};

export default SingleContent;

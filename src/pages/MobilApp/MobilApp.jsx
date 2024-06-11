// import React from 'react'
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

// Images
import googlePlay from "../../assets/images/google-play.webp";

const MobilApp = () => {
  return (
    <>
      <Helmet>
        <title>
          HDfilmcehennemi Mobil Uygulama (Android APK) | HDFilmcehennemi | Film
          izle | HD Film izle
        </title>
      </Helmet>
      <section className="mobil-app">
        <div className="container">
          <div className="app-inner">
            <div className="title">
              <h5 className="head">
                HDfilmcehennemi Mobil Uygulama (Android APK)
              </h5>
            </div>
            <div className="app-content">
              <h3 className="subtitle">
                HDfilmcehennemi Mobil Uygulama (Android APK)
              </h3>
              <p className="text">
                HDfilmcehennemi Mobil, Android kullanıcıları için özel olarak
                tasarlanmış bir film izleme uygulamasıdır. Türkiye’nin seçkin
                film platformlarından biri olan HDfilmcehennemi’nin bu mobil
                uygulaması sayesinde, 20.000’den fazla 4K ve Full HD kalitedeki
                film arşivine parmaklarınızın ucunda erişebilirsiniz. Filmleri
                kesintisiz ve en yüksek çözünürlükte izlemenin yanı sıra,
                uygulama aracılığıyla yeni vizyona giren filmler hakkında anında
                bilgi alabilirsiniz.
              </p>
              <h3 className="subtitle">Uygulamayı İndir</h3>
              <p className="text">
                <Link to="https://play.google.com">
                  <img src={googlePlay} alt="" />
                </Link>
              </p>
              <p className="text">
                Cihazınızın ayarlar menüsüne giderek “Biyometrik veriler ve
                Güvenlik” seçeneğini seçin ve “Bilinmeyen kaynaklardan uygulama
                yükleme” özelliğini aktif hale getirin. Ardından, uygulamayı
                indirdiğiniz web tarayıcısına gerekli izinleri verin.
              </p>
              <p className="text">
                Eğer kurulum sırasında “Play Protect tarafından engelleniyor”
                türünde bir uyarı ile karşılaşırsanız, endişelenmeyin. Kuruluma
                devam etmek için “YİNE DE YÜKLE” seçeneğine basmanız yeterli
                olacaktır.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MobilApp;

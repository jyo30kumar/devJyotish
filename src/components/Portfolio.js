import Isotope from "isotope-layout";
import { useEffect, useRef, useState } from "react";
import { dataImage, portfolioHover } from "../utilits";
import CantileverPopup from "./popup/CantileverPopup";
import DetailsPopup from "./popup/DetailsPopup";
import ImgSearchEngine from "./popup/ImgSearchEngine.js";
import FestivalLive from "./popup/FestivalLIve.js";
import ShopifyPopup from "./popup/ShopifyPopup";
import Image from "next/image";
const Portfolio = () => {
  useEffect(() => {
    dataImage();
    portfolioHover();
  }, []);

  // Isotope
  const isotope = useRef();
  const [filterKey, setFilterKey] = useState("*");
  useEffect(() => {
    setTimeout(() => {
      isotope.current = new Isotope(".gallery_zoom", {
        itemSelector: ".grid-item",
        //  layoutMode: "fitRows",
        percentPosition: true,
        // masonry: {
        //   columnWidth: ".grid-item",
        // },
        animationOptions: {
          duration: 750,
          easing: "linear",
          queue: false,
        },
      });
    }, 500);
    return () => isotope.current.destroy();
  }, []);
  useEffect(() => {
    if (isotope.current) {
      filterKey == "*"
        ? isotope.current.arrange({ filter: `*` })
        : isotope.current.arrange({ filter: `.${filterKey}` });
    }
  }, [filterKey]);
  const handleFilterKeyChange = (key) => () => {
    setFilterKey(key);
  };
  const activeBtn = (value) => (value === filterKey ? "current" : "");

  // Popup
  const [cantiPopup, setCantiPopup] = useState(false);
  const [imgSearchEnginePopup, setImgSearchEnginePopup] = useState(false);
  const [festivalLivePopup, setFestivalLivePopup] = useState(false);
  const [shopifyPopup, setShopifyPopup] = useState(false);

  return (
    <div className="dizme_tm_section" id="portfolio">
      <CantileverPopup open={cantiPopup} close={() => setCantiPopup(false)} />
      <ImgSearchEngine
        open={imgSearchEnginePopup}
        close={() => setImgSearchEnginePopup(false)}
      />
      <FestivalLive
        open={festivalLivePopup}
        close={() => setFestivalLivePopup(false)}
      />
      <ShopifyPopup open={shopifyPopup} close={() => setShopifyPopup(false)} />

      <div className="dizme_tm_portfolio">
        <div className="container">
          <div className="dizme_tm_main_title" data-align="center">
            <span>Portfolio</span>
            <h3>My Amazing Works</h3>
            <p>
              Most common methods for designing websites that work well on
              desktop is responsive and adaptive design
            </p>
          </div>
          <div className="portfolio_filter">
            <ul>
              <li>
                <a
                  className={`c-pointer ${activeBtn("*")}`}
                  onClick={handleFilterKeyChange("*")}
                >
                  All
                </a>
              </li>
              <li>
                <a
                  className={`c-pointer ${activeBtn("fullstack")}`}
                  onClick={handleFilterKeyChange("fullstack")}
                >
                  Full Stack
                </a>
              </li>
              <li>
                <a
                  className={`c-pointer ${activeBtn("frontend")}`}
                  onClick={handleFilterKeyChange("frontend")}
                >
                  Frontend
                </a>
              </li>
              <li>
                <a
                  className={`c-pointer ${activeBtn("template")}`}
                  onClick={handleFilterKeyChange("template")}
                >
                  Templates
                </a>
              </li>
            </ul>
          </div>
          <div className="dizme_tm_portfolio_titles" />
          <div className="portfolio_list wow fadeInUp" data-wow-duration="1s">
            <ul className="gallery_zoom grid">
              {/* image search engine */}
              <li
                className="fullstack grid-item"
                onClick={() => setImgSearchEnginePopup(true)}
              >
                <div className="inner">
                  <div
                    className="entry dizme_tm_portfolio_animation_wrap"
                    data-title="Image Search Engine"
                    data-category="frontend"
                  >
                    <a className="popup-youtube">
                      <img
                        src="img/portfolio/portfolioDetail/imgSearchEngine.png"
                        alt="Image Search Engine"
                        height={480}
                      />
                      <div
                        className="main"
                        data-img-url="img/portfolio/portfolioDetail/imgSearchEngine.png"
                      />
                    </a>
                  </div>
                  <div className="mobile_title">
                    <h3>Image Search Engine</h3>
                    <span>Frontend</span>
                  </div>
                </div>
              </li>
              {/* festival live */}
              <li
                className="frontend grid-item"
                onClick={() => setFestivalLivePopup(true)}
              >
                <div className="inner">
                  <div
                    className="entry dizme_tm_portfolio_animation_wrap"
                    data-title="Festival Live"
                    data-category="frontend"
                  >
                    <a className="popup-vimeo">
                      <img
                        src="img/thumbs/42-34.jpg"
                        alt="image"
                        height={270}
                      />
                      <div
                        className="main"
                        data-img-url="img/portfolio/portfolioDetail/festivalLive.png"
                      />
                    </a>
                  </div>
                  <div className="mobile_title">
                    <h3>Festival Live</h3>
                    <span>Frontend</span>
                  </div>
                </div>
              </li>
              {/* cantilever labs  */}
              <li
                className="fullstack grid-item"
                onClick={() => setCantiPopup(true)}
              >
                <div className="inner">
                  <div
                    className="entry dizme_tm_portfolio_animation_wrap"
                    data-title="Cantilever Labs"
                    data-category="fullstack"
                  >
                    <a className="portfolio_popup">
                      <img
                        src="img/thumbs/42-34.jpg"
                        alt="image"
                        height={420}
                      />
                      <div
                        className="main"
                        data-img-url="img/portfolio/cant.jfif"
                      />
                    </a>
                  </div>
                  <div className="mobile_title">
                    <h3>Cantilever Labs</h3>
                    <span>Full Stack</span>
                  </div>
                </div>
              </li>
              {/* Tin Dog */}
              <li className="template grid-item">
                <div className="inner">
                  <div
                    className="entry dizme_tm_portfolio_animation_wrap"
                    data-title="Tin Dog"
                    data-category="template"
                  >
                    <a
                      className="soundcloude_link mfp-iframe audio"
                      href="https://jyo30kumar.github.io/tinDog/"
                      target="blank"
                    >
                      <img
                        src="img/thumbs/42-56.jpg"
                        alt="image"
                        height={480}
                      />
                      <div
                        className="main"
                        data-img-url="img/portfolio/portfolioDetail/tinDog.png"
                      />
                    </a>
                  </div>
                  <div className="mobile_title">
                    <h3>Tin Dog</h3>
                    <span>Template</span>
                  </div>
                </div>
              </li>

              {/* Tin Dog */}
              <li className="template grid-item">
                <div className="inner">
                  <div
                    className="entry dizme_tm_portfolio_animation_wrap"
                    data-title="Food Villa"
                    data-category="template"
                  >
                    <a
                      className="zoom"
                      href="https://jyo30kumar.github.io/food-villa/"
                      target="blank"
                    >
                      <img
                        src="img/thumbs/42-56.jpg"
                        alt="image"
                        height={480}
                      />
                      <div
                        className="main"
                        data-img-url="img/portfolio/portfolioDetail/foodVilla.png"
                      />
                    </a>
                  </div>
                  <div className="mobile_title">
                    <h3>Food Villa</h3>
                    <span>Template</span>
                  </div>
                </div>
              </li>

              {/* Nubie care */}
              <li className="fullstack grid-item">
                <div className="inner">
                  <div
                    className="entry dizme_tm_portfolio_animation_wrap"
                    data-title="Nubie Care - Shopify Store"
                    data-category="fullstack"
                  >
                    <a
                      className="portfolio_popup"
                      href="https://nubiecare.in/"
                      target="blank"
                    >
                      <img
                        src="img/thumbs/42-34.jpg"
                        alt="image"
                        height={270}
                      />
                      <div
                        className="main"
                        data-img-url="img/portfolio/blog.jpg"
                      />
                    </a>
                  </div>
                  <div className="mobile_title">
                    <h3>Nubie Care</h3>
                    <span>Shopify</span>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="brush_1 wow zoomIn" data-wow-duration="1s">
          <img src="img/brushes/portfolio/1.png" alt="image" />
        </div>
        <div className="brush_2 wow fadeInRight" data-wow-duration="1s">
          <img src="img/brushes/portfolio/2.png" alt="image" />
        </div>
      </div>
    </div>
  );
};
export default Portfolio;

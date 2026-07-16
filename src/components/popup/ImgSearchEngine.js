const ImgSearchEngine = ({ open, close }) => {
  return (
    <div className={`dizme_tm_modalbox ${open ? "opened" : ""}`}>
      <div className="box_inner">
        <div className="close">
          <a onClick={() => close()}>
            <i className="icon-cancel" />
          </a>
        </div>
        <div className="description_wrap">
          <div className="popup_details">
            <div className="top_image">
              <img src="img/thumbs/4-2.jpg" alt="image" />
              <div
                className="main"
                data-img-url="img/portfolio/portfolioDetail/imgSearchEngine.png"
                style={{
                  backgroundImage:
                    'url("img/portfolio/portfolioDetail/imgSearchEngine.png")',
                  backgroundSize: "contain",
                }}
              />
            </div>
            <div className="portfolio_main_title">
              <a
                href="https://jyo30kumar.github.io/image-search-engine/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <h3>Image Search Engine</h3>
              </a>
              <span>
                <a href="#">Frontend Development</a>
              </span>
              <div />
            </div>
            <div className="main_details">
              <div className="textbox">
                <p>
                  A responsive image search application built using the Unsplash
                  API that allows users to search and explore high-quality
                  images in real time.
                </p>
                <p>{`Some Highlights of Website are -`}</p>
                <div className="" style={{ marginLeft: "2rem" }}>
                  <ol>
                    <li>
                      Integrated the Unsplash REST API for dynamic image search.
                    </li>
                    <li>
                      Implemented keyword-based search with real-time results.
                    </li>
                    <li>Added a Load More feature using pagination.</li>
                    <li>
                      Optimized API requests and handled loading/error states.
                    </li>
                  </ol>
                </div>
              </div>
              <div className="detailbox">
                <ul>
                  <li>
                    <span className="first">Website Link</span>
                    <span>
                      <a
                        href="https://jyo30kumar.github.io/image-search-engine/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Image Search Engine
                      </a>
                    </span>
                  </li>
                  <li>
                    <span className="first">Stack</span>
                    <span>HTML, CSS, JavaScript</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ImgSearchEngine;

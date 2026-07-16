const FestivalLive = ({ open, close }) => {
  return (
    <div className={`dizme_tm_modalbox ${open ? "opened" : ""}`}>
      <div className="box_inner">
        <div className="close">
          <div onClick={() => close()}>
            <i className="icon-cancel" />
          </div>
        </div>
        <div className="description_wrap">
          <div className="popup_details">
            <div className="top_image">
              <img src="img/thumbs/4-2.jpg" alt="image" />
              <div
                className="main"
                data-img-url="img/portfolio/portfolioDetail/festivalLive.png"
                style={{
                  backgroundImage:
                    'url("img/portfolio/portfolioDetail/festivalLive.png")',
                  backgroundSize: "contain",
                }}
              />
            </div>
            <div className="portfolio_main_title">
              <a
                href="https://jyo30kumar.github.io/festivaLive/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <h3>Festival Live</h3>
              </a>
              <span>
                <a href="#">Frontend</a>
              </span>
              <div />
            </div>
            <div className="main_details">
              <div className="textbox">
                <p>
                  Designed and developed a fully responsive landing page using
                  HTML, CSS, and JavaScript, focusing on clean UI and
                  cross-device compatibility.
                </p>
                <p>{`Some Highlights of Website are -`}</p>
                <div className="" style={{ marginLeft: "2rem" }}>
                  <ol>
                    <li>
                      Fully responsive design for desktop, tablet, and mobile.
                    </li>
                    <li>Built using semantic HTML5 and modern CSS3.</li>
                    <li>Interactive UI elements with JavaScript.</li>
                    <li>Optimized layout for different screen sizes.</li>
                    <li>Clean and user-friendly interface.</li>
                  </ol>
                </div>
              </div>
              <div className="detailbox">
                <ul>
                  <li>
                    <span className="first">Website Link</span>
                    <span>
                      <a
                        href="https://jyo30kumar.github.io/festivaLive/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Festival Live
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
export default FestivalLive;

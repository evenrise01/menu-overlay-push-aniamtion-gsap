import Image from "next/image";

export default function Home() {
  return (
    <>
      <nav>
        <div className="menu-bar">
          <div className="menu-logo">
            <a href="#">E10</a>
          </div>
          <div className="menu-toggle-btn">
            <div className="menu-toggle-label">
              <p>Menu</p>
            </div>
            <div className="menu-hamburger-icon">
              <span></span>
              <span></span>
            </div>
          </div>
        </div>


        <div className="menu-overlay">
          <div className="menu-overlay-content">
            <div className="menu-media-wrapper">
              <img src="/menu-media.jpg" alt="" />
            </div>
            <div className="menu-content-wrapper">
              <div className="menu-content-main">
                <div className="menu-col">
                  <div className="menu-link">
                    <a href="#">Index</a>
                  </div>

                  <div className="menu-link">
                    <a href="#">Portfolio</a>
                  </div>

                  <div className="menu-link">
                    <a href="#">Studio</a>
                  </div>

                  <div className="menu-link">
                    <a href="#">Journal</a>
                  </div>

                  <div className="menu-link">
                    <a href="#">Connect</a>
                  </div>
                </div>
                <div className="menu-col">
                  <div className="menu-tag">
                    <a href="#">Web Animations</a>
                  </div>
                  <div className="menu-tag">
                    <a href="#">Interactive Media</a>
                  </div>
                  <div className="menu-tag">
                    <a href="#">Motion Crafts</a>
                  </div>
                </div>
              </div>
              <div className="menu-footer">
                <div className="menu-col">
                  <p>Jaipur, India</p>
                </div>
                <div className="menu-col">
                  <p>hello@evenrise.studios</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>



      <div className="container">
        <section className="hero">
          <h1>Modern design system that look timeless</h1>
        </section>
        <section className="banner">
          <img src="/hero-img.jpg" alt="" />
        </section>
        <section className="outro">
          <h1>Let&apos;s build something quietly iconic</h1>
        </section>
      </div>
    </>
  );
}

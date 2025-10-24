"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { CustomEase, SplitText } from "gsap/all";
import Lenis from "lenis";

gsap.registerPlugin(CustomEase, SplitText);

// Create custom easing function
CustomEase.create("hop", ".87, 0, .13, 1");

export default function Home() {
  useGSAP(() => {
    // Your GSAP animations will go here
    const lenis = new Lenis();
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    const textContainers = document.querySelectorAll(".menu-col");
    let splitTextByContainer = [];

    textContainers.forEach((container) => {
      const textElements = container.querySelectorAll("a, p");
      let containerSplits = [];

      textElements.forEach((element) => {
        const split = SplitText.create(element, {
          type: "lines",
          mask: "lines",
          linesClass: "line",
        });
        containerSplits.push(split);

        gsap.set(split.lines, { y: "-110%" });
      });
      splitTextByContainer.push(containerSplits);
    });

  }, {});

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

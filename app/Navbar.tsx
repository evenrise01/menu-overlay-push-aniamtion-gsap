"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import styles from "./Navbar.module.css";
import gsap from "gsap";
import { SplitText } from "gsap/all";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(SplitText);

const NAV_LINKS = [
  { title: "Features", href: "/features" },
  { title: "For Students", href: "/for-students" },
  { title: "For Educators", href: "/for-educators" },
  { title: "Pricing", href: "/pricing" },
  { title: "Company", href: "/company" },
];

const META_LINKS = [
  { title: "Changelog", href: "/changelog" },
  { title: "hello@goeddie.ai", href: "mailto:hello@goeddie.ai" },
  { title: "Status", href: "/status" },
  { title: "Privacy", href: "/privacy" },
];
export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuOpenRef = React.useRef(false);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      // Don't auto-hide or apply scroll logic if menu is fully open
      if (menuOpenRef.current) return;

      const currentScrollY = window.scrollY;

      if (currentScrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setHidden(true); // Scroll down -> hide
      } else {
        setHidden(false); // Scroll up -> show
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useGSAP(() => {
    const navToggler = document.querySelector(".nav-toggler");
    const navBgs = document.querySelectorAll(".nav-bg");

    let isMenuOpen = false;
    let isAnimating = false;

    const splitLinks = SplitText.create(".nav-items a", {
      type: "lines",
      mask: "lines",
      linesClass: "line",
    });

    const linkBlocks = [
      ".nav-socials .line, .nav-legal .line",
      ".nav-primary-links .line",
      ".nav-secondary-links .line",
    ];

    function animateLinksIn() {
      linkBlocks.forEach((selector) => {
        gsap.fromTo(
          selector,
          { y: "100%" },
          {
            y: "0%",
            duration: 0.75,
            stagger: 0.05,
            ease: "power3.out",
            delay: 0.85,
          },
        );
      });
    }

    const tl = gsap.timeline({
      paused: true,
      onComplete: () => {
        isAnimating = false;
      },
      onReverseComplete: () => {
        gsap.set(linkBlocks.join(", "), { y: "100%" });
        isAnimating = false;
      },
    });

    // Build the timeline just once
    tl.to(navBgs, {
      scaleY: 1,
      duration: 0.75,
      stagger: 0.1,
      ease: "power3.inOut",
    });

    tl.to(
      ".nav-items",
      {
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        duration: 0.75,
        ease: "power3.inOut",
      },
      "-=0.6",
    );

    const handleToggle = () => {
      if (isAnimating) return;
      isAnimating = true;

      if (!menuOpenRef.current) {
        tl.play();
        animateLinksIn();
      } else {
        tl.reverse();
      }

      isMenuOpen = !isMenuOpen;
      menuOpenRef.current = isMenuOpen;
      setMenuOpen(isMenuOpen);
    };

    navToggler?.addEventListener("click", handleToggle);
  });

  return (
    <>
      {/* Overlay - appears behind the menu to darken the screen */}
      <div className="navbar-wrapper w-full">
        <nav
          style={{ zIndex: 9999 }}
          className={`fixed top-0 left-0 w-full transition-all duration-500 ease-in-out ${hidden && !menuOpen
            ? "-translate-y-full opacity-0"
            : "translate-y-0 opacity-100"
            }`}
        >
          <div
            className={`${styles["top-nav"]} ${scrolled && !menuOpen
              ? "bg-[#f4f3ef] text-[#1a1a1a] rounded-full px-8! shadow-sm border border-black/5 h-[4rem]! translate-y-0!"
              : "bg-transparent text-white"
              }`}
          >
            {/* Left: Toggler */}
            <div className="flex-1 flex justify-start">
              <button
                className={`${styles["nav-toggler"]} nav-toggler ${scrolled && !menuOpen ? styles.dark : ""
                  } ${menuOpen ? "open" : ""}`}
              >
                <span></span>
                <span></span>
              </button>
            </div>

            {/* Center: Logo */}
            <div className="flex-1 flex justify-center">
              <div className={styles["nav-logo"]}>
                <a href="#" className="font-semibold text-xl tracking-tight">
                  <svg
                    width="40"
                    height="24"
                    viewBox="0 0 100 50"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className={
                      scrolled && !menuOpen ? "text-black" : "text-white"
                    }
                  >
                    <path d="M10,10 C30,40 70,40 90,10 C70,60 30,60 10,10" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Right: CTA */}
            <div className="flex-1 flex justify-end">
              <a
                href="#"
                className={`font-medium flex items-center gap-1.5 transition-opacity hover:opacity-75 ${scrolled && !menuOpen ? "text-[#1a1a1a]" : "text-white"
                  }`}
              >
                Investors <span className="text-sm font-bold">↗</span>
              </a>
            </div>
          </div>
        </nav>

        <div className={styles["nav-content"]}>
          <div className={`${styles["nav-bg"]} nav-bg bg-[#DDD9FF]`}></div>
          <div className={`${styles["nav-bg"]} nav-bg bg-[#9D8FFF]`}></div>
          <div className={`${styles["nav-bg"]} nav-bg bg-[#9D8FFF]`}></div>
          <div className={`${styles["nav-bg"]} nav-bg bg-[#4330B0]`}></div>
          <div className={`${styles["nav-items"]} nav-items`}>
            <div className={`${styles["nav-socials"]} nav-socials`}>
              <a href="">Instagram</a>
              <a href="">LinkedIn</a>
              <a href="">Youtube</a>
              <a href="">LinkedIn</a>
            </div>

            <div className={`${styles["nav-legal"]} nav-legal`}>
              <a href="">Cookie Policy</a>
              <a href="">Privacy Policy</a>
              <a href="">Terms of Service</a>
              <a href="">Data Control</a>
            </div>

            <div className={`${styles["nav-primary-links"]} nav-primary-links`}>
              {NAV_LINKS.map((item, idx) => (
                <a key={idx} href={item.href}>
                  {item.title}
                </a>
              ))}
            </div>

            <div
              className={`${styles["nav-secondary-links"]} nav-secondary-links`}
            >
              <a href="">About</a>
              <a href="">Careers</a>
              <a href="">Contact</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

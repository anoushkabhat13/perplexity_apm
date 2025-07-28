// src/Banner.js
import React, { useState } from "react";
import { motion } from "framer-motion";
import "@fontsource/ibm-plex-sans";
import { Link } from "react-router-dom";



const bannerStyles = {
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  alignItems: "center",
  minHeight: "100vh",
  fontSize: "2.7rem",
  fontWeight: 700,
  gap: "0rem",
  fontFamily: "'IBM Plex Sans', Arial, sans-serif",
};

const textContainerStyles = {
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
  flexWrap: "wrap", // <-- key for responsiveness!
  gap: "1rem",
  textAlign: "center",
};

const wordStyles = {
  display: "inline-block",
};

const searchBarStyles = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  margin: "2rem auto",
  padding: "1rem 1.5rem",
  borderRadius: "1rem",
  boxShadow: "0 2px 14px rgba(0,0,0,0.11)",
  fontFamily: "'IBM Plex Sans', Arial, sans-serif",
  fontWeight: 500,
  fontSize: "1.2rem",
  background: "#fff",
  border: "1px solid #d2d2d2",
  cursor: "pointer",
  outline: "none",
  transition: "box-shadow 0.2s",
};

const iconStyles = {
  marginRight: "1rem",
  fontSize: "1.45rem",
  opacity: 0.73,
};
export default function Banner() {
  const [showTraits, setShowTraits] = useState(false);

  return (
    <div style={bannerStyles}>
        <>
          <div style={textContainerStyles}>
            <motion.span
              style={wordStyles}
              initial={{ x: -200, scale: 0 }}
              animate={{ x: 0, scale: 1 }}
              transition={{ type: "spring", stiffness: 100, damping: 12, delay: 0 }}
            >
              anoushka
            </motion.span>

            <motion.span
              style={wordStyles}
              initial={{ y: -200, scale: 0 }}
              animate={{ y: 0, scale: 1 }}
              transition={{ type: "spring", stiffness: 100, damping: 10, delay: 0.4 }}
            >
              🤝🏼
            </motion.span>

            <motion.span
              style={wordStyles}
              initial={{ x: 200, scale: 0 }}
              animate={{ x: 0, scale: 1 }}
              transition={{ type: "spring", stiffness: 100, damping: 10, delay: 0.8 }}
            >
              perplexity
            </motion.span>
          </div>
          

          <Link to="/discover" style={{ textDecoration: 'none', color: 'inherit' }}>
            <motion.div
              style={searchBarStyles}
              whileHover={{ boxShadow: "0 4px 24px rgba(0,0,0,0.15)" }}
              whileTap={{ scale: 0.98 }}
              tabIndex={0}
              role="button"
              aria-label="See exactly how I fit Perplexity’s APM DNA"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5, duration: 0.6, ease: "easeOut" }}
            >
              <span style={iconStyles} role="img" aria-label="magnifying glass">
                🔎
              </span>
              See exactly how I fit Perplexity’s APM DNA
            </motion.div>
          </Link>

        </>
    </div>
  );
}

// src/Banner.js
import React, { useState } from "react";
import { motion } from "framer-motion";
import "@fontsource/ibm-plex-sans";
import { Link } from "react-router-dom";

const bannerStyles = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  minHeight: "100vh",
  padding: "0 1rem",
  fontFamily: "'IBM Plex Sans', Arial, sans-serif",
  textAlign: "center",
  overflowX: "hidden",
  width: "100%",
};


const textContainerStyles = {
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center",
  alignItems: "center",
  gap: "1rem",
  maxWidth: "100%",
};

const wordStyles = {
  display: "inline-block",
  fontSize: "2.2rem", // ⬅️ slightly reduced for mobile safety
  fontWeight: 700,
};

const searchBarStyles = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexWrap: "wrap",
  marginTop: "2rem",
  padding: "1rem 1.5rem",
  borderRadius: "1rem",
  boxShadow: "0 2px 14px rgba(0,0,0,0.11)",
  fontFamily: "'IBM Plex Sans', Arial, sans-serif",
  fontWeight: 500,
  fontSize: "1rem",
  background: "#fff",
  border: "1px solid #d2d2d2",
  cursor: "pointer",
  maxWidth: "90vw",
  textAlign: "center",
};

const iconStyles = {
  marginRight: "0.75rem",
  fontSize: "1.4rem",
  opacity: 0.73,
};

export default function Banner() {
  const [showTraits, setShowTraits] = useState(false);

  return (
    <div style={bannerStyles}>
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

      <Link to="/discover" style={{ textDecoration: "none", color: "inherit" }}>
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
    </div>
  );
}

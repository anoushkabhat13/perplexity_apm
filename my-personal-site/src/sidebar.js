import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import discoverImage from "./perplexity_discover.png";

export default function Sidebar({ isOpen, setIsOpen }) {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      const nowMobile = window.innerWidth <= 768;
      setIsMobile(nowMobile);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);


  const sidebarStyles = {
    width: '180px',
    padding: '2rem 1rem',
    background: '#fafaf9',
    borderRight: '1px solid #e4e4e7',
    flexDirection: 'column',
    minHeight: '100vh',
    position: 'fixed',
    left: isOpen ? '0' : '-200px', // ⬅️ slide it off screen
    top: 0,
    zIndex: 1000,
    transition: 'left 0.3s ease',
    display: 'flex',
  };
  
  const toggleButtonStyles = {
    position: 'fixed',
    top: '1rem',
    left: '1rem',
    zIndex: 1100,
    background: '#fff',
    border: '1px solid #ccc',
    padding: '0.5rem',
    borderRadius: '4px',
    cursor: 'pointer',
    display: isMobile ? 'block' : 'none',
  };

  return (
    <>
      {isMobile && (
        <button
          onClick={() => setIsOpen(!isOpen)}
          style={toggleButtonStyles}
        >
          ☰
        </button>
      )}

      <aside style={sidebarStyles}>
        <div style={{ marginBottom: '2.5rem', fontWeight: 700, fontSize: '1.3rem' }}>Home</div>
        <div style={{ marginTop: '2.5rem', marginBottom: '1rem' }}>
          <Link to="/discover" style={{ textDecoration: 'none', color: '#111' }}>
            <img
              src={discoverImage}
              alt="discover"
              style={{ width: '50px', borderRadius: '50%', marginBottom: '0.5rem' }}
            />
          </Link>
          <div style={{ fontWeight: 600, fontSize: '1.1rem', marginBottom: '1rem' }}>
            <Link to="/discover" style={{ textDecoration: 'none', color: '#111' }}>
              Discover Anoushka
            </Link>
          </div>
          <ul style={{ padding: 0, listStyle: 'none', marginBottom: '1rem' }}>
            <li style={{ marginBottom: '0.5rem' }}>
              <Link to="/projects" style={{ textDecoration: 'none', color: '#111' }}>
                Tinker, Build, Repeat: Projects I've built
              </Link>
            </li>
            <li style={{ marginBottom: '0.5rem' }}>
              <Link to="/exceptional-talent" style={{ textDecoration: 'none', color: '#111' }}>
                Exceptional Talent → Self-Starter: Henna with a Heart
              </Link>
            </li>
            <li style={{ marginBottom: '0.5rem' }}>
              <Link to="/internships" style={{ textDecoration: 'none', color: '#111' }}>
                Learning by Doing: Internships that make me PM Ready
              </Link>
            </li>
            <li style={{ marginBottom: '0.5rem' }}>
              <Link to="/leadership" style={{ textDecoration: 'none', color: '#111' }}>
                Leading with Empathy: Lessons from my role as an RA
              </Link>
            </li>
            <li style={{ marginBottom: '0.5rem' }}>
              <Link to="https://anoushkabhat13.medium.com/" style={{ textDecoration: 'none', color: '#111' }}>
                Anoushka's Medium Articles
              </Link>
            </li>
          </ul>
        </div>
        <div style={{ marginTop: 'auto', fontWeight: 650, fontSize: '1.06rem' }}>Account</div>
      </aside>
    </>
  );
}

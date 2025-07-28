// src/Sidebar.js

import ExceptionalTalent from "./exceptionalTalent";
import Projects from "./projects";
import Leadership from "./leadership";
import discoverImage from "./perplexity_discover.png"
import { Link } from 'react-router-dom';

const sidebarStyles = {
    width: '245px',
    padding: '2rem 1rem',
    background: '#fafaf9',
    borderRight: '1px solid #e4e4e7',
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
    position: 'fixed',
    left: 0,
    top: 0,
  };
  
  export default function Sidebar() {
    return (
      <aside style={sidebarStyles}>
        <div style={{marginBottom: '2.5rem', fontWeight: 700, fontSize: '1.3rem'}}>Home</div>
        <div style={{marginTop: '2.5rem',marginBottom: '1rem'}}>
        <Link to="/discover" style={{ textDecoration: 'none', color: '#111' }}>
          <img
              src={discoverImage}
              alt="discover"
              style={{ width: '50px', borderRadius: '50%', marginBottom: '0.5rem' }}
              
          />
        </Link>
          <div style={{fontWeight: 600, fontSize: '1.1rem', marginBottom: '1rem'}}>
            <Link to="/discover" style={{ textDecoration: 'none', color: '#111' }}>
              Discover Anoushka
            </Link>
          </div>
          <ul style={{padding: 0, listStyle: 'none', marginBottom: '1rem'}}>     
            

            <li style={{ marginBottom: '0.5rem' }}>
                <Link to="/projects" style={{ textDecoration: 'none', color: '#111' }}>
                Tinker, Build, Repeat: Projects I've built
                </Link>
            </li>

            <li style={{ marginBottom: '0.5rem' }}>
                <Link to="/exceptional-talent" style={{ textDecoration: 'none', color: '#111' }}>
                Exception Talent → Self-Starter: Henna with a Heart
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
        <div style={{marginTop: 'auto', fontWeight: 650, fontSize: '1.06rem'}}>Account</div>
      </aside>
    );
  }
  
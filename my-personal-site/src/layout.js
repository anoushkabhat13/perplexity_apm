import Sidebar from './sidebar';
import { useState, useEffect } from 'react';

export default function Layout({ children }) {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [sidebarOpen, setSidebarOpen] = useState(window.innerWidth > 768);

  useEffect(() => {
    const handleResize = () => {
      const isNowMobile = window.innerWidth <= 768;
      setIsMobile(isNowMobile);
      setSidebarOpen(!isNowMobile);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const sidebarWidth = sidebarOpen ? 180 : 0;

  return (
    <div style={{ display: 'flex', minHeight: '100vh' }}>
      <Sidebar isOpen={sidebarOpen} setIsOpen={setSidebarOpen} />
      <main
        style={{
          flex: 1,
          padding: '2rem',
          marginLeft: !isMobile && sidebarOpen ? '180px' : '0',
          transition: 'margin-left 0.3s ease',
          width: '100%',
        }}
      >
        {children}
      </main>
    </div>
  );
}

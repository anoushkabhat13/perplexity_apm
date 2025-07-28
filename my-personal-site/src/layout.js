import Sidebar from './sidebar';
const layoutStyles = {
    display: 'flex',
    minHeight: '100vh',
    background: '#FAFAF9', // similar to Perplexity
  };
const mainStyles = {
    flex: 1,
    marginLeft: '245px', // width matches Sidebar
    padding: '2.5rem 2rem',
};   
  
export default function Layout({ children }) {
    return (
      <div style={{ display: 'flex' }}>
        <Sidebar />
        <main style={{ marginLeft: '245px', padding: '2rem', width: '100%' }}>
          {children}
        </main>
      </div>
    );
  }
  
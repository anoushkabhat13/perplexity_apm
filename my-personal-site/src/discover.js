import Layout from "./layout";
import { Link } from 'react-router-dom';

export default function Discover() {
  return (
    <Layout>
      <div style={styles.page}>
        <h1 style={styles.heading}>Discover</h1>
        <div style={styles.grid}>
          {articles.map((article) => (
            <Link to={article.link} key={article.title} style={{ textDecoration: 'none', color: 'inherit' }}>
                <div style={styles.card}>
                <img src={article.image} alt={article.title} style={styles.image} />
                <div style={styles.cardContent}>
                    <h2 style={styles.title}>{article.title}</h2>
                    <p style={styles.description}>{article.description}</p>
                </div>
                </div>
          </Link>
          
          ))}
        </div>
      </div>
    </Layout>
  );
}

const articles = [
  
  {
    title: "Tinker, Build, Repeat: Projects I've built",
    description: "Anoushka's always building something new, finding solutions to problems big and small.",
    image: "/images/meetmeinthemiddle.png",
    link: "/projects",
  },

  {
    title: "Exception Talent → Self-Starter: Henna with a Heart",
    description: "Deep dive into how Anoushka transformed her talent in henna art into one of the most successful creative clubs at UCLA.",
    image: "/images/henna.png",
    link: "/exceptional-talent",
  },
  
  {
    title: "Learning by Doing: Internships that make me PM Ready",
    description: "From biotech to big tech, the internships that shaped my PM mindset and love for building.",
    image: "/images/internships.png",
    link: "/internships",
  },
  {
    title: "Leading with Empathy: Lessons from my role as an RA",
    description: "A series of life lessons learned from being a Resident Assistant at UCLA.",
    image: "/images/reslife.jpg",
    link: "/leadership",
  },

  {
    title: "Anoushka's Medium Articles",
    description: "A collection of Anoushka's articles on Medium, covering a range of topics from tech to personal growth.",
    image: "/images/medium.png",
    link: "https://anoushkabhat13.medium.com/", // replace with your actual Medium profile URL
  },
  
  
];

const styles = {
  page: {
    padding: '3rem',
    fontFamily: 'sans-serif',
    backgroundColor: '#fefefe',
  },
  heading: {
    fontSize: '2rem',
    fontWeight: 700,
    marginBottom: '2rem',
    textAlign: 'center',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    gap: '2rem',
  },
  card: {
    borderRadius: '8px',
    overflow: 'hidden',
    backgroundColor: '#fff',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
    cursor: 'pointer',
    transition: 'transform 0.2s ease',
  },
  cardContent: {
    padding: '1rem',
  },
  image: {
    width: '100%',
    height: '180px',
    objectFit: 'cover',
  },
  title: {
    fontSize: '1.2rem',
    fontWeight: 600,
    margin: '0.5rem 0',
  },
  description: {
    fontSize: '0.95rem',
    color: '#555',
  },
};

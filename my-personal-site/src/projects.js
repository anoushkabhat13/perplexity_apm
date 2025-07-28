import Layout from "./layout";



export default function Projects() {
  return (
    <Layout>
      <div style={styles.page}>
        <div style={styles.content}>
          <h1 style={styles.title}>Tinker, Build, Repeat: Projects I've built</h1>
          <p style={styles.summary}>
            Anoushka's always building something new, finding solutions to problems big and small.
          </p>

          <div style={styles.meta}>
            <span>Curated by Anoushka</span> · 
            <span> 3 min read</span> · 
            <span> Published July 22, 2025</span>
          </div>

          <div style={styles.projectSection}>
            <h2 style={styles.projectTitle}>Meet me in the Middle</h2>
            <p>
              Anoushka's always been the friend who brings people together. She created an app that allows users to specify two locations, along with a query for a meeting spot (like a restaurant, nail salon, etc). The app outputs a list of spots nearest to the midpoint.
            </p>
            <p><strong>Tech Stack + API's:</strong></p>
            <ul>
              <li>Built with Next.js</li>
              <li>Used Google Maps APIs, specifically the Places API autocomplete and nearby search features</li>
              <li>Implemented the Haversine formula to calculate distance between two points and find midpoint</li>
            </ul>
            <p> 
              <a
                href="https://youtu.be/QxiteJEGico"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: '#0077cc', textDecoration: 'underline' }}
              >
                See the demo here: Release Upcoming!!
              </a> 
            </p>
          </div>

          <div style={styles.projectSection}>
            <h2 style={styles.projectTitle}>BruinConnect</h2>
            <p>
              True to its name, this Full Stack React web app connects Bruins to events happening on campus. Users can:
            </p>
            <ul>
              <li>Upload events</li>
              <li>Like the events they plan to attend</li>
              <li>Filter events by type</li>
              <li>See which events their friends are going to</li>
            </ul>
            
            <p>
              Anoushka contributed to the frontend development as well as acted as the PM of the app.
            </p>
            <p> 
              <a
                href="https://youtu.be/NCozV5VEP_8"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: '#0077cc', textDecoration: 'underline' }}
              >
                See the demo video here
              </a> 
            </p>
          </div>


          <div style={styles.projectSection}>
            <h2 style={styles.projectTitle}>QueerClinique</h2>
            <p>
              Anoushka's passion for healthcare and technology led her to create QueerClinique, a web app that connects marginalized individuals with ongoing clinical trials to help increase their representation in clinical research. She won third place in the Healthcare Equity Track during the UCLA QueerHacks hackathon.
            </p>
            <p> 
              <a
                href="https://youtu.be/yDdyP-r6xgs"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: '#0077cc', textDecoration: 'underline' }}
              >
                Demo video
              </a> 
            </p>
          </div>

        </div>
      </div>

      
    </Layout>
  );
}



const styles = {
  page: {
    display: 'flex',
    padding: '3rem',
    fontFamily: 'sans-serif',
    background: '#fefefe',
    color: '#111',
  },
  highlightBox: {
    backgroundColor: '#f0f0f0', // light gray
    padding: '1.5rem',
    borderRadius: '8px',
    marginBottom: '2rem',
  },
  content: {
    flex: 3,
    maxWidth: '800px',
    paddingRight: '2rem',
  },
  title: {
    fontSize: '2rem',
    fontWeight: 700,
    marginBottom: '1rem',
  },
  summary: {
    fontSize: '1.1rem',
    color: '#444',
    marginBottom: '1.5rem',
  },
  meta: {
    fontSize: '0.9rem',
    color: '#777',
    marginBottom: '2rem',
  },
  projectSection: {
    backgroundColor: '#f7f7f7',
    padding: '1.5rem',
    borderRadius: '6px',
    marginBottom: '2rem',
    lineHeight: 1.5,
  },
  projectSectionAlt: {
    backgroundColor: '#ebebeb',
    padding: '1.5rem',
    borderRadius: '6px',
    marginBottom: '2rem',
  },
  projectTitle: {
    fontSize: '1.3rem',
    fontWeight: 600,
    marginBottom: '1rem',
  },
  sidebar: {
    flex: 1,
    background: '#fafaf9',
    padding: '1.5rem',
    borderLeft: '1px solid #e4e4e7',
    height: 'fit-content',
  },
  sidebarTitle: {
    fontWeight: 600,
    fontSize: '1.1rem',
    marginBottom: '1rem',
  },
  sidebarList: {
    listStyle: 'none',
    paddingLeft: 0,
    lineHeight: '1.8rem',
  },
};

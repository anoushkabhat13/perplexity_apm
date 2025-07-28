import Layout from "./layout";


export default function Internships() {
  return (
    <Layout>
      <div style={styles.page}>
        <div style={styles.content}>
          <h1 style={styles.title}>Learning by Doing: Internships that make me Perplexity PM Ready</h1>
          <p style={styles.summary}>
            
          </p>

          <div style={styles.meta}>
            <span>Curated by Anoushka</span> · 
            <span> 3 min read</span> · 
            <span> Published July 22, 2025</span>
          </div>

          <div style={styles.projectSection}>
            <h2 style={styles.projectTitle}>IBM AI Brand Technical Specialist Intern</h2>
            <p>
            As a Brand Technical Specialist, I was responsible for thoroughly understanding IBM's WatsonxAI product and implementing AI solutions for different clients. My role involved learning client pain points when speaking to energy industry clients, speaking to engineers within IBM, and building out a demo integrating my client's day-to-day data with WatsonxAI. I also closely worked with the PM of WatsonxAI with suggestions on how to improve the platform. I used my creative skills to build a new marketing sales play. I created a video with voiceovers on the capabilities of WatsonxAI that was widely shared with clients in the energy industry, which continued bringing in revenue long after my internship was over.
            </p>
          </div>

          <div style={styles.projectSection}>
            <h2 style={styles.projectTitle}>Amazon & Slalom Build 5 week Accelerator: Building for the Olympics</h2>
            <p>
            I was selected to join a 5-week accelerator program hosted by Amazon and Slalom Build, where I collaborated with a team of four to design and prototype an app that helps aspiring athletes connect with Olympic athletes in a more personal and engaging way. The app matched users with athletes based on shared interests or backgrounds, shared engaging fun facts about athletes, and let users follow and root for specific competitors. Throughout the program, I worked closely across design, engineering, and strategy, helping to scope the product vision, prioritize features, and iterate quickly based on user feedback. I learned how to turn abstract ideas into structured, user-centered experiences, and how to balance creative thinking with execution under real constraints.
            This experience reinforced my excitement for product management, and where I fell in love with quick moving projects and the startup culture. 
            </p>
          </div>

          <div style={styles.projectSection}>
            <h2 style={styles.projectTitle}>Mount Sinai Health Biological Data Science Intern</h2>
            <p>
            As a Biological Data Science Intern, I worked with large-scale RNA sequencing data to develop a machine learning algorithm that could distinguish between treatment-resistant depression (those who do not respons to anti-depressants) and non-TRD patients. This experience taught me how to build solutions that are not just technically sound but also deeply impactful for the people they serve. It pushed me to think critically about how data can be translated into meaningful outcomes and how product decisions must be grounded in real human needs
            </p>
          </div>

          <div style={styles.projectSection}>
            <h2 style={styles.projectTitle}>Children's Hospital of Orange County Innovation Intern </h2>
            <p>
             Through shadowing doctors, nurses, and other staff, I learned about the challenges they face in delivering care. I found a specific pain point - obstructive sleep apnea- and developed a concept for a device that uses neuromodulation to help mitigate sleep apnea. I was selected as one of the few interns to present my concept at Grand Rounds, in front of the entire hospital system. I learned a lot about innovating with the patient in mind, and that innovation is not very linear, but nonetheless rewarding.
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

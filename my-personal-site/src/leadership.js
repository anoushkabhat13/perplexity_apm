
import Layout from "./layout";

export default function ExceptionalTalent() {
    return (
      <Layout>
      <div style={styles.page}>
        <div style={styles.content}>
          <h1 style={styles.title}>Leading with Empathy: Lessons from My Role as a Resident Assistant (RA)</h1>
          <p style={styles.summary}>
            
            
          </p>
  
          <div style={styles.meta}>
            <span>Curated by Anoushka</span> · 
            <span> 3 min read</span> · 
            <span> Published July 24, 2025</span>
          </div>
  
          <div style={styles.body}>
            <p>
            Over the past two years, I was the RA for a floor of 93+ residents, acting as their main point of contact for everything from day-to-day questions to serious issues around safety, mental health, and academics. I planned and led programs focused on building community, adjusting to college life, and connecting residents with campus resources, including art therapy events, sustainability workshops, and course planning nights. I was also on overnight duty twice a week, which meant responding to incidents, checking in on residents, and making sure the building was secure. Here are some lessons I learned from my time as an RA:
            </p>
         
            <ul style={styles.lessonList}>
                <li style={styles.lessonItem}>
                    <strong>Communication is KEY.</strong> The first thing I asked residents during conflict meetings is if they have attempted to talk the issue out themselves. People are naturally afraid to initiate an uncomfortable conversation. I always say an uncomfortable conversation now is better than an uncomfortable living situation later. 
                </li>

                <li style={styles.lessonItem}>
                    <strong>You don't have to love your roommates, but you have to respect each other.</strong> I had amazing roommates my freshmen and sophomore year, and they became my closest friends in college. However, as an RA, I was faced with situations where my residents did not get along or felt unwanted in their own room. For these situations, I tried to set up a meeting where we would create a contract between two roommates and help them come to a compromise. Ultimately, I would stress that all the roommates were working toward the same goal: to make their dorm a comfortable place to live. I think this applies to situations like work or life as well: remembering that you're working toward the same goal can help you find common ground and create a more positive environment.
                </li>

                <li style={styles.lessonItem}>
                    <strong>Call for backup — you don't have to do things alone!</strong> There were times when I had incidents involving multiple people or serious situations that I was afraid to handle alone. I learned that it is okay to call for backup, whether that be your fellow RAs or the on-call staff. During my first year as an RA, I was often afraid to call for help because I felt like I should have already known how to handle every situation. The truth is, no one knows everything on their first rodeo — and that's okay. Eventually, I learned that requesting help is a sign of strength, not weakness.
                </li>

                <li style={styles.lessonItem}>
                    <strong>Always be willing to help and share knowledge.</strong> Whether it was new RAs or my freshmen residents who needed help with class scheduling, I was always there to lend a hand. Helping each other is how we grow, and I couldn't have gotten through college without the support of upperclassmen, mentors, and friends. Sharing knowledge was not only one of the most fulfilling aspects of my job, but also how the world runs and how we grow as a collective. I hope to continue this in my career as a PM, where I can help others grow and learn from my experiences.
                </li>
            </ul>
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
    body: {
      lineHeight: 1.7,
      fontSize: '1rem',
      color: '#222',
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
    lessonList: {
        paddingLeft: '2rem',  // Indents the whole bullet list
        marginBottom: '2rem',
    },
    lessonItem: {
        marginBottom: '1rem',
        fontSize: '1rem',
        lineHeight: 1.7,
        color: '#222',
    },
      
    sidebarList: {
      listStyle: 'none',
      paddingLeft: 0,
      lineHeight: '1.8rem',
    },
  }
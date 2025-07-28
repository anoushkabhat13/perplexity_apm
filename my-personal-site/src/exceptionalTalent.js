import Layout from "./layout";

export default function ExceptionalTalent() {
    return (
      <Layout>
      <div style={styles.page}>
        <div style={styles.content}>
          <h1 style={styles.title}>Exception Talent → Self-Starter: Henna with a Heart</h1>
          <p style={styles.summary}>
            A deep dive into how Anoushka transformed her talent in henna art into one of the most successful creative clubs at UCLA.
            
          </p>
  
          <div style={styles.meta}>
            <span>Curated by Anoushka</span> · 
            <span> 3 min read</span> · 
            <span> Published July 24, 2025</span>
          </div>
  
          <div style={styles.body}>
            <p>
              During my very first quarter at UCLA, with only hours left before the club application deadline, I took a leap of faith. I applied to form a club, Henna with a Heart, a passion project dedicated to building a space for students to learn the art of henna.
             
            </p>
  
            <p>
            I wasn’t sure I was qualified. I was a freshman. I had no idea what I was doing. But I pressed submit anyway.
            </p>
  
            
            <p>
              That first quarter, I skipped class to do henna on BruinWalk for 6+ hours (even though I had a chem midterm the next day!). Through that event, I met amazing people and built a board of 10. I made tutorial sheets for our weekly meetings, taught the basics, and (strongly encouraged) everyone to practice by doing henna for strangers. One of our biggest moments that year was collaborating with Rooted for their Mock Mehndi event. Our club did henna for over 100 attendees, and it felt like everything we’d built came to life.
            </p>

            <p>
              During my sophomore and junior year, we grew not just in size but in creativity. We focused on keeping things fresh, with events for both beginners and more experienced artists. Every quarter had a theme (my favorite: “Henna from Around the World”), where we explored global styles like Mauritanian henna with tape-resist techniques.
            </p>

            <p>
              As the club grew, I realized it wasn’t just about henna, but rather a space for comfort and connection. One international student once told me it reminded them of home. That moment really stayed with me.
            </p>

            <p>
              Fast forward to today: Henna with a Heart has collaborated with 80+ campus organizations — from cultural groups like EASA and ISU, to wellness initiatives like MannMukti at UCLA.
            </p>

            <p>
              We were even invited to UCLA First Thursdays to raise funds for LA wildfire relief. Along with supporting many other fundraising efforts, we used our proceeds to:
            </p>

            <p>
              - Gift $1,500 worth of goodie bags to UCLA Mattel Children's Hospital<br />
              - Contribute $500 in board games and food to City of Hope Hellford Hospital in collaboration with A Friend in Me<br />
              - Donate $1000 to Doctor's without Borders
            </p>

            <p>
            Starting Henna with a Heart taught me more than I could’ve imagined: leadership, problem-solving, and the value of building something that brings people joy. As an APM at Perplexity, I hope to bring my talents to spaces where I can inspire innovation, foster collaboration, and create meaningful impact through technology and community-driven projects.
            </p>

            <p>
              If you want to learn more, visit{' '}
              <a
                href="https://www.instagram.com/hennawithaheartatucla"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: '#0077cc', textDecoration: 'underline' }}
              >
                @hennawithaheartatucla
              </a>{' '}
              on Instagram!
            </p>

            <p>
              PS. I recently won the UCLA Class of 2025 Grad Cap Competition with a design that celebrates Henna with a Heart! You can see it on the{' '}
              <a
                href="https://alumni.ucla.edu/grad-cap-contest-winner-2025/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: '#0077cc', textDecoration: 'underline' }}
              >
                ucla alumni site
              </a>{' '}
              {' '}or the{' '}
              
              <a
                href="https://www.instagram.com/uclaalumni"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: '#0077cc', textDecoration: 'underline' }}
              >
                @uclaalumni
              </a>{' '}
               instagram page.
            </p>

            

          </div>
        </div>
        {/* Sidebar with images */}
        <div style={styles.sidebar}>
          <h2 style={styles.sidebarTitle}>Snapshots</h2>
          <div style={styles.sidebarImages}>
            <img src="/images/h1.png" alt="Henna 1" style={styles.sidebarImage} />
            <img src="/images/h2.jpeg" alt="Henna 2" style={styles.sidebarImage} />
            <img src="/images/h3.jpeg" alt="Henna 3" style={styles.sidebarImage} />
            <img src="/images/h4.png" alt="Henna 4" style={styles.sidebarImage} />
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
      flex: 1.3, // make it narrower
      background: '#fafaf9',
      padding: '1rem',
      borderLeft: '1px solid #e4e4e7',
      height: 'fit-content',
      display: 'flex',
      flexDirection: 'column', // stack images vertically
      alignItems: 'flex-start', // align images to the left
    },
    
    sidebarTitle: {
      fontWeight: 600,
      fontSize: '1.1rem',
      marginBottom: '1rem',
    },
    sidebarImage: {
      width: '100%',            // take full width of sidebar
      height: 'auto',           // maintain natural aspect ratio
      borderRadius: '0px',
      objectFit: 'contain',     // scale image to fit without cropping
      marginBottom: '1rem',
     
    },
    sidebarList: {
      listStyle: 'none',
      paddingLeft: 0,
      lineHeight: '1.8rem',
    },
  }
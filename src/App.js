import React from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
  }

  render() {
    const emails = [
      "waberg@cfl.rr.com",
      "will.berg@ufl.edu",
      "2023wbstorage1@gmail.com",
      "webmaster.aasu@gmail.com",
    ];
    const subject = "Advocacy Email";
    const senderName = "Will Berg";
    const senderDescription = "I am a second-year computer science major."
    const senderOrg = "AASU";
    const senderPosition = "Webmaster";
    const body = `To whomever it may concern,

    My name is ${senderName}. ${senderDescription} I am involved in ${senderOrg} here at the University of Florida. I am writing to you concerning the closure of the Center for Inclusion and Multicultural Engagement (CIME) on the second floor of the Reitz Union. More specifically, I would like to express my frustration at the closure of the Office of Asian Pacific Islander Desi Student Engagement (OAPIDSE), which provided significant support to the Asian Pacific Islander Desi (APID) community at the University of Florida.
    
    The CIME and OAPIDSE played a key role in building a community for APID students here at UF. The OAPIDSE provided a designated space for APID students to engage in activities that promoted community and student wellness, offering an opportunity for individuals to bond with others and destress in a welcoming environment. The OAPIDSE also allowed the coordination of events and celebrations focused on highlighting the importance of APID communities and their cultures. These events brought together students of all backgrounds, providing engaging opportunities for immersion in on-campus activities and student life. 
    
    By providing opportunities for multicultural events and the celebration of APID heritage, the OAPIDSE brought students from diverse backgrounds together to commemorate APID culture and history. In doing so, the OAPIDSE promoted student connections with one another, forging friendships and allowing for positive interactions that enhanced the lives of students on campus. The environment fostered by the OAPIDSE welcomed all UF students regardless of ethnicity or background, creating a more knowledgeable student body. Without the OAPIDSE, students throughout the university have notably less opportunities to engage with other cultures and participate in crucial learning experiences. This, combined with the loss of important opportunities to connect with other students, negatively impacts lives throughout UF.    
    
    In addition to these detrimental effects on students, the closure of the OAPIDSE goes against several of the Core Values upheld by UF, leaving the APID community at UF decisively unsupported. Without an on-campus space dedicated to honoring the enduring cultural legacy of APID students at UF, those who previously relied on its support are left without access to the crucial resources it provided. Despite the University of Florida’s commitment to the values of inclusion, community, and excellence, these principles are proven unfulfilled by the university’s dismissal of the needs of APID students. Without an office committed to supporting the university’s APID students, they are omitted from UF’s aspirations to be a top university, stripped of important tools given to other students to ensure their successes. This is in spite of the numerous contributions that APID students have made to the greater UF community throughout the university’s history, ranging from 
    
    The OAPIDSE stood for the excellence of APID individuals, representing the interests and achievements of these individuals throughout UF’s history and current student body. It championed the university’s core values of inclusion, community, and excellence, while sponsoring programs that highlighted the importance of a strong APID community. By doing so, the OAPIDSE significantly improved the lives of APID students throughout UF, as well as the well-being of others who chose to engage in these celebrations. Without the essential support this office provided, the APID community suffers from UF’s negligence in ensuring equal support for all its students. In spite of its goals to be among the country’s top academic institutions, by dissolving the OAPIDSE, the University of Florida violates its promise to provide students with the best resources for their success.   
    
    Thank you for taking the time to review these concerns on the closure of the Office of Asian Pacific Islander Desi Student Engagement and the Center for Inclusion and Multicultural Engagement. These issues are very important to me, and I believe that your office can play a substantial role in providing crucial resources for the Asian Pacific Islander Desi community at the University of Florida. I urge you to take concrete action in these matters to ensure that all students at UF are given the resources they need to succeed. If you wish to discuss this issue further, please don’t hesitate to contact (AASU official advocacy email).
    
    Thank you for all that you do for UF students. 
    
    Sincerely,
    
    ${senderName}
    ${senderPosition}
    ${senderOrg}
    `;

    const mailto = `
      mailto:${emails[0]}?subject=${subject}&bcc=${emails.slice(1).join(",")}
    `;

    return (
      <div className="App">
        <h1>ADVOCACY EMAIL SITE</h1>
        <h2>MESSAGE</h2>
        <p id="message">{body}</p>
        <button onClick={async () => {
          await window.navigator.clipboard.writeText(body);
        }}>Copy text</button>
        <p><a href={mailto} target="_blank">Click to open your email app!</a></p>
      </div>
    );
  }
}

export default App;

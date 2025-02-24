import React from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      senderName: "",
      senderDescription: "",
      senderOrg: "",
      senderPosition: "",
      senderExperience: "",
    }
  }

  changeName = (e) => {
    this.setState({senderName: e.target.value});
  }

  changeDescription = (e) => {
    this.setState({senderDescription: e.target.value});
  }

  changeOrg = (e) => {
    this.setState({senderOrg: e.target.value});
  }

  changePosition = (e) => {
    this.setState({senderPosition: e.target.value});
  }

  changeExperience = (e) => {
    this.setState({senderExperience: e.target.value});
  }

  render() {
    const { senderName, senderDescription, senderOrg, senderPosition, senderExperience } = this.state;

    const emails = [
      "ufbot@ufl.edu",
      "hbwhite@ufl.edu",
      "jtyger@ufl.edu",
      "president@ufl.edu",
      "richard.cole@csklegal.com",
      "sarahlynne@ufl.edu",
      "DOkeefe@shutts.com",
      "rpatel@kslaw.com",
      "fridley@foley.com",
      "patrick.zalupski@dreamfindershomes.com",
      "public-policy-events@ufl.edu",
      "eescoto@ufl.edu",
      "janet.glover@ufl.edu",
      "chris.summerl@ufl.edu",
      "jadcock@ufl.edu",
      "bedenfield@ufl.edu",
      "james.agan@ufl.edu",
      "shaun.boren@ufl.edu",
      "gbbryant@ufl.edu",
      "kathy123@ufl.edu",
      "albertcoker@ufl.edu",
      "collins.c@ufl.edu",
      "jdonnelly1031@ufl.edu",
      "jerome.scott@ufl.edu",
      "dbake94@ufl.edu",
      "jacquelinenphill@ufl.edu",
      "cabdullah@ufl.edu",
      "claytongaulding@ufl.edu",
      "michelle.marino@ufl.edu",
      "kurtdudas@ufl.edu ",
      "ryanf@ufl.edu",
      "mark.kaplan@ufl.edu",
      "sfo@ufl.edu"
      ]
    const subject = "UF Student Life Concerns Over Diversity, Equity, and Inclusion";
    const body = `To whomever it may concern,

My name is ${senderName ? senderName : "[YOUR NAME]"}. ${senderDescription ? senderDescription : "[YOUR DESCRIPTION]"} I am involved in ${senderOrg ? senderOrg : "[YOUR ORGANIZATION]"} at the University of Florida. I am writing to you concerning the closure of the Center for Inclusion and Multicultural Engagement (CIME) on the second floor of the Reitz Union. More specifically, I would like to express my frustration at the closure of the Office of Asian Pacific Islander Desi Student Engagement (OAPIDSE), which provided significant support to the Asian Pacific Islander Desi (APID) community at the University of Florida.

The CIME and OAPIDSE played a key role in building a community for APID students here at UF. By providing opportunities for multicultural events and the celebration of APID heritage, the OAPIDSE brought students from diverse backgrounds together to commemorate APID culture and history. In doing so, the OAPIDSE promoted student connections, forging friendships and allowing for positive interactions that enhanced the lives of students on campus. Without the OAPIDSE, students throughout the university have notably less opportunities to engage with other cultures and participate in crucial learning experiences. This, combined with the loss of various multicultural initiatives at UF, negatively impacts student life throughout UF. The OAPIDSE stood for the excellence of APID individuals, representing the interests and achievements of these individuals throughout UF’s history and current student body. It championed the university’s core values of inclusion, community, and excellence, while sponsoring programs that highlighted the importance of a strong APID community. As a result, the OAPIDSE significantly improved the lives of APID students throughout UF, as well as the well-being of others who engaged in these celebrations. Without the essential support this office provided, the APID community suffers from UF’s negligence in ensuring equal support for all its students. In spite of its goals to be among the country’s top academic institutions, by dissolving the OAPIDSE, the University of Florida violates its promise to provide students with the best resources for their success. 
${senderExperience ? ('\nDuring my time as a student at the University of Florida, the OAPIDSE greatly enhanced my experiences through its measures to promote community and inclusivity. ' + senderExperience + ' For these reasons, the significance of the OAPIDSE to my success at UF cannot be understated.\n') : ""}
Thank you for taking the time to review these concerns on the closure of the OAPIDSE and CIME. This issue is very important to me, and I believe that your office can play a substantial role in providing crucial resources for the Asian Pacific Islander Desi community at the University of Florida. I urge you to take concrete action in these matters to ensure that all students at UF are given the resources they need to succeed. If you wish to discuss this issue further, please don’t hesitate to contact ufaasu.advocacy@gmail.com or vpe.aasu@gmail.com. We will continue to advocate for the issues addressed in this email, as well as any future developments, to promote and protect the APID community at UF.

Thank you for all that you do for UF students. 

Sincerely,

${senderName ? senderName : "[YOUR NAME]"}${senderPosition ? "\n" + senderPosition : ""}
${senderOrg ? senderOrg : "[YOUR ORGANIZATION]"}
`;

    const mailto = `
      mailto:${emails[0]}?subject=${subject}&bcc=${emails.slice(1).join(",")}
    `;

    return (
      <div className="App">
        <h1>Help us place pressure on UF admin!</h1>
        <div className="steps">
          <h2>Steps:</h2>
          <p><b>1.</b> Fill in the boxes below with your information.</p>
          <div className="box">
            <input type="text" name="senderName" placeholder="Your Name" onChange={this.changeName}/>
            <p className="example">e.g. John Smith</p>
          </div>
          <div className="box">
            <input type="text" name="senderDescription" placeholder="Your Description" onChange={this.changeDescription}/>
            <p className="example">e.g. I am a 2nd year computer science major.</p>
          </div>
          <div className="box">
            <input type="text" name="senderOrg" placeholder="The Organization You Represent" onChange={this.changeOrg}/>
            <p className="example">e.g. Filipino Student Association</p>
          </div>
          <div className="box">
            <input type="text" name="senderPosition" placeholder="Position Within Organization" onChange={this.changePosition}/>
            <p className="example">e.g. Treasurer (Optional)</p>
          </div>
          <div className="box" id="personalExperiences">
            <textarea type="text" id="senderExperience" name="senderExperience" placeholder="Personal Experiences With the OAPIDSE" onChange={this.changeExperience}/>
            <p className="example">(Optional)</p>
          </div>
          <p><b>2. TO USE YOUR DEFAULT EMAIL APP:</b> Click the button below to copy the body of the email.</p>
          <button onClick={async () => {
            await window.navigator.clipboard.writeText(body);
          }}>COPY BODY TEXT</button>
          <p>Next, click this link to create this email in your default email app. Paste the text from the clipboard into the body.</p>
          <a href={mailto}><button>OPEN EMAIL APP</button></a>
          <p><b>3. TO USE A DIFFERENT EMAIL APP:</b> Click each of these buttons to copy every field of the email you create. Paste into all four fields.</p>
          <button onClick={async () => {
            await window.navigator.clipboard.writeText(emails[0]);
          }}>COPY RECIPIENTS</button>
          <p></p>
          <button onClick={async () => {
            await window.navigator.clipboard.writeText(emails.slice(1).join(","));
          }}>COPY BCC's</button>
          <p></p>
          <button onClick={async () => {
            await window.navigator.clipboard.writeText(subject);
          }}>COPY SUBJECT</button>
          <p></p>
          <button onClick={async () => {
            await window.navigator.clipboard.writeText(body);
          }}>COPY BODY TEXT</button>
          <p><b>4.</b> Make any personal changes to the email that you would like to make before sending.</p>
        </div>
        <h2>Your message:</h2>
        <p id="message">{body}</p>
      </div>
    );
  }
}

export default App;

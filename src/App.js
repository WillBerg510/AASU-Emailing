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

My name is ${senderName ? senderName : "[YOUR NAME]"}. ${senderDescription ? senderDescription : "[YOUR DESCRIPTION]"} I am involved in ${senderOrg ? senderOrg : "[YOUR ORGANIZATION]"} at the University of Florida. I am writing to you concerning the closure of the Center for Inclusion and Multicultural Engagement (CIME) on the second floor of the Reitz Union. More specifically, I would like to express my frustration at the closure of the Office of Asian Pacific Islander Desi Student Engagement (OAPIDSE), which was shut down overnight in Summer 2024 without any backup plan for protecting the space in spite of the support it provided to the Asian Pacific Islander Desi (APID) community at the University of Florida.

The CIME and OAPIDSE played a key role in building a community for APID students here at UF. By providing opportunities for multicultural events and the celebration of APID heritage, the OAPIDSE brought students from diverse backgrounds together to commemorate APID culture and history. From their early arrival programs that helped incoming freshmen adjust to college life to their special graduation ceremonies for seniors who had given back to their respective communities, CIME and the OAPIDSE enhanced students’ lives for the entire duration of their time at UF. OAPIDSE provided students in the APID community and beyond with a safe space to uniquely be themselves and forge lasting friendships and mentorships. Furthermore, by housing tokens of the UF APID community’s accomplishments and contributions to the greater UF community (such as their signature events with massive audiences), the OAPIDSE stood for the excellence of APID students at UF, past and present.
${senderExperience ? ('\nDuring my time as a student at the University of Florida, the OAPIDSE greatly enhanced my experiences through its measures to promote community and inclusivity. ' + senderExperience + ' For these reasons, the significance of the OAPIDSE to my success at UF cannot be understated.\n') : ""}
Without the essential support this office provided, the APID community suffers from UF’s negligence in ensuring equal support for all its students. The closure of CIME overnight without warning also sets a dangerous precedent in terms of UF’s transparency with the student body about such decisions affecting student life. As a result, we urge you and your office to take concrete action in these matters. We ask for transparency about ongoing changes regarding the state of diversity, equity, and inclusion initiatives on campus. We desire open communication to ensure that no UF student is left in the dark. And we want as many measures as possible to be taken to preserve the community that we cherish so deeply.

If you wish to discuss this issue further, please don’t hesitate to contact ufaasu.advocacy@gmail.com or vpe.aasu@gmail.com. We will continue to advocate for the issues addressed in this email, as well as any future developments, to promote and protect the APID community at UF.

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

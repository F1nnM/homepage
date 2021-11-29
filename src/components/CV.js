import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import styles from './CV.module.css'

const data = [
  {
    title: "Education",
    entries: [
      {
        date: "2011-2019",
        description: "Ruperti-Gymnasium Mühldorf (scientific-technological branch)"
      },
      {
        date: "2019",
        description: "Graduation: Abitur"
      },
      {
        date: "2019-2022",
        description: "Dual bachelor's studies Information Technology at DHBW Heidenheim"
      }
    ]
  },
  {
    title: "Experience",
    entries: [
      {
        date: "2014-2018",
        description: "Student-tutor for assisting younger students in scientific subjects"
      },
      {
        date: "2016",
        description: "Internship as IT Specialist at Gummiwerk KRAIBURG GmbH & Co. KG"
      },
      {
        date: "2016",
        description: "Participant in the Cyber-Security-Camp at Airbus Defence& Space"
      },
      {
        date: "2018",
        description: "Internship Computer Science at Wacker Chemie AG"
      },
      {
        date: "2019-2022",
        description: "Software developer at Wacker Chemie AG, as part of dual studies"
      },
    ]
  },
  {
    title: "Achievements",
    entries: [
      {
        date: "2011-2016",
        description: "Regular participation at the Maths-Olympics with very good results"
      },
      {
        date: "2014",
        description: "3. Price in the category Maths/CompSci at Jugend Forscht"
      },
      {
        date: "2016",
        description: "2. Price at the Bundeswettbewerb Informatik"
      },
      {
        date: "2017",
        description: "3. Price at the Bundeswettbewerb Informatik"
      },
    ]
  },
  {
    title: "Skills",
    entries: [
      {
        description: "German (native)"
      },
      {
        description: "English (fluent)"
      },
      {
        description: "Web-Development using plain HTML/CSS/JS aswell as frameworks like React.js, or Vue"
      },
      {
        description: "Server-side development using Python, Java and Node.js"
      },
      {
        description: "Java for Desktop-clients and Android apps"
      },
      {
        description: "Containerization using Docker and Kubernetes"
      },
      {
        description: "Linux for Desktop and Server use"
      },
      {
        description: "Moderate experience with Cyber-Security / Forensics"
      },
      {
        description: "Moderate experience with SQL, PHP, C, C++, C#, ABAP, Alteryx, Tableau"
      },
    ]
  }
]


function CV() {

  const downloadCv = () => {
    let link = document.createElement("a"); //create 'a' element
    link.setAttribute("href", "./FinnMelzerResume.pdf"); //replace "file" with link to file you want to download
    link.setAttribute("download", "FinnMelzerResume.pdf");// replace "file" here too
    link.click(); //virtually click <a> element to initiate download
  }

  return (
    <div className="d-flex flex-column overflow-auto h-100 py-5">
      {data.map(section => (
        <section className=" mt-4">
          <h1>{section.title}</h1>
          {(section.entries[0].date) ? (
            <table className={styles.table}>
              <tbody>
                {section.entries.map(entry => (
                  <tr>
                    <td className={styles.date}>{entry.date}</td>
                    <td className={styles.description}>{entry.description}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <ul className={styles.skills}>
              {section.entries.map(entry => (
                <li className={styles.skillEntries}>{entry.description}</li>
              ))}
            </ul>
          )}

        </section>
      ))}
      <section>
        <h1>Notable Projects</h1>
        <p>
          See <Link to="/work">Work</Link>.
        </p>
      </section>
      <section>
        <h1>Download</h1>
        <Button onClick={downloadCv}>Download CV as .pdf</Button>
      </section>
    </div>
  )
}

export default CV;
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function Home() {
  return (
    <>
      <Container>
        <Row>
          <Col sm>
            <h1>Summary</h1>
            <div>
              Data, Decisions, and Learning Executive Drive, Results-Oriented,
              Reliable
            </div>
          </Col>
          <Col sm>
            <div>
              I am a Data Scientist and Data Engineer with experience in
              statistical analytics in cloud and local environments with notable
              skills in Python, R, SAS, SQL, and Tableau. I have constructed
              pipelines for customer data to populate a database to improve
              cross-functional data access for analytics. Broadly, my industry
              data science experience covers process science, and product and
              manufacturing analysis in the FinTech, Logistics and Shipping
              Services, and Automobile industries.
            </div>
          </Col>
        </Row>
      </Container>
      <Container>
        <div className="body-background"></div>
        <Row>
          <Col sm>
            <h1>Research Spotlight</h1>
            <a
              href="https://scholar.smu.edu/datasciencereview/vol6/iss2/17/"
              target="_blank"
            >
              <body-button variant="outline-primary">
                See the Article
              </body-button>{" "}
            </a>
            <div className="body-background"></div>
          </Col>
          <Col sm>
            <div>
              Deep Learning for Online Fashion: A Novel Solution for the Retail
              E-Commerce Industry. The online shopping experience for clothing
              can be further enhanced by implementing Deep Learning techniques,
              such as Computer Vision and personalized recommendation systems.
              Automation, as a principle, can be applied to solving problems
              surrounding efficacy, efficiency, and security. It also provides a
              layer of abstraction for the user during the online shopping
              experience. This research aims to apply Deep Learning methods and
              principles of automation to augment the e-commerce fashion market
              in a novel way. After using these methods, it was found that
              Convolutional Autoencoders and Item-to-Item Based Recommenders may
              be used to accurately and precisely recommend articles of clothing
              based on a users’ styling preferences.
            </div>
          </Col>
        </Row>
      </Container>
      <Container>
        <div className="body-background"></div>
        <Col sm>
          <h1>Professional High Level Overview</h1>
          <a href="https://www.overleaf.com/read/vdwzyqmwhcjc" target="_blank">
            <body-button variant="outline-primary">See my Resume</body-button>{" "}
          </a>
        </Col>
        <Row>
          <div className="body-background"></div>
          <Col sm>
            <div>Education</div>
            <div>
              <ul>
                <li>
                  M.S. in Data Science: GPA: 3.9 Southern Methodist University
                </li>
                <li>
                  B.A. in Political Science: GPA: 3.7 | Cum Laude Honors Texas
                  Tech University
                </li>
              </ul>
            </div>
          </Col>
          <Col sm>
            <div>Technical Skills</div>
            <div>
              <ul>
                <li>
                  Programming: Python, R, Java, SQL and NoSQL (Oracle, SQL
                  Server, PostgresQL, MongoDB, GraphQL), C/C++
                </li>
                <li>
                  Packages: NumPy, Spark, Pandas/Polars, PyTorch, Tensorflow,
                  SciKit-Learn, Matplotlib, Requests
                </li>
                <li>
                  Tools and Technologies: VSCode, RStudio, Github, AWS, GCP,
                  Docker, Kubernetes, PowerBI, Tableau, Jira
                </li>
                <li>
                  Machine Learning, Deep Learning, Reinforcement Learning:
                  please see my repo
                  <code> turbo-barnacle</code>, for examples of my work.
                </li>
              </ul>
            </div>
          </Col>
          <Col sm>
            <div>Professional Experience</div>
            <div>
              <ul>
                <li>
                  Worldwide Express: Process Engineer II | May 2023 - Present{" "}
                </li>
                <li>
                  Evolv Consulting (Multiple Client Placements): Data Science
                  and Data Engineering Consultant | June 2021 - May 2023{" "}
                </li>
                <li>
                  EPSoft Technologies: Director of Data Science, Research and
                  Development | December 2019 - June 2021
                </li>
                <li>
                  Kaplan: LSAT Prep Instructor | August 2018 - January 2021
                </li>
                <li>
                  U.S. House of Representatives: Statistician, Intern | January
                  2013 - January 2016
                </li>
              </ul>
            </div>
          </Col>
          <Col sm>
            <div>Awards</div>
            <div>
              <ul>
                <li>
                  Evolv Consulting: May 2022: Cloud Computing Award for
                  Excellent Performance{" "}
                </li>
              </ul>
            </div>
          </Col>
          <Col sm>
            <div>Publications</div>
            <div>
              <ul>
                <li>
                  Harris, Zachary O.; Katta, Gowtham G.; Slater, Robert; and
                  Woodall, Joseph L. IV (2022) "Deep Learning for Online
                  Fashion: A Novel Solution for the Retail E-Commerce Industry,"
                  SMU Data Science Review: Vol. 6: No. 2, Article 17. Available
                  at: https://scholar.smu.edu/datasciencereview/vol6/iss2/17
                </li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
      <div className="body-background"></div>
    </>
  );
}

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function GithubRepositories() {
  return (
    <>
      <Container>
        <Row>
          <h1>Github Repositories</h1>
        </Row>
        <Row>
          <h2>High Level Overview of Highlights</h2>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col xs={6} md={6}>
            <h3>Turbo Barnacle</h3>
            <body-button variant="outline-primary" href="">
              See the Repo
            </body-button>{" "}
          </Col>
          <Col xs={6} md={4}>
            <div>
              A simple, reproducible, and personal library I am continuously
              adding to. The library mainly consists of Data Science and Data
              Engineering related code. Please feel free to fork and add too!
              All tools are stored in <code>src/.</code>No, the repo's name does
              not have a secret hidden meaning.
            </div>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col xs={6} md={4}>
            <h3>Capstone</h3>
            <body-button variant="outline-primary" href="">
              See the Repo
            </body-button>{" "}
          </Col>
          <Col xs={6} md={4}>
            <div>
              This repo serves as the container for the code we developed for
              our Capstone project, "Deep Learning for Online Fashion: A Novel
              Solution for the Retail E-Commerce Industry". Keep in mind, this
              repo is a little unorganized, but you can find the majority of the
              important code in <code>src/main/</code> where you may find our{" "}
              <code>recommender/</code> and <code>stylist/</code> directories. A
              detailed explaination of the architecture of our capstone project
              may be found in the README of the repository! TLDR; It can
              recommend a complete outfit based on an input image using
              convolutional autoencoders and collaborative filtering.
            </div>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col xs={6} md={4}>
            <h3>Reinforcement Learning</h3>
            <body-button variant="outline-primary" href="">
              See the Repo
            </body-button>{" "}
          </Col>
          <Col xs={6} md={4}>
            <div>
              I am very interested in Reinforcement Learning (RL). I completed a
              project on the application of RL in surgical settings in the
              medical field while completing my M.S. in Data Science, and became
              infatuated by the topic. I still am interested, dont get me wrong,
              but RL's pros do not outweigh the cons in current research. So, I
              am haulting any effort in producing any meaningful, tangible code
              until I can learn how to overcome the following: Balance
              reinforcement as to avoid overload, which could weaken systems in
              enterprise architecture Apply a complex RL architecture to simple
              problems. Create synthetically generated sample data to mitigate
              RL's data hunger and computational cost. Position an RL
              architecture in a way that requires relatively less maintenance
              cost.
            </div>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col xs={6} md={4}>
            <h3>EPS Estimate Revision Momentum Modelling</h3>
            <body-button variant="outline-primary" href="">
              See the Repo
            </body-button>{" "}
          </Col>
          <Col xs={6} md={4}>
            <div>
              One of my colleagues and I decided to apply a variety of ML
              Classifiers and Regressors to a corpus of financial data. We
              looked at how to model earnings estimates from various
              perspectives of a multitude of stocks
              <i>
                (yes, it's a stocks prediction project, but hang with me here)
              </i>
              . We wanted to understand the following: Assessing the power of
              our data on predicting stock price performance. Understand which
              combination of features with a variety of response variables were
              important in establishing an estimated target stock price. Compare
              our EPS prediction and compare growth potential across a universe
              of stocks, and how our models compared to a human's assessment on
              the same stocks. Based on the findings of the previous bullet
              point, provide organizational clarity for enterprise users (like a
              team of financial analysts) on which stocks to focus to gain more
              insights on additional financial metrics.
            </div>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col xs={6} md={4}>
            <h3>MERN Template</h3>
            <body-button variant="outline-primary" href="">
              See the Repo
            </body-button>{" "}
          </Col>
          <Col xs={6} md={4}>
            <div>
              I'm also very interested in full-stack development. So much so
              that I spent several evenings teaching myself how to develop a
              full stack architecture. I eventually decided on a popular
              architecture called MERN
              <i>(MongoDB, Express, React, Node.js)</i>, which I could develop
              myself- and everything works <i>(almost to my surprise)</i>. I
              would love to have a chance to work alongside full-stack
              developers, maybe even as one myself, but that's neither here nor
              there. I wanted to show this project off as a demonstration of my
              trainability, flexibility, and ability to rapidly deliver to
              market with an MVP (minimal viable product). If you or a friend
              are skilled full-stack developers, then please critique my work! I
              want to better my skill set, and I LOVE constructive feedback.
            </div>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col xs={6} md={4}>
            <h3>Web3 NFT Web App</h3>
            <body-button variant="outline-primary" href="">
              See the Repo
            </body-button>{" "}
          </Col>
          <Col xs={6} md={4}>
            <div>
              Yes, my interests also intersect with Web3. I have deep experience
              in blockchain, and wanted to teach myself more about Web3. So,
              following <i>(only some guides)</i>, I put together a project that
              will create and deploy an NFT collectible smart contract from
              scratch. I also gave the user the functionality to verify the
              contract and call functions on etherscan's page. This project lets
              users connect to their Metamask wallet to the web app, call a
              contract function, make a payment, and mint an NFT from the
              collection.
            </div>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col xs={6} md={4}>
            <h3>"Just the link, please"</h3>
            <body-button variant="outline-primary" href="">
              See the Repo
            </body-button>{" "}
          </Col>
          <Col xs={6} md={4}>
            <div>
              Ok ok fine, use the button below to go to my Github profile, where
              you can navigate on your own accord.
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}

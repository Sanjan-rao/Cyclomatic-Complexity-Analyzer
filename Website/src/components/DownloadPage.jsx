import React from "react";
import { Container, Row, Col, Button, Card } from "react-bootstrap";

const DownloadPage = () => {
  const handleDownload = () => {
    
    const fileUrl = "/cc-analyzer.deb";
    window.open(fileUrl, "_blank");
  };

  return (
    <Container className="my-5">
      <Row>
        <Col>
          <h1 className="text-center mb-4">Download cc-analyzer</h1>
          <Card className="shadow p-4">
            <Card.Body>
              <h2>About cc-analyzer</h2>
              <p>
                The <strong>cc-analyzer</strong> tool helps you measure the 
                cyclomatic complexity of your C++ programs. It provides insights 
                into your code's complexity, helping you improve its quality and 
                maintainability.
              </p>
              <h2>Features</h2>
              <ul>
                <li>Analyze cyclomatic complexity quickly and efficiently.</li>
                <li>Lightweight and easy to use.</li>
                <li>Built with advanced Clang plugin technology.</li>
              </ul>
              <h2>Download the Package</h2>
              <p>
                Click the button below to download the `.deb` package for 
                installing <strong>cc-analyzer</strong> on your Debian-based system.
              </p>
              <div className="text-center">
                <Button
                  variant="primary"
                  size="lg"
                  onClick={handleDownload}
                >
                <img
                    src="/linux-logo.svg"
                    height = "50px"
                    width = "40px"
                    alt="Linux Logo"
                    className="linux-logo me-2"
                />
                  Download cc-analyzer.deb
                </Button>
              </div>
              <h2 className="mt-4">Installation Instructions</h2>
              <p>Follow these steps to install the package:</p>
              <ol>
                <li>Download the `.deb` file using the button above.</li>
                <li>
                  Open your terminal and navigate to the directory containing 
                  the downloaded file.
                </li>
                <li>Run the following command:</li>
                <pre className="bg-light p-3 rounded">
                  {`sudo dpkg -i cc-analyzer.deb`}
                </pre>
                <li>
                  If there are missing dependencies, run:
                </li>
                <pre className="bg-light p-3 rounded">
                  {`sudo apt-get install -f`}
                </pre>
              </ol>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default DownloadPage;

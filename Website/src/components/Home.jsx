import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import {Link} from 'react-router-dom';

const HomePage = () => {
  return (
    <>
      <Container className="text-center mt-5">
        {/* Header Section */}
        <Row className="mb-4">
          <Col>
            <h1 className="display-4">Welcome to CC-Analyzer</h1>
            <p className="lead text-muted">
              Analyze your code's cyclomatic complexity with ease.
            </p>
          </Col>
        </Row>

        {/* About Section */}
        <Row className="align-items-center mb-5">
          <Col md={6}>
            <Image src="/complexity-chart.png" alt="Cyclomatic Complexity Chart" fluid />
          </Col>
          <Col md={6} className="text-md-start">
            <h2>What is Cyclomatic Complexity?</h2>
            <p>
              Cyclomatic complexity is a software metric that measures the
              complexity of a program's control flow. It helps in identifying
              code that is difficult to test and maintain. The lower the
              cyclomatic complexity, the better the code quality.
            </p>
            <Link to = "/cc-complexity">
            <Button variant="primary">
              Learn More
            </Button>
            </Link>
          </Col>
        </Row>

        {/* Download Section */}
        <Row className="text-center bg-light py-5">
          <Col>
            <h2>Download CC-Analyzer</h2>
            <p>
              Start analyzing your code's cyclomatic complexity today.
              Download the tool and enhance your code quality.
            </p>
            <Link to = "/download" >
            <Button variant="success" size="lg">
              Download Now
            </Button>
            </Link>
          </Col>
        </Row>

        {/* Footer */}
        <Row className="mt-5">
          <Col>
            <p className="text-muted">&copy; 2025 CC-Analyzer. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default HomePage;



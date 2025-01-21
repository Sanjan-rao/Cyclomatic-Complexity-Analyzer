import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

function CyclomaticComplexity() {
  return (
    <Container className="my-5">
      <Row>
        <Col>
          <h1 className="text-center mb-4">Cyclomatic Complexity</h1>
          <Card className="shadow p-4">
            <Card.Body>
              <h2>What is Cyclomatic Complexity?</h2>
              <p>
                Cyclomatic complexity is a software metric used to measure the 
                complexity of a program. It was developed by Thomas J. McCabe 
                in 1976. This metric is based on the control flow of the 
                program and counts the number of linearly independent paths 
                through a program's source code.
              </p>

              <h2>Why is Cyclomatic Complexity Important?</h2>
              <ul>
                <li>
                  Helps in identifying complex code that is hard to understand 
                  and maintain.
                </li>
                <li>
                  Assists in determining the number of test cases needed for 
                  thorough testing.
                </li>
                <li>
                  Improves code quality by encouraging developers to simplify 
                  complex functions.
                </li>
              </ul>

              <h2>How is Cyclomatic Complexity Calculated?</h2>
              <p>
                Cyclomatic complexity is calculated using the following formula:
              </p>
              <p className="text-center">
                <strong>
                  Cyclomatic Complexity = E - N + 2P
                </strong>
              </p>
              <p>Where:</p>
              <ul>
                <li>
                  <strong>E:</strong> The number of edges in the control flow 
                  graph.
                </li>
                <li>
                  <strong>N:</strong> The number of nodes in the control flow 
                  graph.
                </li>
                <li>
                  <strong>P:</strong> The number of connected components 
                  (usually 1 for a single program).
                </li>
              </ul>

              <h2>Example of Cyclomatic Complexity Analysis</h2>
              <p>
                Let's consider the following code snippet:
              </p>
              <pre className="bg-light p-3 rounded">
                {`int example(int x) {
    if (x > 0) {
        return 1;
    } else if (x == 0) {
        return 0;
    } else {
        return -1;
    }
}`}
              </pre>
              <p>
                The control flow graph for this code would have the following 
                characteristics:
              </p>
              <ul>
                <li><strong>Edges (E):</strong> 4</li>
                <li><strong>Nodes (N):</strong> 4</li>
                <li><strong>Connected Components (P):</strong> 1</li>
              </ul>
              <p>
                Using the formula:
                <br />
                Cyclomatic Complexity = 4 - 4 + 2 = <strong>2</strong>
              </p>

              <h2>Best Practices for Managing Cyclomatic Complexity</h2>
              <ul>
                <li>
                  <strong>Keep functions small:</strong> Break large functions 
                  into smaller, more manageable ones.
                </li>
                <li>
                  <strong>Refactor complex logic:</strong> Use polymorphism or 
                  other design patterns to simplify complex logic.
                </li>
                <li>
                  <strong>Limit conditional nesting:</strong> Reduce the 
                  depth of nested if-else or switch-case statements.
                </li>
              </ul>

              <h2>Conclusion</h2>
              <p>
                Cyclomatic complexity is a valuable metric for maintaining 
                high-quality code. By keeping this metric under control, 
                developers can create software that is easier to test, 
                maintain, and understand.
              </p>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default CyclomaticComplexity;

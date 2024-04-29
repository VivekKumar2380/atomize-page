import React, { useEffect } from "react";
import Prism from "prismjs";

import "prismjs/themes/prism-okaidia.css"; // Choose a theme or customize as needed

// Import language support if needed
import "prismjs/components/prism-jsx";

const Cod = () => {
  useEffect(() => {
    Prism.highlightAll(); // Initialize Prism.js after rendering
  }, []);

  return (
    <pre>
      <code className="language-jsx">
    {`    const PaymentCardBlock = () => (
        <Div bg="white" shadow="2" rounded="xl" m={{ b: "1rem" }} p="1.5rem">
          <Div
            border={{ b: "1px solid" }}
            borderColor="gray300"
            p={{ b: "0.75rem" }}
          >
            <Text textSize="title" textWeight="500">
              $1,410.16
            </Text>
            <Text textSize="caption" textColor="light">
              per month
            </Text>
          </Div>
          <Div d="flex" justify="space-between" p={{ t: "1rem", b: "1.5rem" }}>
            <Div>
              <Text textSize="caption" textColor="dark">
                Payment Card
              </Text>
              <Text textSize="caption" textColor="light">
                Component
              </Text>
            </Div>
          </Div>
        </Div>
        );`}
      </code>
    </pre>
  );
};

export default Cod;

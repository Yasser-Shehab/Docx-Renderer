import { useState } from "react";

import "./App.css";
import DocRenderer from "./components/DocRenderer/DocRenderer";
import HTMLRenderer from "./components/HTMLRenderer/HTMLRenderer";

function App() {
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>File Renderer</h1>
      <DocRenderer />
      <div className='html-container'>
        <HTMLRenderer
          htmlContent='<html lang="en">
            <head>
              <meta charset="UTF-8" />
              <meta http-equiv="X-UA-Compatible" content="IE=edge" />
              <meta name="viewport" content="width=device-width, initial-scale=1.0" />
              <title>Test</title>
            </head>
            <body>
              <h1>Hello World</h1>
              <p>Html view</p>
            </body>
          </html>
          '
        />
      </div>
    </div>
  );
}

export default App;

import React from "react";
import { Link } from "react-router-dom";
import "./HomeView.css";

export default () => (
  <div className="welcome">
    <h1 className="welcome__header">
      Hi, <code>&#123;&#123; your_name &#125;&#125;</code>!
    </h1>
    <p className="welcome__text">Welcome to <code>cm-assignment-react</code>.</p>
    <p className="welcome__text">
      There's a <Link to="/recipes">recipes view</Link> that needs
      some work. See the
      <a
        href="https://github.com/carb-manager/cm-assignment-react/blob/main/README.md"
      >
        <code>README.md</code>
      </a>
      file for more details.
    </p>
  </div>
);

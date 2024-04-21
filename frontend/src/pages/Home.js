import React from "react";
import "./Home.css";
const Home = () => {
  return (
    <div className="container">
      <h1>Notes App</h1>
      <div className="notes">
        <div className="note">
          <h2>Note 1</h2>
          <p>This is the content of note 1.</p>
        </div>
        <div className="note">
          <h2>Note 2</h2>
          <p>This is the content of note 2.</p>
        </div>
        <div className="note">
          <h2>Note 3</h2>
          <p>This is the content of note 3.</p>
        </div>
      </div>
    </div>
  );
};

export default Home;

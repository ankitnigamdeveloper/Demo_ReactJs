import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./App/Layout";
import Home from "./App/Pages/Home";
import ContactUs from "./App/Pages/Contact";

const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/users" element={<Users />} />
          <Route exact path="/contact" element={<ContactUs />} />
          {/* <Route path="*" element={<NotFound/>}/> */}
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}

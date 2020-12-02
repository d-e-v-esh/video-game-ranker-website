import React from "react";
// Components and Pages
import Home from "./pages/Home";
import Nav from "./components/Nav";
// Router
import { Route } from "react-router-dom";
// Styles
import GlobalStyles from "./components/GlobalStyles";

// We will only have one route because we are not loading another page when we click on a game for details

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <Nav />
      {/* Meaning => We are going to show the home component in both "/game/:id" and "/" cases. We never want to load up a new page. */}
      <Route path={["/game/:id", "/"]}>
        <Home />
      </Route>
    </div>
  );
}

export default App;

import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import MicroFrontend from "./MicroFrontend";

import Dashboard from "./components/Dashboard";
import Header from "./components/Header";
import Footer from "./components/Footer";

import "./App.css";

const {
  REACT_APP_MARVEL_HOST: marvelHost,
  REACT_APP_THEMOVIEDB_HOST: themovieDBHost,
} = process.env;

const Marvel = ({ history }) => {
  return <MicroFrontend history={history} host={marvelHost} name="Marvel" />;
};

const ThemovieDB = ({ history }) => {
  return (
    <MicroFrontend history={history} host={themovieDBHost} name="ThemovieDB" />
  );
};

const App = () => {
  return (
    <BrowserRouter>
      <>
        <Header />
        <div className="wrapper-container">
          <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route exact path="/marvel" component={Marvel} />
            <Route exact path="/marvel/details/:id" component={Marvel} />
            <Route exact path="/moviedb" component={ThemovieDB} />
            <Route exact path="/moviedb/discover" component={ThemovieDB} />
            <Route exact path="/moviedb/favorites" component={ThemovieDB} />
            <Route exact path="/moviedb/details/:mediaType/:id" component={ThemovieDB} />
          </Switch>
        </div>
        <Footer />
      </>
    </BrowserRouter>
  );
};

export default App;

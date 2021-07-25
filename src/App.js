import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ArticleList from './pages/ArticleList';
import Contact from './pages/Contact';
import SingleArticle from './pages/SingleArticle';
import Page404 from './pages/404Page';
import Navbar from './Navbar';


function App(){
  return (
    <div className="App">
    <Router>
      <Navbar/>
      <Switch>
        <Route path="/" component={HomePage} exact/>
        <Route path="/about" component={AboutPage}/>
        <Route path="/article-list" component={ArticleList}/>
        <Route path="/contact" component={Contact}/>
        <Route path="/article/:_id" component={SingleArticle}/>
        {/* <Router path="/article/:name" component={SingleArticle}/> */}
        <Route component={Page404}/>
      </Switch>
    </Router>
    </div>
  );
};

export default App;

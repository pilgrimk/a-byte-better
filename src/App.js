import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Head from './Components/Head';
import Navigation from './Components/Navigation';
import Home from './Components/Home';
import Page1 from './Components/Page-1';
import Footer from './Components/Footer';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className="App">
        <Head />
        <Navigation />

        <Switch>
        <Route exact path="/">
            <Home />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/page-1">
            <Page1 />
          </Route>
          <Route path="*">
            <NoMatch />
          </Route>
        </Switch>

        <Footer />
      </div>
    </Router>
  );
}

function NoMatch(){
  return(
    <div>
      <h1>404 Page Not Found</h1>
    </div>
  )
}

export default App;

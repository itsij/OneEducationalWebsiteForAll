import React from 'react'
import { Route, Switch } from 'react-router';
import './App.css';
import {Sectionspg} from './pages/PageSrc'
import Layout from './components/Layout/Layout'
import { Home, Login, Signup, About,FAQ,Frontpg} from './pages/PageSrc'

function App() {
  return (
      <Switch>
      <Layout>
        <Route path="/section" exact component={Sectionspg}/>
        <Route path="/about" exact component={About} />
        <Route path="/signup" exact component={Signup} />
        <Route path="/login" exact component={Login} />
        <Route path="/home" exact component={Home} />
        <Route path="/faq" exact component={FAQ} />
        </Layout>
      </Switch>

  );
}

export default App;
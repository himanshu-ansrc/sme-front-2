import React, {Component, Fragment} from 'react'
import {Route, Switch} from 'react-router-dom'
import Home from './components/Home'
import ListCandidates from './components/ListCandidates'

class MainRouter extends Component {
  render() {
    return (
     <Fragment>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/list-candidates" component={ListCandidates}/>
      </Switch>
    </Fragment>)
  }
}

export default MainRouter

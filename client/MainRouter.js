import React, {Component, Fragment} from 'react'
import {Route, Switch} from 'react-router-dom'
import Home from './components/Home'
import ListCandidates from './components/ListCandidates'
import DetailCandidates from './components/CandidateProfile'

class MainRouter extends Component {
  render() {
    return (
     <Fragment>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/list-candidates/:keys" component={ListCandidates}/>
        <Route path="/list-candidates" component={ListCandidates}/>
        <Route path="/detail-candidates/:user_id" component={DetailCandidates}/>
      </Switch>
    </Fragment>)
  }
}

export default MainRouter

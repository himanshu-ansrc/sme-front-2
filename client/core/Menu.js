import React, {Component} from 'react'
import AppBar from 'material-ui/AppBar'
import Toolbar from 'material-ui/Toolbar'
import Typography from 'material-ui/Typography'
import IconButton from 'material-ui/IconButton'
import HomeIcon from 'material-ui-icons/Home'
import TextField from 'material-ui/TextField'
import Button from 'material-ui/Button'
import auth from './../auth/auth-helper'
import {Link, withRouter} from 'react-router-dom'
import Tweets from './Tweets'
import {fetchTweets} from '../user/api-user'

class Menu extends Component{
  constructor({match}) {
    super();
    this.state = {
      search : [],
      error: false,
      nextResultUrl: null,
      hasMore : true,
      isLoading : false,
      tweets : [],
      key: ''
    }
    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  };

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  };

  handleScroll(event) {
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
        console.log("bottom");
        if(this.state.isLoading) return;
        this.setState({isLoading: true});
        this.fetchTweetsData(this.state.nextResultUrl);
    }
  };

  fetchTweetsData(key){
    fetchTweets(key)
       .then(result=>{
           this.setState({
             nextResultUrl: result.data.search_metadata.next_results,
             isLoading: false,
             search: [...this.state.search, ...result.data.statuses]
           });
           console.log(this.state.search);
    })
  }

  searchKeyword = (e)=> {
    let searchWord = document.getElementById('search-word').value;
    this.setState({search: []});
    this.fetchTweetsData(`q=${searchWord}`);
  }

  render(){
     return(
         <div>
            Header
            <input type="text" id="search-word"/>
            <button onClick={this.searchKeyword}>serach</button>
            <div>
            <Tweets OnSearchTweets={this.state.search}/>
            </div>
         </div>
      )
  }
}

export default Menu

import React, {Component,Fragment} from 'react'

import Header from './Partials/Header'
import Footer from './Partials/Footer'

class Home extends Component{
    render(){
    	 return(
            <Fragment>
              <Header/>
              <Footer/>
            </Fragment>
    	 )
    }
}


export default Home;
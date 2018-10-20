import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {withStyles} from 'material-ui/styles'
import Card, {CardContent, CardMedia} from 'material-ui/Card'
import Typography from 'material-ui/Typography'
import seashellImg from './../assets/images/seashell.jpg'
import {fetchTweets} from '../user/api-user'

const styles = theme => ({
  card: {
    maxWidth: 600,
    margin: 'auto',
    marginTop: theme.spacing.unit * 5
  },
  title: {
    padding:`${theme.spacing.unit * 3}px ${theme.spacing.unit * 2.5}px ${theme.spacing.unit * 2}px`,
    color: theme.palette.text.secondary
  },
  media: {
    minHeight: 330
  }
})

class Tweets extends Component {
  constructor({match}) {
    super();
    this.match = match;
  }

  render(){
    const {classes} = this.props
    if(this.props.OnSearchTweets.length>0){
       const tweetedSearch = this.props.OnSearchTweets.map((result)=>{
             return (
                 <Card key={result.id} className={classes.card}>
                   <Typography type="headline" component="h2" className={classes.title}>
                     {result.text}
                   </Typography>
                   <CardMedia className={classes.media} image={seashellImg} title="Unicorn Shells"/>
                   <CardContent>
                     <Typography type="body1" component="p">
                       Welcome to the MERN Skeleton home page.
                     </Typography>
                   </CardContent>
                 </Card>
             )
       })
       return <div>{tweetedSearch}</div>
    }
    else{
       return (
          <div>
              No data
          </div>
       )
    }

    return (
        <Card className={classes.card}>
          <Typography type="headline" component="h2" className={classes.title}>
          </Typography>
          <CardMedia className={classes.media} image={seashellImg} title="Unicorn Shells"/>
          <CardContent>
            <Typography type="body1" component="p">
              Welcome to the MERN Skeleton home page.
            </Typography>
          </CardContent>
        </Card>
    )
  }
}

Tweets.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(Tweets)

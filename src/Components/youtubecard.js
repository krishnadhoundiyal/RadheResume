import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import YouTube from 'react-youtube';
const useStyles = makeStyles(theme => ({
  video: { "& iframe": {
  width: '100%',
  height:'200px',
   ['@media (min-width:780px)']: {
      width: '100%',
	  height:'100%'
    }
  }
},
yVideo:  {
  width: '100%',
  height:'200px',
  ['@media (min-width:780px)']: {
      width: '100%',
	  height:'400px'
    },
   ['@media (min-width:1030px)']: {
      width: '100%',
	  height:'400px'
    }
  }







}));

export default function Youtubecard(props) {
	
    const classes = useStyles()

    const data = [
        { quarter: 1, earnings: 13000 }

    ]
    const opts = {
      height: '480',
      width: '640',
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    }
  }
    return (
        <div >
			<YouTube className={classes.yVideo} videoId={props.id} opts={opts}  />;
		</div>
    )
}

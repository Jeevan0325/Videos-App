import React from 'react';
import { Paper, Typography } from '@material-ui/core';


const VideoDetail =( {video : {id:{videoId} ,snippet:{title,channelTitle,description}}}) => {
    if (!videoId) return <div><img src ="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTW_xfemxP2RCJoKHXTmrEfozXNDK_svjRH8w&usqp=CAU" alt=''style={{width: '150%',height: '100%',marginLeft:"20px"}}/></div>
     
    const videoSrc =`https://www.youtube.com/embed/${videoId}`; 
    return(
        <React.Fragment>
            <Paper elevation={6} style ={{height:"400px"}}>
                <iframe
                frameBorder="0"
                height  ="400px"
                width="100%"
                title="video Player" 
                src={videoSrc}
                />
            </Paper>
            <Paper elevation={6} style ={{padding:"15px"}}>
                <Typography variant="h4">
                    {title } - {channelTitle}
                </Typography>
                <Typography variant="sudtitle1">
                    {channelTitle}
                </Typography>
                <Typography variant="sudtitle2">
                    {description}
                </Typography>
            </Paper>
        </React.Fragment>
    )
}

export default VideoDetail ;

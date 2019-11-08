import React from 'react';
import {VideoMetaData,VideoPlaylistData,VideoMetaDataList} from './VideoData';
import Playcard from './playlistCard';

import classes from './App.module.css';

class App extends React.Component {
   state={
      currentCardPos:0,
      videoMetaData:VideoMetaDataList[0],
      vedioPlaylist:VideoPlaylistData,
   }
    onVedioCardClick=(pos)=>{
      this.setState({videoMetaData:VideoMetaDataList[pos], currentCardPos:pos});
     console.log(this.videoMetaData);
   }
   
   render(){
     let vediolist=this.state.vedioPlaylist.map((item,pos)=>{
         return(
            <Playcard key={item.id} thumbnail={item.thumbnail} title={item.title} oncard={this.onVedioCardClick} cardPos={pos} currentVideo={this.state.currentCardPos}/>
         )
         
      });
   return(
      <div className={classes.App}>
      <div className={classes.leftSection}>
         <div className={classes.playersection}>
         <iframe className={classes.VideoPlayer} src={`https://player.vimeo.com/video/${this.state.videoMetaData.vimeoId}`} width="100%" height="360" frameBorder="0" webkitallowfullscreen="" mozallowfullscreen="" allowFullScreen="" title="Vedio Player"></iframe>
          <div className={classes.viewStats}>
          <p>{this.state.videoMetaData.views}</p>
          <div>
                  <i className="far fa-heart"></i>
                  <i className="far fa-comment-alt"></i>
                  <i className="far fa-bookmark"></i>
          </div>
          </div>
            <h3>{this.state.videoMetaData.title}</h3>
            <p className={classes.vedioDescription}>{this.state.videoMetaData.description}</p>
            
            </div>
      <div className={classes.rightSection}>
      {vediolist}
         
      </div>
      
      </div>
      </div>
      
      
   )
   }
}

export default App;
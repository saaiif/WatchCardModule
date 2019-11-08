import React from 'react';

import classes from './playlistCard.module.css';


const Playcard=(props)=>{
   const classesArr=[classes.playlistContain];
   if(props.currentVideo === props.cardPos){
      classesArr.push(classes.Active);
}
   
   return(
      <div className={classesArr.join(' ')} onClick={()=>props.oncard(props.cardPos)}>
      <img src={props.thumbnail} alt="thumbnail"/>
      <h3>{props.title}</h3>
      </div>
   )
}

export default Playcard;
import React from 'react';
import SmurfItem from './SmurfItem';

function SmurfList(props) {

  return (
    <div className="grid-view">
      {props.smurfs.map(item => {
        return <SmurfItem smurf={item} key={item.id} deleteSmurf={props.deleteSmurf}/>
      })}
    </div>
  )
}

export default SmurfList;
import React from 'react';
import SmurfItem from './SmurfItem';

function SmurfList(props) {

  return (
    <div className="grid-view">
      {props.smurfs.map(item => {
        return <SmurfItem smurf={item} key={item.id} deleteSmurf={props.deleteSmurf} editSmurf={props.editSmurf}/>
      })}
    </div>
  )
}

export default SmurfList;
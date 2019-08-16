import React from 'react';

function SmurfItem(props) {

  return (
    <div style={{display: 'felx', flexDirection: 'column', border: '0.3px solid black', 
                 padding: '20px', fontSize: '20px', marginTop: '20px', background: 'white',
                 borderRadius: '4px'}}>
      <p>{props.smurf.name}</p>
      <p>{props.smurf.age}</p>
      <p>{props.smurf.height}</p>
      <button className="delete-btn"onClick={() => props.deleteSmurf(props.smurf.id)}>Delete</button>
    </div>
  )
}

export default SmurfItem;
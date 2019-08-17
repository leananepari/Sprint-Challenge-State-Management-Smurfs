import React, { useState } from 'react';

function SmurfItem(props) {
  const [edit, setEdit] = useState(false);

  const editForm = () => {
    setEdit(true)
  }

  return (
    <div style={{display: 'felx', flexDirection: 'column', border: '0.3px solid black', 
                 padding: '20px', fontSize: '20px', marginTop: '20px', background: 'white',
                 borderRadius: '4px'}}>
      <div style={{display: edit ? 'none' : null}}>
        <p>{props.smurf.name}</p>
        <p>{props.smurf.age}</p>
        <p>{props.smurf.height}</p>
      </div>
      {edit ? (<EditForm editSmurf={props.editSmurf} setEdit={setEdit} smurf={{name: props.smurf.name, age: props.smurf.age, height: props.smurf.height, id: props.smurf.id}}/>) : null}
      <div>
        <button style={{display: edit ? 'none' : null}} className="delete-btn" onClick={() => props.deleteSmurf(props.smurf.id)}>Delete</button>
        <button style={{display: edit ? 'none' : null}}onClick={editForm}>Edit</button>
      </div>
    </div>
  )
}

export default SmurfItem;

function EditForm(props) {
  const [values, setValues] = useState({name: props.smurf.name, age: props.smurf.age, height: props.smurf.height});

  const handleChange = (e) => {
    setValues({...values, [e.target.name] : e.target.value})
  }

  return (
    <div style={{display: 'felx', flexDirection: 'column', border: '0.3px solid black', 
                 padding: '20px', fontSize: '20px', marginTop: '20px', background: 'white',
                 borderRadius: '4px'}}>
      <form onSubmit={() => {
                      props.editSmurf(props.smurf.id, values);
                      props.setEdit(false)
                      }} 
            style={{display: 'flex', flexDirection: 'column'}}>
        <input type="text" 
              name="name" 
              placeholder="name" 
              value={values.name} 
              onChange={handleChange}/>
        <input type="text" 
              name="age" 
              placeholder="age" 
              value={values.age}
              onChange={handleChange}/>
        <input type="text" 
              name="height" 
              placeholder="height" 
              value={values.height}
              onChange={handleChange}/>
        <input type="submit" value="edit" />
      </form>
    </div>
  )
}
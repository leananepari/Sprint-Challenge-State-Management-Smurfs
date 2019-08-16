import axios from 'axios';

export const getData = () => {
  return dispatch => {
    dispatch({ type: 'GET_DATA_START' });
    axios
      .get('http://localhost:3333/smurfs')
      .then(res => {
        console.log('GETDATA', res.data)
        dispatch({ type: 'GET_DATA_SUCCESS', payload: res.data });
      })
      .catch(err => {
        dispatch({ type: 'GET_DATA_FAILURE', payload: 'Error'});
      });
  };
};

export const deleteSmurf = (id) => {
  return dispatch => {
    axios
      .delete(`http://localhost:3333/smurfs/${id}`)
      .then(res => {
        console.log('GETDATA', res.data)
        dispatch({ type: 'DELETE_A_SMURF_SUCCESS', payload: res.data });
      })
      .catch(err => {
        dispatch({ type: 'DELETE_A_SMURF_FAILURE', payload: 'Error'});
      });
  };
};

export const setForm = () => {
  return { type: 'SET_FORM' }
};

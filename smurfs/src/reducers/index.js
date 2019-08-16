const initialState = {
  smurfs: [
    {
      name: "Brainey",
      age: 200,
      height: "5cm",
      id: 0
    }
  ],
  loading: false,
  error: '',
  form: false
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_DATA_START':
      return {
        ...state,
        isLoading: true,
        error: ''
      };
    case 'GET_DATA_SUCCESS':
      return {
        ...state,
        smurfs: action.payload,
        isLoading: false,
        error: ''
      };
    case 'GET_DATA_FAILURE': 
      return {
        ...state,
        dataImg: '',
        answer: '',
        isLoading: false,
        error: action.payload,
        form: false
      };
    case 'DELETE_A_SMURF_SUCCESS': 
      return {
        ...state,
        smurfs: action.payload,
        loading: false,
        error: ''
      };
    case 'DELETE_A_SMURF_FAILURE': 
      return {
        ...state,
        loading: false,
        error: action.payload
      };
    case 'SET_FORM': 
      return {
        ...state,
        form: !state.form
      }
    default:
      return state;
  }
};
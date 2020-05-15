import { INITIAL_SMURF_FETCH, FETCH_SMURF_FAILURE, FETCH_SMURF_SUCCESS, CREATE_SMURF } from "../actions/smurfAction"

const initialState = {
    loadingSmurfs: false,
    smurfs: [],
    smurfingError: ""
}

export const smurfReducer = (state = initialState, action) => {
    switch (action.type) {
        case INITIAL_SMURF_FETCH:
            return {
                ...state,
                loadingSmurfs: true,
            }

        case FETCH_SMURF_FAILURE:
            return {
              ...state,
              smurfingError: "error!"
          }

        case FETCH_SMURF_SUCCESS:
            return {
        ...state,
        loadingSmurfs: false,
        smurfs: action.payload,
      };

      case CREATE_SMURF:
              console.log(action.payload)
              return {
                  ...state,
                  smurfs: [...state.smurfs, action.payload]
              }


        default:
            return state
    }
} 
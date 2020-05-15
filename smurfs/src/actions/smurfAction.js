import axios from "axios"
export const INITIAL_SMURF_FETCH = "INITIAL_SMURF_FETCH"
export const FETCH_SMURF_SUCCESS = "FETCH_SMURF_SUCCESS"
export const FETCH_SMURF_FAILURE = "FETCH_SMURF_FAILURE"
export const CREATE_SMURF = "CREATE_SMURF"


export const fetchSmurfs = () => {
    return dispatch => {
        dispatch({ type: INITIAL_SMURF_FETCH })
        axios.get("http://localhost:3333/smurfs")
        .then(res=>{
            dispatch({ type: FETCH_SMURF_SUCCESS, payload: res.data })
        })
        .catch(err => {
            console.log(err)
            dispatch({ type: FETCH_SMURF_FAILURE })

        })
    }
} 

export const postSmurf = (object) => {
    return dispatch => {
        axios.post("http://localhost:3333/smurfs", object)
        .then(res => {
            console.log(res)
        })
    }
} 
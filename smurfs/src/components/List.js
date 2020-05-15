import React, {useEffect} from "react"
import { connect } from "react-redux"
import {fetchSmurfs} from "../actions/smurfAction"
import Smurf from "./Smurfs"

function List(props) {
    useEffect(()=>{
        props.fetchSmurfs()
    }, [])
    return (
        <div> SmurfsList
        {props.loadingSmurfs && <p>Loading Smurf...</p>}
        {props.smurfs && props.smurfs.map((smurf => {
            return (
                <Smurf smurf={smurf} />
            )
        }))}
        </div>
    )
}

const mapStateToProps = state => {
    return {
        loadingSmurfs: state.loadingSmurfs,
        smurfs: state.smurfs,
        smurfingError: state.smurfingError
    }
}

export default connect(mapStateToProps, {fetchSmurfs})(List)  
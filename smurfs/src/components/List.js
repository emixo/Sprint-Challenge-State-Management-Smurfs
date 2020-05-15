import React, {useEffect} from "react"
import { connect } from "react-redux"
import {fetchSmurfs} from "../actions/smurfAction"

function List(props) {
    useEffect(()=>{
        props.fetchSmurfs()
    }, [])
    return (
        <div> SmurfsList
        {props.loadingSmurfs && <p>Loading Smurf...</p>}
        {props.smurfs && props.smurfs.map((smurf => {
            return (
                <h2>{smurf.name}</h2>
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
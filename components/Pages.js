import React from 'react'
import PlayList from './PlayList'

const container = {
    // border:"1px solid red",
    width:"82%",
    height:"478px",
    marginLeft:"15px",
    borderRadius:"8px",
    background:"#121212",
    display:"flex",
    // alignItems:"Center",
    // justifyContent:"center",
    color:"white",
    paddingLeft:"30px"
}

function Pages() {
  return (
    <div style={container}>
      <PlayList/>
    </div>
  )
}

export default Pages
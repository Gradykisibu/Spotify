import React from 'react'
import Bottomplayer from '../components/Bottomplayer'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import Pages from '../components/Pages'

const pages = {
  display:"flex",
  // border:"1px solid red",
  width:"99%"
}

const container = {
  // border:"1px solid red",
  width:"82%",
  height:"478px",
  marginLeft:"15px",
  borderRadius:"8px",
  background:"#121212",
  display:"flex",
  alignItems:"Center",
  justifyContent:"center",
  color:"white",
}

function playlist () {
  return (
    <div style={{background:"black"}}>
       <Navbar/>

      <div style={pages}>
      <Sidebar/>
      {/* <Pages/> */}
      <div style={container}>
       Your Playlist
      </div>
      </div>

      <Bottomplayer/>
    </div>
  )
}

export default playlist
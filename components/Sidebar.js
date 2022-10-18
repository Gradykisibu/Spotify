import React from 'react'
import Link from 'next/link'
import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown';

const container = {
    width:"20%",
    marginLeft:"17px",
    borderRadius:"8px",
    height:"448px",
    display:"flex",
    // alignItems:"Center",
    // justifyContent:"center",
    color:"white",
    background:"#121212",
    flexDirection:"column",
    paddingTop:"30px"
}

const pages = {
    display:"flex",
    alignItems:"Center",
    justifyContent:"center",
    fontSize:"14px",
    color:"#B3B3B3",
    fontWeight:"bold",
    marginRight:"30px",
    paddingRight:"40px",
    cursor:"pointer"
}

const plus = {
  display:"flex",
  alignItems:"Center",
  justifyContent:"center",
  fontWeight:"bold",
  width:"22px", 
  height:"22px",
  background:"#B3B3B3",
  borderRadius:"2px",
  marginLeft:"15px",
  // cursor:"pointer"
}

const heart = {
  display:"flex",
  alignItems:"Center",
  justifyContent:"center",
  fontWeight:"bold",
  width:"25px", 
  height:"25px",
  background:"purple",
  borderRadius:"2px",
  // cursor:"pointer"
}

function Sidebar() {
  return (
    <div style={container}>
        
        <Link href="/Yourlibrary">
        <div style={pages}>
        <div>
        <svg role="img" height="21" width="21" class="Svg-ytk21e-0 jAKAlG collection-icon" aria-hidden="true" viewBox="0 0 24 24" fill='#B3B3B3'>
        <path d="M14.5 2.134a1 1 0 011 0l6 3.464a1 1 0 01.5.866V21a1 1 0 01-1 1h-6a1 1 0 01-1-1V3a1 1 0 01.5-.866zM16 4.732V20h4V7.041l-4-2.309zM3 22a1 1 0 01-1-1V3a1 1 0 012 0v18a1 1 0 01-1 1zm6 0a1 1 0 01-1-1V3a1 1 0 012 0v18a1 1 0 01-1 1z">
        </path>
        </svg>
        </div>
        <p style={{marginLeft:"10px"}}>Your Library</p>
        </div>
        </Link>

        <Link href="/playlist">
        <div style={pages}>
        <div style={plus}>
        <svg role="img" height="9" width="9" aria-hidden="true" viewBox="0 0 16 16" class="Svg-ytk21e-0 jAKAlG" fill='#242424'>
        <path d="M15.25 8a.75.75 0 01-.75.75H8.75v5.75a.75.75 0 01-1.5 0V8.75H1.5a.75.75 0 010-1.5h5.75V1.5a.75.75 0 011.5 0v5.75h5.75a.75.75 0 01.75.75z">
        </path>
        </svg>
        </div>
        <p style={{marginLeft:"10px"}}>Create Playlist</p>
        </div>
        </Link>

        <Link href="/likedsongs">
        <div style={pages}>
        <div style={heart}>
        <svg role="img" height="16" width="16" aria-hidden="true" viewBox="0 0 16 16" class="Svg-ytk21e-0 jAKAlG" fill='#B3B3B3'>
        <path d="M15.724 4.22A4.313 4.313 0 0012.192.814a4.269 4.269 0 00-3.622 1.13.837.837 0 01-1.14 0 4.272 4.272 0 00-6.21 5.855l5.916 7.05a1.128 1.128 0 001.727 0l5.916-7.05a4.228 4.228 0 00.945-3.577z">
        </path>
        </svg>
        </div>
        <p style={{marginLeft:"10px"}}>Liked Songs</p>
        </div>
        </Link>

        {/* <hr style={{width:"200px", marginTop:"8px", border:"none", height:"0.3px", background:"lightgrey"}}/> */}

        <div style={{marginTop:"250px", marginRight:"50px", display:"flex", color:"#B3B3B3", alignItems:"center", justifyContent:"center"}}>
        <ArrowCircleDownIcon/>
        <p style={{marginLeft:"20px"}}>install app</p>
        </div>
        
      
    </div>
  )
}

export default Sidebar
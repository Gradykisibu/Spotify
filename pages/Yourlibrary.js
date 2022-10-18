import React from "react";
import Bottomplayer from "../components/Bottomplayer";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Pages from "../components/Pages";

const pages = {
  display: "flex",
  // border:"1px solid red",
  width: "99%",
};

const container = {
  // border:"1px solid red",
  width: "82%",
  height: "478px",
  marginLeft: "15px",
  borderRadius: "8px",
  background: "#121212",
  display: "flex",
  // alignItems:"Center",
  // justifyContent:"center",
  color: "white",
  flexDirection: "column",
  overflow: "auto",
};

const TopLinks = {
  // border:"1px solid blue",
  display: "flex",
  alignItems: "Center",
  justifyContent: "center",
  padding: "20px",
  justifyContent: "space-between",
  width: "1003px",
  fontWeight: "bold",
  cursor: "pointer",
  height: "50px",
  position: "fixed",
  background: "#121212",
  
};

const playlist = {
  width: "100px",
  height: "40px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: "5px",
  background: "#333333",
};
function Yourlibrary() {
  return (
    <div style={{ background: "black" }}>
      <Navbar />

      <div style={pages}>
        <Sidebar />
        <div style={container}>
          <div style={TopLinks}>
            <div style={{display:"flex", alignItems:"center", justifyContent:"center", justifyContent:"space-between", width:"370px"}}>
            <p style={playlist}>Playlist</p>
            <p>Podcast</p>
            <p>Artists</p>
            <p>Albums</p>
            </div>
          </div>

          <p
            style={{
              margin: "20px",
              fontSize: "23px",
              fontWeight: "bold",
              marginTop: "100px",
            }}
          >
            Playlists
          </p>

          <div>
            <div style={{display:"flex", alginIems:"center", justifyContent:"Center",justifyContent:"space-between"}}>
            <div
              style={{
                margin: "20px",
                border: "1px solid red",
                width: "400px",
                height: "260px",
                borderRadius: "5px",
                background: "	#7B68EE",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              hello
            </div>

            <div
              style={{
                margin: "20px",
                // border: "1px solid red",
                width: "200px",
                height: "260px",
                borderRadius: "5px",
                background: "	#181818",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0px 0px 5px 0px rgba(0,0,0,0.75)"

              }}
            >
              hello
            </div>

            <div
              style={{
                margin: "20px",
                // border: "1px solid red",
                width: "200px",
                height: "260px",
                borderRadius: "5px",
                background: "	#181818",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0px 0px 5px 0px rgba(0,0,0,0.75)"

              }}
            >
              hello
            </div>

            <div
              style={{
                margin: "20px",
                width: "200px",
                height: "260px",
                borderRadius: "5px",
                background: "	#181818",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0px 0px 5px 0px rgba(0,0,0,0.75)"

              }}
            >
              hello
            </div>
            </div>


            <div
              style={{
                margin: "20px",
                width: "200px",
                height: "260px",
                borderRadius: "5px",
                background: "	#181818",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0px 0px 5px 0px rgba(0,0,0,0.75)"

              }}
            >
              hello
            </div>
          </div>
        </div>
      </div>
      <Bottomplayer />
    </div>
  );
}

export default Yourlibrary;

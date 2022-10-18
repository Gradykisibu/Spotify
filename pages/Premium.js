import React from "react";
import Link from "next/link";
import Typography from "@mui/material/Typography";
import PersonIcon from "@mui/icons-material/Person";
import { fontWeight } from "@mui/system";
import CheckIcon from '@mui/icons-material/Check';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';

const navbar = {
  width: "100%",
  height: "80px",
  background: "black",
  display: "flex",
  AlignItems: "center",
  justifyContent: "center",
  justifyContent: "space-between",
};
const links = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  justifyContent: "space-between",
  color: "white",
  fontWeight: "bold",
  fontSize: "16px",
  width: "340px",
  marginRight: "50px",
  cursor: "pointer",
};

const user = {
  border: "3px solid white",
  borderRadius: "50px",
  width: "45px",
  height: "45px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

const banner = {
  background: "rgb(29, 117, 222)",
  color: "white",
  border: "1px solid rgb(29, 117, 222)",
  flexDirection: "column",
  paddingLeft: "120px",
  paddingTop: "100px",
};

const button1 = {
  color: "white",
  background: "#191414",
  borderRadius: "25px",
  border: "none",
  width: "160px",
  height: "47px",
  fontWeight: "bold",
  cursor: "pointer",
};
const button2 = {
  color: "white",
  background: "transparent",
  borderRadius: "25px",
  border: "2px solid white",
  fontWeight: "bold",
  width: "190px",
  height: "52px",
  fontWeight: "bold",
  marginLeft: "10px",
  cursor: "pointer",
};

const paid = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  paddingTop: "20px",
  flexDirection: "column",
};

const paidRow = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  justifyContent: "space-evenly",
  width: "99%",
};

const plan = {
  width: "100%",
  background: "#F8F8F8",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
  paddingTop: "30px",
};

const planGrid1 = {
  width: "270px",
  height: "610px",
  background: "white",
  borderRadius: "10px",
  boxShadow: "0px 0px 5px 3px rgba(0,0,0,0.19)",
  paddingLeft:"20px"
};

const planGrid2 = {
  width: "270px",
  height: "610px",
  background: "white",
  borderRadius: "10px",
  boxShadow: "0px 0px 5px 3px rgba(0,0,0,0.19)",
  paddingLeft:"20px"
};

const planGrid3 = {
  width: "270px",
  height: "610px",
  background: "white",
  borderRadius: "10px",
  boxShadow: "0px 0px 5px 3px rgba(0,0,0,0.19)",
  paddingLeft:"20px"
};

const planGrid4 = {
  width: "270px",
  height: "610px",
  background: "white",
  borderRadius: "10px",
  boxShadow: "0px 0px 5px 3px rgba(0,0,0,0.19)",
  paddingLeft:"20px"
};

const students = {
  width: "800px",
  height: "90px",
  background: "white",
  borderRadius: "16px",
  marginTop: "40px",
  boxShadow: "0px 0px 5px 3px rgba(0,0,0,0.19)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  justifyContent: "space-evenly",
};

const footer = {
  width:"100%",
  height:"400px",
  background:"black",
  marginTop:"30px",
  display:"flex",
  // alignItems:"center",
  // justifyContent:"center",
  justifyContent:"space-evenly",
  paddingTop:"50px",
  flexDirection:"column"

}

function Premium() {
  return (
    <div>
      <div style={navbar}>
        <Link href="/">
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "white",
              marginLeft: "65px",
              cursor: "pointer",
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="43"
              height="43"
              fill="white"
              class="bi bi-spotify"
              viewBox="0 0 16 16"
            >
              <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zm3.669 11.538a.498.498 0 0 1-.686.165c-1.879-1.147-4.243-1.407-7.028-.77a.499.499 0 0 1-.222-.973c3.048-.696 5.662-.397 7.77.892a.5.5 0 0 1 .166.686zm.979-2.178a.624.624 0 0 1-.858.205c-2.15-1.321-5.428-1.704-7.972-.932a.625.625 0 0 1-.362-1.194c2.905-.881 6.517-.454 8.986 1.063a.624.624 0 0 1 .206.858zm.084-2.268C10.154 5.56 5.9 5.419 3.438 6.166a.748.748 0 1 1-.434-1.432c2.825-.857 7.523-.692 10.492 1.07a.747.747 0 1 1-.764 1.288z" />
            </svg>
            <p style={{ fontWeight: "bold", fontSize: "23px" }}>Spotify</p>
          </div>
        </Link>

        <div style={links}>
          <p>Paid</p>
          <p>Help</p>
          <p>Download</p>
          <p>|</p>

          <p style={user}>
            <PersonIcon style={{ fontSize: "25px" }} />
          </p>
          <p>Profile</p>
        </div>
      </div>

      <div style={banner}>
        <p style={{ fontSize: "40px", fontWeight: "bold" }}>
          Get Paid for free for 1 month
        </p>
        <p style={{ fontSize: "25px" }}>
          Only R59.99/month after that. Cancel anytime.
        </p>

        <div>
          <button style={button1}>GET STARTED</button>
          <button style={button2}>LOOK AT THE PLANS</button>
        </div>
        <p
          style={{ fontSize: "10px", marginTop: "20px", marginBottom: "60px" }}
        >
          <span style={{ textDecoration: "underline" }}>
            Terms and conditions apply.
          </span>{" "}
          1 month free is not available to users who have already tried Paid.
        </p>
      </div>

      <div style={paid}>
        <p style={{ fontSize: "45px", fontWeight: "bold" }}>
          What's so much about Paid?
        </p>

        <div style={paidRow}>
          <div>
            <img src="pic1.png" alt="" />
            <p style={{ fontSize: "20px", fontWeight: "bold" }}>
              Donwload music
            </p>
            <p>Listen anywhere.</p>
          </div>

          <div>
            <img src="pic2.png" style={{ marginLeft: "30px" }} />
            <p style={{ fontSize: "20px", fontWeight: "bold" }}>
              Listening to music without
            </p>
            <p
              style={{
                fontSize: "20px",
                fontWeight: "bold",
                marginLeft: "90px",
              }}
            >
              ads.
            </p>
            <p>Enjoy the musical highway</p>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
            }}
          >
            <img src="pic3.png" alt="" />
            <p style={{ fontSize: "20px", fontWeight: "bold" }}>
              Play any song
            </p>
            <p>Even on mobile.</p>
          </div>

          <div>
            <img src="pic4.png" alt="" />
            <p style={{ fontSize: "20px", fontWeight: "bold" }}>
              Unlimited jumps.
            </p>
            <p>just click next</p>
          </div>
        </div>
      </div>

      <div style={plan}>
        <p style={{ fontSize: "35px", fontWeight: "bold" }}>Choose your Paid</p>
        <p>
          Listen without limitation on your phone, speaker, and other device.
        </p>

        <div style={{display:"flex", alignItems:"center", justifyContent:"center", justifyContent:"space-evenly", width:"100%"}}>
        <div style={planGrid1}>
          <p
            style={{
              color: "#0D72EA",
              fontWeight: "bold",
              fontSize: "15px",
              border: "1px solid #0D72EA",
              width: "130px",
              borderRadius: "5px",
              height:"25px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            One time plan
          </p>
          <p style={{ fontSize: "30px", fontWeight: "bold" }}>Mini</p>
          <p>R11.99/week</p>
          <p>1 account on mobile only</p>
          <br />
          <br />
          <br />
          <hr  style={{width:"250px"}}/>
          <div style={{display:"flex", fontSize:"17px", alignItems:"center", justifyContent:"center"}}>
            <CheckIcon/>
            <p style={{marginLeft:"7px"}}>Listening to music without <br /> ads on the device</p>
          </div>

          <div style={{display:"flex", fontSize:"17px", alignItems:"center", justifyContent:"center", marginRight:"83px"}}>
            <CheckIcon/>
            <p style={{marginLeft:"7px"}}>Group Session</p>
          </div>

          <div style={{display:"flex", fontSize:"17px", alignItems:"center", justifyContent:"center"}}>
            <CheckIcon/>
            <p style={{marginLeft:"7px"}}>Download 30 songs on 1<br /> mobile device</p>
          </div>

          <button style={{border:"none", background:"black", color:"white", borderRadius:"25px", width:"180px", height:"40px", fontWeight:"bold", marginLeft:"40px", marginTop:"10px"}}>GET STARTED</button>
          <p style={{textDecoration:"underline", fontSize:"10px", marginLeft:"50px", marginTop:"20px"}}>Terms and conditions apply .</p>
        </div>

        <div style={planGrid2}>
          <p
            style={{
              color: "#0D72EA",
              fontWeight: "bold",
              fontSize: "15px",
              border: "1px solid #0D72EA",
              width: "230px",
              borderRadius: "5px",
              height:"25px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            One-time plans are available
          </p>
          <p style={{ fontSize: "30px", fontWeight: "bold" }}>In One</p>
          <p>R59.99/month after the offer</p>
          <p>1 account </p>
          <br />
          <br />
          <br />
          <hr  style={{width:"250px"}}/>
          <div style={{display:"flex", fontSize:"17px", alignItems:"center", justifyContent:"center"}}>
            <CheckIcon/>
            <p style={{marginLeft:"7px"}}>Listening to music without <br /> ads.</p>
          </div>

          <div style={{display:"flex", fontSize:"17px", alignItems:"center", justifyContent:"center", marginRight:"83px"}}>
            <CheckIcon/>
            <p style={{marginLeft:"7px"}}>Group Session</p>
          </div>

          <div style={{display:"flex", fontSize:"17px", alignItems:"center", justifyContent:"center"}}>
            <CheckIcon/>
            <p style={{marginLeft:"7px"}}>Download 30 songs on 1<br /> mobile device</p>
          </div>

          <button style={{border:"none", background:"black", color:"white", borderRadius:"25px", width:"180px", height:"40px", fontWeight:"bold", marginLeft:"40px", marginTop:"10px"}}>GET STARTED</button>
          <p style={{textDecoration:"underline", fontSize:"10px", marginLeft:"50px", marginTop:"20px"}}>Terms and conditions apply .</p>
        </div>

        <div style={planGrid3}>
          <p
            style={{
              color: "#0D72EA",
              fontWeight: "bold",
              fontSize: "15px",
              border: "1px solid #0D72EA",
              width: "230px",
              borderRadius: "5px",
              height:"25px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
             One-time plans are available
          </p>
          <p style={{ fontSize: "30px", fontWeight: "bold" }}>Mini</p>
          <p>R11.99/week</p>
          <p>1 account on mobile only</p>
          <br />
          <br />
          <br />
          <hr  style={{width:"250px"}}/>
          <div style={{display:"flex", fontSize:"17px", alignItems:"center", justifyContent:"center"}}>
            <CheckIcon/>
            <p style={{marginLeft:"7px"}}>Listening to music without <br /> ads on the device</p>
          </div>

          <div style={{display:"flex", fontSize:"17px", alignItems:"center", justifyContent:"center", marginRight:"83px"}}>
            <CheckIcon/>
            <p style={{marginLeft:"7px"}}>Group Session</p>
          </div>

          <div style={{display:"flex", fontSize:"17px", alignItems:"center", justifyContent:"center"}}>
            <CheckIcon/>
            <p style={{marginLeft:"7px"}}>Download 30 songs on 1<br /> mobile device</p>
          </div>

          <button style={{border:"none", background:"black", color:"white", borderRadius:"25px", width:"180px", height:"40px", fontWeight:"bold", marginLeft:"40px", marginTop:"10px"}}>GET STARTED</button>
          <p style={{textDecoration:"underline", fontSize:"10px", marginLeft:"50px", marginTop:"20px"}}>Terms and conditions apply .</p>
        </div>

        <div style={planGrid4}>
          <p
            style={{
              color: "#0D72EA",
              fontWeight: "bold",
              fontSize: "15px",
              border: "1px solid #0D72EA",
              width: "230px",
              borderRadius: "5px",
              height:"25px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
             One-time plans are available
          </p>
          <p style={{ fontSize: "30px", fontWeight: "bold" }}>Mini</p>
          <p>R11.99/week</p>
          <p>1 account on mobile only</p>
          <br />
          <br />
          <br />
          <hr  style={{width:"250px"}}/>
          <div style={{display:"flex", fontSize:"17px", alignItems:"center", justifyContent:"center"}}>
            <CheckIcon/>
            <p style={{marginLeft:"7px"}}>Listening to music without <br /> ads on the device</p>
          </div>

          <div style={{display:"flex", fontSize:"17px", alignItems:"center", justifyContent:"center", marginRight:"83px"}}>
            <CheckIcon/>
            <p style={{marginLeft:"7px"}}>Group Session</p>
          </div>

          <div style={{display:"flex", fontSize:"17px", alignItems:"center", justifyContent:"center"}}>
            <CheckIcon/>
            <p style={{marginLeft:"7px"}}>Download 30 songs on 1<br /> mobile device</p>
          </div>

          <button style={{border:"none", background:"black", color:"white", borderRadius:"25px", width:"180px", height:"40px", fontWeight:"bold", marginLeft:"40px", marginTop:"10px"}}>GET STARTED</button>
          <p style={{textDecoration:"underline", fontSize:"10px", marginLeft:"50px", marginTop:"20px"}}>Terms and conditions apply .</p>
        </div>

        </div>

        <div style={students}>
          <p style={{ fontSize: "25px", fontWeight: "bold" }}>
            Students get Paid for free for one month
          </p>
          <button
            style={{
              border: "2px solid black",
              borderRadius: "25px",
              width: "190px",
              height: "52px",
              background: "transparent",
              fontWeight: "bold",
              fontSize: "16px",
            }}
          >
            Read more
          </button>
        </div>
      </div>

      <div style={footer}>
       <div style={{display:"flex", justifyContent:"center", justifyContent:"space-evenly", width:"100%"}}>
       <div>
        <Link href="/">
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "white",
              marginLeft: "65px",
              cursor: "pointer",
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="43"
              height="43"
              fill="white"
              class="bi bi-spotify"
              viewBox="0 0 16 16"
            >
              <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zm3.669 11.538a.498.498 0 0 1-.686.165c-1.879-1.147-4.243-1.407-7.028-.77a.499.499 0 0 1-.222-.973c3.048-.696 5.662-.397 7.77.892a.5.5 0 0 1 .166.686zm.979-2.178a.624.624 0 0 1-.858.205c-2.15-1.321-5.428-1.704-7.972-.932a.625.625 0 0 1-.362-1.194c2.905-.881 6.517-.454 8.986 1.063a.624.624 0 0 1 .206.858zm.084-2.268C10.154 5.56 5.9 5.419 3.438 6.166a.748.748 0 1 1-.434-1.432c2.825-.857 7.523-.692 10.492 1.07a.747.747 0 1 1-.764 1.288z" />
            </svg>
            <p style={{ fontWeight: "bold", fontSize: "23px" }}>Spotify</p>
          </div>
        </Link>
        </div>

        <div style={{ flexDirection:"column", color:"white"}}>
          <p style={{fontSize:"10px", fontWeight:"bold", color:"#919496"}}>COMPANY</p>
          <p>About</p>
          <p>Activities</p>
          <p>For the record</p>
        </div>

        <div  style={{ flexDirection:"column", color:"white"}}>
        <p style={{fontSize:"10px", fontWeight:"bold", color:"#919496"}}>COMMUNITIES</p>
          <p>For Artiist</p>
          <p>Engineers</p>
          <p>Advertising</p>
          <p>Indoors</p>
          <p>Sellers</p>
        </div>

        <div style={{ flexDirection:"column", color:"white"}}>
        <p style={{fontSize:"10px", fontWeight:"bold", color:"#919496"}}>USEFUL LINKS</p>
        <p>Help</p>
          <p>Web Player</p>
          <p>Free Device Program</p>
        </div>

        <div style={{display:"flex", alignItem:"center", justifyContent:"center", justifyContent:"space-evenly", width:"240px"}}>
          <p style={{ borderRadius:"50px", width:"60px", height:"60px",display:"flex", alignItems:"center", justifyContent:"center", background:"#222326"}}>
            <InstagramIcon style={{color:"white", fontSize:"30px"}}/>
          </p>

          <p style={{ borderRadius:"50px", width:"60px", height:"60px",display:"flex", alignItems:"center", justifyContent:"center", background:"#222326"}}>
            <TwitterIcon style={{color:"white", fontSize:"30px"}}/>
          </p>

          <p style={{ borderRadius:"50px", width:"60px", height:"60px",display:"flex", alignItems:"center", justifyContent:"center", background:"#222326"}}>
            <FacebookIcon style={{color:"white", fontSize:"30px"}}/>
          </p>
        </div>
       </div>
        
        <div style={{color:"#929496",display:"flex", justifyContent:"center", justifyContent:"space-evenly",width:"500px", fontSize:"12px", marginLeft:"130px"}}>
          <p>Legal</p>
          <p>Privacy Center</p>
          <p>Privacy Policy</p>
          <p>Cookies</p>
          <p>About Advertisement</p>
        </div>
      </div>

    </div>
  );
}

export default Premium;

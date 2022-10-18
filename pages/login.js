import React from "react";
import { getProviders, signIn } from "next-auth/react";

function login({ providers }) {

  return (
    <div>
     
   
      <img
        src="https://cdn.wallpapersafari.com/7/6/8qH14d.jpg"
        alt=""
        style={{ width: "350px", height: "290px" }}
      />
      
      {/* {Object.values(providers).map((provider) => (
        <div>
          <button>test</button>
        </div>
      ))} */}
        
      

    </div>
  );
}

export default login;

export async function getServerSideProps() {
  const providers = await getProviders();

  return {
    props: {
      providers,
    },
  };
}

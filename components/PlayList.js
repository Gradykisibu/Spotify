import React from 'react'

function PlayList() {
  var time = new Date().getHours();
  var greeting
if (time < 12) {
  greeting = "Good morning";
} else if (time < 20) {
  greeting = "Good afternoon";
} else {
  greeting = "Good evening";
}
  return (
    <div>
      
      <h1 style={{fontSize:"30px"}}>{greeting}</h1>
    </div>
  )
}

export default PlayList
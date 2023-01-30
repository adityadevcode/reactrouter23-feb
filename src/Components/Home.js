// with click of button we need to redirect to orderconfirmed page
// react router provide usenavigate hook

import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate =  useNavigate()
  return (
  <> 
   <div>Home</div>
   <button>Placeorder</button>
  </>
  
  )
};

export default Home;

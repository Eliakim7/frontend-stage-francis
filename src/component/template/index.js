import React from "react";
import { Outlet } from "react-router-dom";

function Template (){
  return(
    <>
      <section>
        <Outlet/>
      </section>
    </>
  )

}

export default Template
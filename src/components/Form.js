import React from "react";

export default function Form(){
  return(
    <div className="">
      <form className="form">
        <div className="form_group">
        <input type="text" placeholder="Shut up" className="form_input"/>
        <input type="text" placeholder="and take my monry" className="form_input"/>
        </div>
        <button className="form_btn">Get a new Image</button>
      </form>
    </div>
  )
}
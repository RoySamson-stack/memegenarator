import React from "react";
import Memes from "../components/memeData"

export default function Form(){

  let url;

function getMeme(){
  const meme = Memes.data.memes
  const randomNumber = Math.floor(Math.random() * meme.length);
   url = meme[randomNumber].url;
  return url;
}


  return(
    <div className="">
      <form className="form">
        <div className="form_group">
        <input type="text" placeholder="Shut up" className="form_input"/>
        <input type="text" placeholder="and take my money" className="form_input"/>
        </div>
        <button className="form_btn"
        onClick={getMeme}
        >Get a new meme image 🖼</button>
      </form>
      <div className="meme-component">

      </div>
    </div>
  )
}
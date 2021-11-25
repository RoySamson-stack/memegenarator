import React from "react"
import memesData from "./memeData.js"

export default function Meme() {
    const [memeImage, setMemeImage] = React.useState("")
    /**
     * Challenge: Save the random meme URL in state
     * - Below the div.form, add an <img /> and set the
     *   src to the new `memeImage` state you created
     */
    
    function getMemeImage() {
        const memesArray = memesData.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        setMemeImage(memesArray[randomNumber].url)
        
    }
    
    return (
        <main>
            <div className="form">
              <div className="form_group">
                <input 
                    type="text"
                    placeholder="Top text"
                    className="form_input"
                />
                <input 
                    type="text"
                    placeholder="Bottom text"
                    className="form_input"
                />
                 </div>
                <button 
                    className="form_btn"
                    onClick={getMemeImage}
                >
                    Get a new meme image 🖼
                </button>
               
            </div>
            <div className="meme-component">
            <img src={memeImage} className="meme_image" />
            </div>
        </main>
    )
}
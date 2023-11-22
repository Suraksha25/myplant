
import axios from "axios";
import { useState } from "react";
import { Placeholder } from "react-bootstrap";
import './Bot.css'
function Bot() {
  const [prompt, setPrompt] = useState("");
  const [response, setResponse] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(prompt)

    // Send a request to the server with the prompt
    axios
    .post("http://localhost:3001/chat", {prompt} )
    .then((res) => {
        // Update the response state with the server's response
        
        setResponse(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  };


  
  return (
    <div className=" c1">
      <form onSubmit={handleSubmit} className=" row " >
        
        <div className="col-6">
        <input
          type="text"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value) 
            
          }
          placeholder="Enter Query"
          className="my-3 mx-3 form-control  "
        />
        
        
      </div>
      <div className="col-1">
        <button type="submit" className="btn btn-dark my-3">Submit</button>
      </div>
      </form>
      <p >{response}</p>
      
    </div>
  );
}
export default Bot;

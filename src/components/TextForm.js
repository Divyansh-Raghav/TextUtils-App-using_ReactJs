import React , {useState} from 'react'



export default function TextForm(props) {

  const handleUpClick = ()=>{
    //  console.log("UpperCase Was Clicked "+text);
     let newText=text.toUpperCase();
     setText(newText);
    props.showAlert("Converted to Uppercase")
  };
  const handleLowClick = ()=>{
    //  console.log("UpperCase Was Clicked "+text);
     let newText=text.toLowerCase();
     setText(newText);
     props.showAlert("Converted to Lowercase")
  };
  const handleInverseClick = ()=>{
    //  console.log("UpperCase Was Clicked "+text);
     let newText=text.split("").map((char)=>char===char.toUpperCase() ? char.toLowerCase() : char.toUpperCase()).join("");
     setText(newText);
     props.showAlert("Converted to Inversecase")
  };
  const handleClearClick = ()=>{
    //  console.log("UpperCase Was Clicked "+text);
     let newText="";
     setText(newText);
     props.showAlert("text Cleared")
  };
  const handleOnChange=(event)=>{
    // console.log("On Change");
    setText(event.target.value);
  }
  
  const [text , setText]= useState('');
  // setText('New Text'); it is the corrrect way to change text abve
  return (
    <>
    
    <div className="container" style={{color:props.mode==='dark'? 'white' : 'black'}}>
    <h1>{props.heading}</h1>
<div className="mb-3">
 
  <textarea className="form-control" value={text} style={{backgroundColor:props.mode==='dark'? 'grey' : 'white' , color:props.mode==='dark'? 'white' : 'black'}} onChange={handleOnChange} id="myBox" rows="10"></textarea>
</div>
<button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert To UpperCase</button>
<button className="btn btn-primary mx-1" onClick={handleLowClick}>Convert To LowerCase</button>
<button className="btn btn-primary mx-1" onClick={handleInverseClick}>Convert To InverseCase</button>
<button className="btn btn-primary mx-1" onClick={handleClearClick}>Clear Text</button>
    </div>

    <div className="conatiner my-3" style={{color:props.mode==='dark'? 'white' : 'black'}}>
    <h2>Yout Text Summary</h2>
    <p>{text.split(" ").length } words and {text.length} characters</p>
    <p>{.008*text.split(" ").length} Minutes Read</p>
    <h2>Preview</h2>
    <p>{text.length>0 ? text :"Enter something in the textbox above to preview it here "}</p>

    </div>
   
    </>
  )
}

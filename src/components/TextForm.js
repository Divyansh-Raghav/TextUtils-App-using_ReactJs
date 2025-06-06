import React , {useState} from 'react'



export default function TextForm(props) {
  const handleCopy=()=>{
    navigator.clipboard.writeText(text);
    props.showAlert("Copied to Clipboard","success");
  }

  const handleUpClick = ()=>{

     let newText=text.toUpperCase();
     setText(newText);
    props.showAlert("Converted to Uppercase")
  };
  const handleLowClick = ()=>{

     let newText=text.toLowerCase();
     setText(newText);
     props.showAlert("Converted to Lowercase")
  };
  const handleInverseClick = ()=>{

     let newText=text.split("").map((char)=>char===char.toUpperCase() ? char.toLowerCase() : char.toUpperCase()).join("");
     setText(newText);
     props.showAlert("Converted to Inversecase")
  };
  const handleClearClick = ()=>{
 
     let newText="";
     setText(newText);
     props.showAlert("text Cleared")
  };
  const handleOnChange=(event)=>{
    
    setText(event.target.value);
  }
  
  const [text , setText]= useState('');
  
  return (
    <>
    
    <div className="container" style={{color:props.mode==='dark'? 'white' : 'black'}}>
    <h1 className='my-2 disabled={text.length===0}'>{props.heading}</h1>
<div className="mb-3">
 
  <textarea className="form-control" value={text} style={{backgroundColor:props.mode==='dark'? '#B3B3B3' : 'white' , color:props.mode==='dark'? 'white' : 'black'}} onChange={handleOnChange} id="myBox" rows="10"></textarea>
</div>
<button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert To UpperCase</button>
<button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleLowClick}>Convert To LowerCase</button>
<button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleInverseClick}>Convert To InverseCase</button>
<button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleClearClick}>Clear Text</button>
<button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy Text </button>
    </div>

    <div className="conatiner my-3" style={{color:props.mode==='dark'? 'white' : 'black'}}>
    <h2>Yout Text Summary</h2>
    <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length } words and {text.length} characters</p>
    <p>{.008*text.split(" ").length} Minutes Read</p>
    <h2>Preview</h2>
    <p>{text.length>0 ? text :"Enter something in the textbox above to preview it here "}</p>

    </div> 
   
    </>

  )
}

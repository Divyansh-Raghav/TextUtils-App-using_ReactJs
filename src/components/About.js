import React ,{useState}from 'react'

export default function About(props) {
let myStyle={
    color: props.mode==='dark'? 'white':'black',
    backgroundColor: props.mode==='dark'?'grey':'white',
    border: '2px solid',
    borderColor:props.mode==='dark'? 'white':'black'
}



  return (
    <div className='container' style={{color: props.mode==='dark'?'white':'black'}}>
        <h1 className='my-2'>About Us</h1>
      <div className="accordion" id="accordionExample" style={myStyle}>
        <div className="accordion-item" >
            <h2 className="accordion-header">
            <button className="accordion-button"  style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
               <strong>Analyze your text</strong> 
            </button>
            </h2>
            <div id="collapseOne" className="accordion-collapse collapse show" style={myStyle} data-bs-parent="#accordionExample">
            <div className="accordion-body">
            <strong>TextUtils offers instant text analysis to help you understand and refine your writing. Whether you're checking word count, character count, or estimated reading time, this tool provides accurate metrics within seconds. It's perfect for bloggers, students, and professionals who want quick insights to improve clarity and impact.</strong>
            </div>
            </div>
        </div>
        <div className="accordion-item">
            <h2 className="accordion-header">
            <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                <strong>Free to use</strong>
            </button>
            </h2>
            <div id="collapseTwo" className="accordion-collapse collapse" style={myStyle} data-bs-parent="#accordionExample">
            <div className="accordion-body">
                <strong>TextUtils is completely free and doesn't require any sign-up or subscription. You can access all features without limitations—no hidden fees or trials. It's a reliable, open-access utility created to make text editing and analysis accessible for everyone, anytime, anywhere.</strong> 
            </div>
            </div>
        </div>
        <div className="accordion-item">
            <h2 className="accordion-header">
            <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
              <strong>  Browser Compatible</strong>
            </button>
            </h2>
            <div id="collapseThree" className="accordion-collapse collapse"  style={myStyle} data-bs-parent="#accordionExample">
            <div className="accordion-body">
                <strong>This app is fully compatible with all modern web browsers including Google Chrome, Mozilla Firefox, Microsoft Edge, and Safari. Whether you're on a laptop, desktop, tablet, or mobile device, TextUtils ensures a smooth, responsive experience without requiring additional plugins or downloads. It works right out of the box.</strong>
            </div>
            </div>
        </div>
      
</div>
    </div>
  )
}


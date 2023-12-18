import React from 'react'
import {Parallax} from 'react-parallax'

const image1=
       "https://images.pexels.com/photos/417344/pexels-photo-417344.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"

const image2=
       "https://t3.ftcdn.net/jpg/05/71/06/76/360_F_571067620_JS5T5TkDtu3gf8Wqm78KoJRF1vobPvo6.jpg"      
       
const image3=
       "https://images.pexels.com/photos/459225/pexels-photo-459225.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
const image4=
        "https://images.pexels.com/photos/6729276/pexels-photo-6729276.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
const image5=
         "https://images.unsplash.com/photo-1682685797769-481b48222adf?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"

         const image6=
       "https://images.unsplash.com/photo-1543268956-75970fe7c955?q=80&w=1473&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
       const inlineStyle={
      background:'#fff',
      left:'50%',
      top:'50%',
      position:'absolute',
      padding:'20px',
      transform:'translate(-50%,-50%)'
        
       }

function ImageSlider() {
  return (
    <div className='' style={{textAlign:'center'}}>
<Parallax bgImage={image1} strength={500}>
    <div style={{height:500}}>
    <div style={inlineStyle}> parallax slide</div>
    </div>
</Parallax>
<h1>|||</h1>
<Parallax bgImage={image2} >
    <div style={{height:500}}>
    <div style={inlineStyle}> Blur Parallax</div>
    </div>
</Parallax>
<h1>|||</h1>
<Parallax bgImage={image3} strength={-200}>
    <div style={{height:500}}>
    <div style={inlineStyle}>Reverse Direction</div>
    </div>
</Parallax>
<h1>|||</h1>
<Parallax bgImage={image4} strength={400}>
    <div style={{height:500}}>
    <div style={inlineStyle}>Vechicle</div>
    </div>
</Parallax>
<h1>|||</h1>
<Parallax bgImage={image5} strength={400}>
    <div style={{height:500}}>
    <div style={inlineStyle}>sea side</div>
    </div>
</Parallax>
<Parallax bgImage={image6} blur={{min:-1,max:4}}>
    <div style={{height:500}}>
    <div style={inlineStyle}>Aesthetic</div>
    </div>
</Parallax>
<div style={{height:'100vh'}}>
</div>
    </div>
  )
}

export default ImageSlider
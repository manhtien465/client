import React, { Component,useCallback} from 'react'
import Dropzone from 'react-dropzone'
import axios from "axios"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";


class Upload extends Component {
  constructor(props){
    super(props)
    this.state={
        urlImg:[],
        idImg:[],
        pathImg:[],
    }
  }
  onDrop= (files) => {
    let formData=new FormData()
    const config={
      header:{"content-type":"multiple/form-data"}
    }
    formData.append("file",files[0])
    axios.post("/shopping/upload-img",formData,config)
    .then(res=>{

    var urlImg=this.state.urlImg
        urlImg.push(res.data)
        this.setState({
          urlImg:urlImg
        });

    })
  }
  onChange = (event) => {
console.log(event.target.value);
console.log(event.target.name);
 var name=event.target.name
 this.setState({
   [name]:event.target.value
 });
}
 delete=(url) => {

    const position=this.state.urlImg.indexOf(url)
    var urlImg=this.state.urlImg
    urlImg.splice(position,1)
    this.setState({
      urlImg:urlImg
    });
    let formData=new FormData()

    formData.append("id",url._id)
    const id=url._id
    axios.delete(`/shopping/delete/:${id}`)
    .then(res=>{
      console.log(res);
    })

 }
 submit=(event) => {
event.preventDefault()
   var formData=new FormData()
   formData.append("city",this.state.city)
   formData.append('discription',this.state.discription)
   formData.append("price",this.state.discription)
   this.state.urlImg.map((index,key)=>{
     const pathImg=this.state.pathImg
     pathImg.push(index.img)

     this.setState({
       pathImg:pathImg
     });
   })

   formData.append("img",this.state.pathImg)
   console.log(formData);

   axios.post("/shopping/upload",{
     "city":this.state.city,
     "discription":this.state.discription,
     "price":this.state.price,
     "img":this.state.pathImg
   })
   .then(res=>{
     console.log(res);
   })

 }
  render () {
    console.log(this.state);
    const loadImg=this.state.urlImg.map((index,key)=>{
      var image=index.img.replace("public","")
      return(
        <div onClick={(url)=>this.delete(index)}>
        <img style={{width:"350px",height:"240px"}} src={image} alt=""/></div>

      )
    })
    return (
      <div class="upload">
        <div style={{display:"flex",justifyContent:"space-between"}}>
        <div style={{border:"1px solid lightgray",width:"300px",height:"240px",marginLeft:"200px"}}>
        <Dropzone onDrop={(files)=>this.onDrop(files)}
          multiple={false}
          maxSize={100000000000000000000}>
          {({getRootProps, getInputProps}) => (
            <section>
              <div {...getRootProps()}>
                <input {...getInputProps()} />
                <div><i style={{fontSize:"50px",marginTop:"85px",marginLeft:"125px"}} class="fas fa-plus"></i></div>
              </div>
            </section>
          )}
        </Dropzone>
          </div>
        <div style={{border:"1px solid lightgray",marginRight:"200px"}}>
          <div style={{display:"flex",width:"350px",height:"240px",overflowX:"scroll"}}>{loadImg}</div>
        </div>

        </div>
        <form style={{marginLeft:"200px"}}class="upload__form">



          <label style={{display: "block"}} for="">city</label>
          <input style={{display: "block"}} onChange={(event)=>this.onChange(event)} type="text" name="city" />
          <label for="">price</label>

          <input style={{display: "block"}} onChange={(event)=>this.onChange(event)} type="text" name="price" />
            <label style={{display: "block"}} for="">discription</label>
            <textarea style={{display: "block"}} onChange={(event)=>{this.onChange(event)}} name="discription" rows="4" cols="97"></textarea>
          <input style={{padding:"10px 20px", marginTop:"20px"}} type="reset" onClick={(event)=>this.submit(event)} name="submit" value="submit"/>
        </form>

      </div>
    )
  }
}

export default Upload;

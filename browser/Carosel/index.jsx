import React from 'react';
import { connect } from 'react-redux';
import {nextPhoto, previousPhoto} from './CaroselActionCreators';
import album from './album';

export class Carosel extends React.Component{
  constructor(props){
    super(props);
  }

  next(){
    if(this.props.index<album.length-1){
      this.props.nextPhoto(this.props.index+1)
    }
    else{
      this.props.nextPhoto(0)
    }
  }

  previous(){
    if(this.props.index<1){
      this.props.previousPhoto(album.length-1)
    }
    else{
      this.props.previousPhoto(this.props.index-1)
    }
  }

  render(){
    const timeout = setTimeout(()=>{
      this.next(timeout)
    },4000)
    
    // for every picture in the album you are using it creates a radio button
    const radioButtons = album.map((image,index)=>{
      return <input className="radio-button" name="radio" type="radio" id={index} checked={this.props.index===index?true:false} onClick={(event)=>{
        clearTimeout(timeout)
        this.props.nextPhoto(+event.target.id)}}/>
    })

    const source = album[this.props.index]
    return(
      <div>
        <div id="photo-container">
          <h1>Carousel Example</h1>
          <img src={`/${source}`}/>
          <h1 id="right-arrow" onClick={()=>{clearTimeout(timeout);this.next()}}>{'>'}</h1>
          <h1 id="left-arrow" onClick={()=>{clearTimeout(timeout);this.previous()}}>{'<'}</h1>
          <div id="radio-buttons">
            {radioButtons}
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  index: state.carosel,
});

const mapDispatchToProps = {
 nextPhoto,
 previousPhoto,
};

export default connect(mapStateToProps, mapDispatchToProps)(Carosel);

import React from "react";
import './modal-window.sass'
import SimpleSlider from "../Slider/slider";
import {closeModalWindow} from "../../../../Actions/actions";
import {connect} from "react-redux";


const ModalWindow=({ imgs, clickedPhoto, closeModalWindow })=>{

    const arr= [...imgs.slice(clickedPhoto), ...imgs.slice(0, clickedPhoto)]

    return(
        <div className='modal-overlay'>
            <div className='modal-window'>
                <i className="fa fa-times" aria-hidden="true" onClick={()=>closeModalWindow()}/>
                <SimpleSlider imgs={arr}/>
            </div>
        </div>
    )
}

const mapStateToProps = (state)=>{
    return state;
}
const mapDispatchToProps = {
    closeModalWindow
}

export default connect(mapStateToProps,mapDispatchToProps)(ModalWindow);
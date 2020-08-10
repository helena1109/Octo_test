import React from "react";
import './gallery.sass'
import ModalWindow from "./Modal-window/modal-window";
import {CopyToClipboard} from 'react-copy-to-clipboard';
import ReactTooltip from "react-tooltip";
import {openModalWindow} from "../../../Actions/actions";
import {connect} from "react-redux";


class Gallery extends React.Component{
    state={
        photoAmount: 0,
        onClickedPhotoIndex: null,
    }

    componentDidMount() {

        const width= document.getElementById('img-wrapper').offsetWidth
        const count = Math.floor(width/210);
        this.setData({photoAmount: count});


    }

    setData= (data)=>{
        this.setState(data)
    }

    render() {
        const {isModalOpen, images } = this.props;
        const {photoAmount, onClickedPhotoIndex} = this.state;
        return(
            <div className="gallery  container-fluid">
                <div className="row col-lg-12 col-sm-12 " id="gallery">
                    <h2 className="gallery-header H2">
                        Галерея с изображениями
                    </h2>
                    <div className="gallery-description P_L">
                        Все просто. Выводится столько фотографий сколько влезит на экран. Те что не влезли рассчитываются и выводится их количество над последней фотографией. По клику на эту подпись так же открывается увеличенное версия того изображения, над которым выводится подпись.
                    </div>
                    <div id='img-wrapper' className='img-wrapper'>
                        {isModalOpen && <ModalWindow imgs={images} clickedPhoto={onClickedPhotoIndex}/>}

                        {images.slice(0, photoAmount).map((photo, index)=>{
                            const photoName= photo.image.match(/\d\.[a-z]*/);
                            if(index===photoAmount-1){
                                return (
                                    <div className='img-last' key={photoName} >
                                        <img className='img' src={`https://test.octweb.ru/api/crop/media/uploads/gallery/gallery/${photoName}?geometry=202x130&crop=center`}  alt=''/>
                                        <div className='img-overlay' id={index} onClick={()=>{
                                            this.props.openModalWindow();
                                            this.setState({onClickedPhotoIndex: index})}}>Еще {images.length-photoAmount} фото</div>
                                    </div>

                                )

                            }
                            return(
                                <img key={photoName} onClick={()=>{
                                    this.props.openModalWindow();
                                    this.setState({ onClickedPhotoIndex: index })}} className='img'
                                     src={`https://test.octweb.ru/api/crop/media/uploads/gallery/gallery/${photoName}?geometry=202x130&crop=center`} alt=''/>
                            )
                        })}
                    </div>
                    <div className="gallery-text P">
                        Для того, чтобы на странице мы выводили изображение фактического нужного размера, а не просто уменьшали заведомо большее изображения, есть такая возможность:
                    </div>

                        <CopyToClipboard text='https://test.octweb.ru/api/crop/media/uploads/gallery/gallery/6.jpeg?geometry=420x240&crop=center' onMouseOut={() => ReactTooltip.hide(this.tooltip)}
                                         onCopy={() => ReactTooltip.show(this.tooltip)} >
                            <div ref={ref => this.tooltip = ref} data-tip='Link copied' data-event='/' className="copyBox col-lg-10" >
                                <a href='https://test.octweb.ru/api/crop/media/uploads/gallery/gallery/6.jpeg?geometry=420x240&crop=center' rel="noopener noreferrer"
                                   target='_blank'> https://test.octweb.ru/api/crop/media/uploads/gallery/gallery/6.jpeg?geometry=420x240&crop=center</a>
                                <i className="fa fa-clone"/>
                            </div>

                        </CopyToClipboard>
                        <ReactTooltip delayHide={2000} />

                        <div className="gallery-text P_S">
                            В параметре geometry можно задать размеры для изображения, а в crop выбрать тип кадрирования (center, top, bottom) или вообще его не указывать и тогда изображение пропорционально будет «вписано» в указанные размеры.
                        </div>



                </div>

            </div>


        )
    }


}
const mapStateToProps = ({isModalOpen, images})=>{
    return {isModalOpen, images}
}
const mapDispatchToProps = {
    openModalWindow,
}
export default connect(mapStateToProps, mapDispatchToProps)(Gallery);
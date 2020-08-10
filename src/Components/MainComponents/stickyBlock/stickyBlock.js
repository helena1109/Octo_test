import React from "react";
import ReactTooltip from "react-tooltip";
import {CopyToClipboard} from "react-copy-to-clipboard";
import "./stickyBlock.sass"

class StickyBlock extends React.Component{
    render(){
        return(

                <div className="stickyBlock container-fluid ">
                    <div className="row">
                        <div className="stickyBlock-header Caps_big col-lg-12">
                            текстовые блоки и изображения для галереи
                        </div>
                        <CopyToClipboard text='https://test.octweb.ru/api/pages/index/' onMouseOut={() => ReactTooltip.hide(this.tooltip)}
                                         onCopy={() => ReactTooltip.show(this.tooltip)} >
                            <div ref={ref => this.tooltip = ref} data-tip='Link copied' data-event='/'  className="copyBox col-lg-5 сol-sm-12" >
                                <a href='https://test.octweb.ru/api/pages/index/' rel="noopener noreferrer"
                                   target='_blank'> https://test.octweb.ru/api/pages/index/</a>
                                <i className="fa fa-clone"/>
                            </div>

                        </CopyToClipboard>
                        <ReactTooltip delayHide={2000} />
                        <div className="stickyBlock-text P_S col-lg-6">
                            Будет круто, если по клику на желтый блок, соответствующая ссылка сразу скопируется в буфер обмена и пользователь получит какое-то максимально естественное уведомление что у него теперь в буфере эта ссылка.
                        </div>
                    </div>
                </div>



        )
}

}

export default StickyBlock
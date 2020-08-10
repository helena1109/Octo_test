import React from "react";
import "./firstStaticBlock.sass";
import withOctoTestService from "../../HOC/withOctoTestService";
import {connect} from "react-redux";
import ReactHtmlParser from "react-html-parser";

class FirstStaticBlock extends React.Component {


    render() {
        const {firstBlock} = this.props;
        return (
            <div className="firstStaticBlock container-fluid" id="textBlock">
                <div className="row">
                    <h3 className="firstStaticBlock-header H3 col-lg-12">
                        {firstBlock.title}
                    </h3>
                    <div className="firstStaticBlock-text P col-lg-9">
                        {ReactHtmlParser(firstBlock.content)}
                    </div>
                    <div className="firstStaticBlock-images row">
                        <div className="firstStaticBlock-image col-lg-3 col-sm-6">
                            <img src="https://test.octweb.ru/media/1.jpg" alt=""/>
                        </div>
                        <div className="firstStaticBlock-image col-lg-3 col-sm-6">
                            <img src="https://test.octweb.ru/media/2.jpg" alt=""/>
                        </div>
                        <div className="firstStaticBlock-image col-lg-3 col-sm-6">
                            <img src="https://test.octweb.ru/media/3.jpg" alt=""/>
                        </div>
                        <div className="firstStaticBlock-image col-lg-3 col-sm-6">
                            <img src="https://test.octweb.ru/media/4.jpg" alt=""/>
                        </div>

                    </div>
                </div>

            </div>
        )
    }
}

const mapStateToProps = ({allBlocks})=>{
    const firstBlock=allBlocks.static_blocks[0];
    return {firstBlock}
}

export default withOctoTestService()(connect(mapStateToProps)(FirstStaticBlock));
import React from "react";
import "./secondStatickBlock.sass"
import {connect} from "react-redux";
import withOctoTestService from "../../HOC/withOctoTestService";
import ReactHtmlParser from "react-html-parser";

const SecondStaticBlock = ({secondBlock})=>{


        return(
            <div className="secondStaticBlock container-fluid">
                <div className="row">
                    <h3 className="secondStaticBlock-header H3 col-lg-12">
                        {secondBlock.title}
                    </h3>

                    <div className="secondStaticBlock-text P col-lg-9  ">
                        {ReactHtmlParser(secondBlock.content)}
                    </div>
                    <div className="secondStaticBlock-description P Grey_Dark ">
                        {secondBlock.description}
                    </div>
                </div>

            </div>
        )
}

const mapStateToProps = ({allBlocks})=>{
    const secondBlock=allBlocks.static_blocks[1];
    return {secondBlock}
}

export default withOctoTestService()(connect(mapStateToProps)(SecondStaticBlock));
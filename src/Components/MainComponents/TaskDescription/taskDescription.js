import React from "react";
import "./taskDescription.sass";
import {CopyToClipboard} from 'react-copy-to-clipboard';
import ReactTooltip from 'react-tooltip'
import withOctoTestService from "../../HOC/withOctoTestService";
import {connect} from "react-redux";
import ReactHtmlParser from "react-html-parser";

class TaskDescription extends React.Component{


    render() {
        const {allBlocks} = this.props;
        return(
            <div className=" taskDescription container-fluid">
                <div className="row">
                    <h1 className="taskDescription-header H1 col-12">
                        {allBlocks.title}
                    </h1>
                    <div className="taskDescription-text P_L col-lg-9">
                        {ReactHtmlParser(allBlocks.content)}
                    </div>
                    <div className="taskDescription-text P col-lg-3 Grey_Dark">
                        <p>Этот блок с описанием тоже нужно сверстать. Специально использовали разные стили и текстовые блоки, даже если они порой неуместны ;)</p>
                    </div>
                </div>

            </div>
        )
    }
}

const mapStateToProps = ({allBlocks})=>{
    return {allBlocks}
}

export default withOctoTestService()(connect(mapStateToProps)(TaskDescription));
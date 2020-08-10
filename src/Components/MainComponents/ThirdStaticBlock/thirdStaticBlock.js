import React from "react";
import "./thirdStaticBlock.sass";
import {connect} from "react-redux";
import withOctoTestService from "../../HOC/withOctoTestService";
import ReactHtmlParser from 'react-html-parser';

class ThirdStaticBlock extends React.Component{


    componentDidMount() {
        const wrap = document.getElementsByClassName('table-wrap')[0];
        const table = document.getElementsByTagName('table')[0];
        wrap.appendChild(table)
    }

    render() {

        const {thirdBlock} = this.props;
        return(
            <div className="thirdStaticBlock  container-fluid">
                <div className="row">
                    <h3 className="thirdStaticBlock-header H3 col-12">
                        {thirdBlock.title}
                    </h3>
                    <div className="thirdStaticBlock-text P col-lg-9 col-sm-12">
                        {ReactHtmlParser(thirdBlock.content)}
                        <div className='table-wrap'/>
                    </div>

                </div>
            </div>
        )
    }
}

const mapStateToProps = ({allBlocks})=>{
    const thirdBlock=allBlocks.static_blocks[2];
    return {thirdBlock}
}




export default withOctoTestService()(connect(mapStateToProps)(ThirdStaticBlock));
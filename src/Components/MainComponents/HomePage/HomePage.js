import React, {useEffect} from "react";
import TaskDescription from "../TaskDescription/taskDescription";
import FirstStaticBlock from "../FirstStatickBlock/firstStaticBlock";
import SecondStaticBlock from "../SecondStaticBlock/secondStaticBlock";
import ThirdStaticBlock from "../ThirdStaticBlock/thirdStaticBlock";
import Gallery from "../Gallery/gallery";
import withOctoTestService from "../../HOC/withOctoTestService";
import {connect} from "react-redux";
import {fetchData} from "../../../Actions/actions";
import Spinner from "../../Spinner/spinner";
import Footer from "../../Footer/footer";
import GreetingForm from "../GreetingForm/greetingForm";
import StickyBlock from "../stickyBlock/stickyBlock";

const HomePage= ({loading, fetchData})=>{

    useEffect(()=>{
        fetchData()
    },[])


        if(loading){
            return <Spinner/>
        }

        return(
            <React.Fragment>
                <div className="wrapper">
                    <TaskDescription/>
                    <StickyBlock/>
                    <FirstStaticBlock/>
                    <SecondStaticBlock/>
                    <ThirdStaticBlock/>
                    <Gallery/>
                </div>
                <GreetingForm/>
                <Footer/>
            </React.Fragment>


        )

}

const mapStateToProps = ({loading})=>{
    return {loading};
}
const mapDispatchToProps = (dispatch, ownProps)=>{
    const {octoTestService} = ownProps;
    return{
        fetchData: fetchData(octoTestService, dispatch)

    }
}
export default withOctoTestService()(connect(mapStateToProps,mapDispatchToProps)(HomePage));
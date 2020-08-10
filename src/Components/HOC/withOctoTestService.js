import React from "react";
import {OctoTestServiceConsumer} from "../octoTestServiceContext/octoTestServiceContext";

const withOctoTestService = () => (Wrapped)=>{
 return(props)=>{
     return(
         <OctoTestServiceConsumer>
             {
                 (octoTestService) => {
                     return (<Wrapped {...props} octoTestService={octoTestService}/>)
                 }
             }
         </OctoTestServiceConsumer>
     )
 }
}

export default withOctoTestService;
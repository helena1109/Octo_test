import React from "react";

const{
    Consumer: OctoTestServiceConsumer,
    Provider: OctoTestServiceProvider
} = React.createContext();

export{
    OctoTestServiceProvider,
    OctoTestServiceConsumer
};
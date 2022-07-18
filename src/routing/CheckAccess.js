import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom"
import React from "react";

export const CheckAccess = ({component})=>{
  const {token} = useSelector(state=>state.Auth);
  return token===null ? <Navigate to="/"/> : component   
}
export const CheckLoginAccess = ({component})=>{
    const {token} = useSelector(state=>state.Auth)
    return token ? <Navigate to="/home"/> : component
}

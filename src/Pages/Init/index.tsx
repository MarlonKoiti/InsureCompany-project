import React from "react";
import { Link } from "react-router-dom";


export interface AppHome {}

const AppHome: React.FunctionComponent<AppHome> = (props) => {
  return(
    <h1>This is example</h1>
  )
}

export default AppHome;
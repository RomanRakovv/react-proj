import React from "react";
import Sidebar from "./Sidebar";
import StoreContext from "../../../store-context";


const SidebarContainer = (props) => {


    return (
        <StoreContext.Consumer>
            {store => {
                let state = store.getState().sidebar;
                return (
                    <Sidebar sidebar={state}/>
                )
            }
            }
        </StoreContext.Consumer>
    )
}

export default SidebarContainer;
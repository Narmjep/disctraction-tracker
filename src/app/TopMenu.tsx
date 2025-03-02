import { AddCounterContext } from "./counters/CountersContext";
import React from 'react';
import { useContext } from 'react';


function TopMenu() {

    const addCounter = useContext(AddCounterContext);

    const OnAddCounterClicked = () => {
        console.log("Add Counter Clicked"); 
        addCounter("New Counter");
    }

    return (
        <>
          <div className="row topMenu">
            <div className="col d-flex align-items-center justify-content-center">
                <button type="button" className="btn btn-primary w-20 add-btn" onClick={OnAddCounterClicked}>
                    Add Counter
                </button>
            </div>
          </div>
        </>
    );
}

export default TopMenu;
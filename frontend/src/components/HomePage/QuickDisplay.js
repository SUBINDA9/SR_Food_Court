import React from 'react';
import './QuickSearch.css';
import {Link} from 'react-router-dom';

const QuickDisplay = (props) => {

    const renderList = ({quickData}) =>{
        if(quickData){
            return quickData.map((item) => {
                return (
                    <Link to={`/list/${item.mealtype}`}>

                <div class="tilecontainer">
                    <div class="tileComponent1">
                        <img src={`/images/${item.name}.png`} className="imageclass"/>
                    </div>
                    <div class="tileComponent2">
                        <div class="componentHeading">
                            {item.name}
                        </div>
                        <div class="componentSubHeading">
                             exclusive {item.name} for your need
                        </div>
                    </div>
                </div>  
                    </Link>
                )
            })
        }

    }







    return(
        <React.Fragment>
            <div class="quickSearchContainer">
                <p class="quickSearchHeading">
                    Quick Searches
                </p>
                <p class="quickSearchSubHeading">
                    Discover Restaurants by meal type
                </p>

                {renderList(props)}
               
            </div>
        </React.Fragment>
    )
}
   
export default QuickDisplay;
import React  from 'react';
import {Link} from 'react-router-dom';
import './Listing.css';
import Pagination from "react-js-pagination";

const renderList = ({listdata}) => {
    if(listdata){
        return listdata.map((item) => {
            return(
                <div className="item" key={item._id}>
                    <div className="row">
                        <div className="col-md-5">
                            <img className="image" src={item.thumb}/>
                        </div>

                        <div className="col-md-7">
                            <div className= "hotel_name" >
                                <Link to={`/details/${item._id}`} >{item.name}</Link>
                            </div>
                            
                            <div className="city_name"><span class="glyphicon glyphicon-map-marker"></span>{item.city_name}</div>
                            <div className="city_name">{item.locality}</div>
                            <div className="city_name">{item.address}</div>
                            <div className="city_name">Available : 
                                <span class="glyphicon glyphicon-glass"></span>
                                <span class="glyphicon glyphicon-music"></span>
                            
                            </div>

                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-3">
                            <div className="cuisine_block">Cusine</div>
                            <div className="cuisine_block">Cost per two</div>

                        </div>
                        <div className="col-sm-9">
                        <div className="cuisine_out">{item.Cuisine[0].name} | {item.Cuisine[1].name} </div>
                        <div className="cuisine_out">Rs.{item.cost}</div>

                        </div>
                    </div>
                    
                </div>
            )
        })
    }else{
        return(
            <div>
                <img src="/images/loading.gif"/>
            </div>
        )
    }
}

// const ListingDisplay = (props) => {

//     return(
//         <div>
//             <div className="row">
//                 <div className="col-md-12">
//                     {renderList(props)}
//                 </div>
//                 <center>
//                 <Pagination
//                     activePage={props.activePage}
//                     itemsCountPerPage={props.limit}
//                     totalItemsCount={props.totalNoOfItems}
//                     pageRangeDisplayed={5}
//                     onChange={(pageNumber) => {handlePageChange(props,pageNumber)}}
//                     />
//                 </center>
//             </div>
//         </div>
//     )
// }

const handlePageChange = (props, pageNumber) => {
    // props.pageNumber(pageNumber);
    var data = props.listData;
    renderList(props, data);
}

const ListingDisplay = (props) => {
    console.log(props)
    return(
        <div>
            <div className="row">
                <div className="col-md-12">
                    {renderList(props,props.listdata)}
                </div>
                <center>
                    <Pagination
                    activePage={props.activePage}
                    itemsCountPerPage={props.limit}
                    totalItemsCount={props.totalNoOfItems}
                    pageRangeDisplayed={5}
                    onChange={(pageNumber) => {handlePageChange(props,pageNumber)}}
                    /> 
                </center>
            </div>
        </div>
    )
}

export default ListingDisplay;
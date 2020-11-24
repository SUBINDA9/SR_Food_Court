import React, { Component ,event } from 'react';
import './Search.css';
import {withRouter} from 'react-router-dom';
const lurl = "https://foodcourtrestapi.herokuapp.com/location";
const rurl = "https://foodcourtrestapi.herokuapp.com/restaurents?city=";


class Search extends Component {
    constructor() {
        super()
        this.state = {
            location: '',
            restaurants:''
        }
    }

    renderCity = (data)=>{                                    //display city data
        if(data){
             return data.map((item)=>{
                 return(
                 <option value={item.city}> {item.name} | {item.city_name}</option>
                 )
             })
        }
    }

    renderRestaurant = (data)=>{                               //display restro data
        if(data){
             return data.map((item)=>{
                 return(
                 <option  value= {item._id}> {item.name} | {item.locality}</option>
                 )
             })
        }
    } 

    handleCity = (event) =>  {
        // console.log(event.target.value)
        const cityid = event.target.value
        const finalDataurl = `${rurl}${cityid}`;
       
        fetch(finalDataurl , {method: 'GET'})
        .then((res) => res.json())
        .then((data)=>{this.setState({restaurants:data})})
    }

    handleRest =(event) => {
        // console.log(event.target.value)
         this.props.history.push(`/details/${event.target.value}`)
    }

   

    render() {
      
        return(
        <div className="imageContainer">
            <div id="logo">
                e!
            </div>
            <div className="heading">
                Find the best restaurants,cafes,bars
            </div>
            <div className="locationSelector">
                <select className="locationDropDown" onChange={this.handleCity}>
                    <option>-----SELECT CITY------</option>
                    {this.renderCity(this.state.location)}
                </select>

                <select className="locationDropDown" onChange={this.handleRest}>
                    <option>---SELECT RESTAURANTS---</option>
                    {this.renderRestaurant(this.state.restaurants)}
                </select>

               
                
            </div>
        </div>
        )
    }


    componentDidMount(){                                         //call city Api
        fetch(lurl , {method: 'GET'})
        .then((res) => res.json())
        .then((data)=>{this.setState({location:data})})
    }
}

export default withRouter (Search);
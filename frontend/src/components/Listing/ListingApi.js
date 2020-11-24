import React, { Component } from 'react';
import axios from 'axios';
import ListingDisplay from './ListingDisplay';
import SuggestionBlock from './SuggestionLogic';
import CostFilter from '../filters/costfilter';
import CuisineFilter from '../filters/cuisinefilter';
import SortFilter from '../filters/sortFilter';

const url = "https://foodcourtrestapi.herokuapp.com/restaurents?mealtype=";
const mealurl = "https://foodcourtrestapi.herokuapp.com/mealtype";

class ListingApi extends Component {
    constructor(props) {
        super()

        this.state = {
            hotelist: ''
        }
    }

    setDataAsPerFilter(sortedData) {
        this.setState({ hotelist: sortedData })
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-2">
                        <CostFilter costdata={(data) => { this.setDataAsPerFilter(data) }} />
                        <CuisineFilter cuisinedata={(data) => { this.setDataAsPerFilter(data) }}/>
                        <SortFilter sortdata={(data) => {this.setDataAsPerFilter(data)}}/>
                    </div>
                    <div className="col-md-10">
                        <ListingDisplay listdata={this.state.hotelist} />

                    </div>
                </div>
            </div>
        )
    }
    componentDidMount() {
        var mealid = this.props.match.params.id
        sessionStorage.setItem('mealid', mealid)
        axios.get(`${mealurl}`)
            .then((response) => {
                for (var i = 0; i < response.data.length; i++) {
                    if (response.data[i]._id == Number(mealid)) {
                        this.setState({ mealname: (response.data[i].name).toUpperCase() })
                        i = response.data.length;
                    } else {
                        this.setState({ mealname: 'Wrong Input' })
                    }
                }

            })
        axios.get(`${url}${mealid}`)
            .then((response) => { this.setState({ hotelist: response.data }) })
    }
}

export default ListingApi;


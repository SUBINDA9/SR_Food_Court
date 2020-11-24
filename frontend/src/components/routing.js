import React from 'react';
import { BrowserRouter, Route ,Link} from 'react-router-dom';
import RestListing from './Listing/ListingApi';
import Home from '../components/HomePage/Home'
import Header from './Header';
import Footer from './Footer';
import RestDetails from './details/RestaurentDetails';
import orders from './orders/bookingApi';
import Placeorder from './orders/bookingForm';

const Routing = () => {
    return (
        <BrowserRouter>
            <div>
                <Header/>
                <Route exact path='/' component={Home}></Route>
                <Route path='/list/:id' component={RestListing}></Route>
                <Route path='/details/:id' component={RestDetails}></Route>
                <Route path='/orders' component={orders}></Route>
                <Route path='/booking/:id' component={Placeorder}></Route>

                <Footer/>
            </div>
        </BrowserRouter>
    )
}

export default Routing;

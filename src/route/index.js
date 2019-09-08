import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Awnings from '../components/Awnings';
import Enclosure from '../components/Enclosure';
import Home from '../components/Home';
import ProductDetail from '../components/Products/ProductDetail';
import Products from '../components/Products/ProductsList';
import Upholstery from '../components/Upholstery';

const index = () => (
  <Switch>
    <Route exact path='/awnings' component={Awnings} />
    <Route exact path='/enclosure' component={Enclosure} />
    <Route exact path='/products' component={Products} />
    <Route exact path='/upholstery' component={Upholstery} />
    <Route path='/products/:productId' component={ProductDetail} />
    <Route exact path='/' component={Home} />
  </Switch>
);

export default index;

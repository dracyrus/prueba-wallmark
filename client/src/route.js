import React from "react";
import {Route, Switch, Redirect} from 'react-router-dom';

import ProductSearch from './containers/ProductSearch/ProductSearch';

const route = (
        <Switch>
            <Route path= "/" exact component={ProductSearch}/>
        </Switch>
    );

export default route;
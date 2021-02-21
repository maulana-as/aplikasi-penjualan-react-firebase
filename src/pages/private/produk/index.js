import React from 'react';
import { Route, Switch } from 'react-router-dom'
import Edit from './edit';
import Grid from './grid';

function Produk() {
    return (
        <Switch>
            <Route to="/produk/edit/:ProdukId" component={Edit} />
            <Route to="/produk" component={Grid} />
        </Switch>
    )
}

export default Produk;
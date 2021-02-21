import React from 'react'; 
import {Route, Redirect} from 'react-router-dom';

function PrivateRoute ({component: Component, ...restPrivateRoute}) { 

    const user = {name: "Adly"};
    return ( 
        <Route 
            {...restPrivateRoute}

            render = {props => { 
                return user ? 
                <Component {...props} />
                : 
                <Redirect to ={{
                    pathname:"/login"
                }}
                />
            }}
        />
    )

}
export default PrivateRoute;
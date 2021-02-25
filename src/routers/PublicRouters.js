import React from 'react'
import { Redirect, Route } from 'react-router-dom'

export const PublicRouters = ({ 
    isAuthenticated,
    component : Component,
    ...rest
 }) => {
    return (
        <div>
            <Route 
            { ...rest }
                render={
                ( ...props ) => (
                    ( isAuthenticated )
                    ? <Redirect to="/app" />
                    : <Component { ...props }  />
                )     
            }     
            />

        </div>
    )
}

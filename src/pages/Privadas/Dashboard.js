import React from "react";
import { Redirect, Route,  Switch } from "react-router-dom";
import { Navegacion } from "../../components/Navegacion";
import { Perfil } from "./Perfil";
import { Grupos } from "./Grupos"
import { Publicadores } from "./Publicadores"
import { SinglePub } from "./SinglePub";
import { SingleGrupo } from "./SingleGrupo";

export const Dashboard = () => {
  return (
    <>
        <Navegacion />
        
              <div className= "mt-5" >
                <Switch>
                
                  <Route exact path='/app/perfil' component={ Perfil }/ >
                  <Route exact path="/app/grupos" component={ Grupos }/ >
                  <Route exact path="/app/publicadores" component={ Publicadores }/ >
                  <Route exact path="/app/publicadores/:pubId" component={ SinglePub }/ >
                  <Route exact path="/app/grupos/:pubId" component={ SingleGrupo }/ >
  
                <Redirect to="/app/grupos" />
            </Switch>
         </div>
    </>
  );
};

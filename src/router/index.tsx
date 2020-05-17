
import React from 'react';
import {
    HashRouter as Router,
    Switch,
    Route,
    Redirect ,
  } from "react-router-dom";

  import Layout from 'layout/App';
  import Api from 'pages/Api';
  import Code from 'pages/Code';
  import Doc from 'pages/Doc';


export default ()=>(
    <Router>
        <Switch>
            <Layout>           
                
                <Route exact path="/api" component={Api}></Route>
                <Route exact path="/doc" component={Doc}></Route>
                <Route exact path="/code" component={Code}></Route>    
                <Route exact  path="/"  render={()=>( <Redirect to="/code" push/> )}/>        
            </Layout>
        </Switch>
    </Router>
)
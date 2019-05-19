import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import './App.css';
import Login from './Components/Login/Login';
import HeaderComponent from './Components/Header/Header';
import Index from './Components/Index/Index';
import 'antd/dist/antd.css';
import {Layout} from "antd";

class App extends Component{
    constructor(props){
        super(props);
    }
    render() {
        return (
            <Router>
                <Layout>
                    <div className="App">
                        <HeaderComponent />
                        <Route path="/login" exact component={Login}/>
                        <Route path="/" exact component={Index}/>
                        <Route path="/about" exact component={Login}/>
                        <Route path="/contact" exact component={Login}/>
                    </div>
                </Layout>
            </Router>
        );
    }
}

export default App;

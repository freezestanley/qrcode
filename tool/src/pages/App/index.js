import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Products from '@P/Products';
import Home from '@P/Home';
import Detail from '@P/Detail';
import Success from '@P/Success';
import { DatePicker } from 'antd';
// import 'antd/dist/antd.less';
import '@A/less/index.less';

function App({baseUrl}) {
    return (
        <Router basename={baseUrl}>
            <div className={`App`}>
                <div><DatePicker/></div>
                <Route path="/" exact component={Products} />
                <Route path="/home" component={Home} />
                <Route path="/detail" component={Detail} />
                <Route path="/success" component={Success} />
            </div>
        </Router>
    )
}

export default App;
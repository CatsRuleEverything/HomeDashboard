import { HashRouter as Router, Redirect, Route, Switch } from "react-router-dom";
import { useState } from "react";
//
import Home from '../views/Home/Home';
import Video from '../views/Video/Video';
import Add from '../views/Add/Add';
import Info from '../views/Info/Info';
// import {Routes, Route, Link} from 'react-router-dom'

const App = function () {
	// const [name, setName] = useState();

	return (
		<div className="App">
			<Router>
				<Switch>
					<Route path="/" exact>
						<Home />
					</Route>
					<Route path="/home" exact>
						<Home />
					</Route>
					<Route path="/video" exact>
						<Video />
					</Route>
					<Route path="/add" exact>
						<Add />
					</Route>
					<Route path="/info" exact>
						<Info />
					</Route>
				</Switch>
			</Router>
		</div>
	);
};

export default App;
export {App};
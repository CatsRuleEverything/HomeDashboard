import { HashRouter as Router, Redirect, Switch } from "react-router-dom";
import { useState } from "react";

import Home from '../views/Home/Home';
import Video from '../views/Video/Video';
import {Routes, Route, Link} from 'react-router-dom'

const App = function () {
	// const [name, setName] = useState();

	return (
		<div className="App">
			<Router>
				<Routes>
					<Route path="/" element={<Home/>}/>
					<Route path="/video" element={<Video/>}/>
				</Routes>
			</Router>
			{/* <Router>
				<Switch>
					<Route exact>
						<Home />
					</Route>
					<Route path="/Video">
						<Video />
					</Route>

					<Redirect to="/" />
				</Switch>
			</Router> */}
		</div>
	)
}

export default App;
export {App};
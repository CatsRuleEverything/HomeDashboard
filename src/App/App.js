import { HashRouter as Router, Redirect, Route, Switch } from "react-router-dom";
import { useState } from "react";

import Home from '../views/Home/Home';
import Video from '../views/Video/Video';

const App = function () {
	// const [name, setName] = useState();

	return (
		<div>
			<Router>
				<Switch>
					<Route exact>
						<Home />
					</Route>
					<Route path="/video">
						<Video />
					</Route>

					<Redirect to="/" />
				</Switch>
			</Router>
		</div>
	)
}

export default App;
export {App};
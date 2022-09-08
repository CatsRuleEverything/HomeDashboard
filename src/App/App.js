import { HashRouter as Router, Redirect, Route, Switch } from "react-router-dom";
import { useState } from "react";

import Home from '../views/Home/Home';

const App = function () {
	// const [name, setName] = useState();

	return (
		<div>
			<Router>
				<Switch>
					<Route exact>
						<Home />
					</Route>

					<Redirect to="/" />
				</Switch>
			</Router>
		</div>
	)
}

export default App;
export {App};
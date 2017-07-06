import React from 'react';
import { Route, Switch, IndexRoute} from 'react-router-dom';
import FilterableTable from './containers/FilterableTable';
import About from './components/About';
import Sportsbook from './components/Sportsbook';
import Game from './components/Game';


export default (

		<Route path="/" component={FilterableTable}>
		<IndexRoute component={Sportsbook} />
		<Route path="/games" component={Game}/>
		</Route>

);

//	<Route path="/about" component={About} />

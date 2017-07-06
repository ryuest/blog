import React from 'react';
import {Provider} from 'react-redux';
import {Route, IndexRoute, Switch} from 'react-router-dom';
import {ConnectedRouter} from 'react-router-redux';

import FilterableTable from './FilterableTable'
import Sportsbook from '../components/Sportsbook';
import Game from '../components/Game';
import '../styles/style.styl';

export default function Root({store, history}) {
    return (
        <Provider store={store}>
          <ConnectedRouter history={history} >
            <div>

                  <Route path="/" component={FilterableTable}>
                  <IndexRoute component={Sportsbook} />
                  </Route>


            </div>
              </ConnectedRouter>
        </Provider>
    );
}
//<Route path="/games" component={Game}/>

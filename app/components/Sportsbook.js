import React, {Component} from 'react';
import LeftMenuPageItem from './LeftMenuPageItem';
import CenterTabs from './CenterTabs';
import RightPanel from './RightPanel';
import Account from './Account';
import {Route, IndexRoute, Switch} from 'react-router-dom';
import Game from './Game';

import App from './App';

const Sportsbook = ({ log, posts, pages, getSelection, selections, removeSelection, betslip, disableReceipt,
clearBets, getReceipt, placeBet, stakes }) => {

        return (
            <div className="off-canvas_inner-wrapper">
                <aside className="off-canvas_left">
                    <div className="left-nav">
                        <nav>
                            <ul className="c-list-icon">
                          {Object.keys(pages).map((key, i) => (<LeftMenuPageItem key={i} details={pages[key]}/>))}
                                <li className="c-list_item">
                                    <a className="c-list_external"
                                      href="https://github.com/ryuest/mine-portfolio-final"
                                      title="GitHub" id="nav-github">GitHub
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </aside>
                <div className="off-canvas_main">
                  <Route exact path='/games' render={(props) => (
                    <Game {...props} posts={posts} log={log} />)}/>
                    <Route exact path='/login' component={Account}/> 
                    <CenterTabs
                      getSelection={getSelection}
                      selections={selections}
                      removeSelection={removeSelection}
                      betslip={betslip}
                      disableReceipt={disableReceipt}/>

                </div>
                <div className="off-canvas_right">
                    <RightPanel
                      selections={selections}
                      clearBets={clearBets}
                      getReceipt={getReceipt}
                      betslip={betslip}
                      disableReceipt={disableReceipt}
                      placeBet={placeBet}
                      stakes={stakes}/>
                </div>
            </div>
          );
      };

  export default Sportsbook;

  //<Route path="/games" component={Game} posts={posts}/>

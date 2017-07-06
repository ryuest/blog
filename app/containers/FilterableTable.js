import React from 'react';
import {connect} from 'react-redux';
//import { filterTable } from '../actions';
import actions from '../actions/actionCreators';
import ProductTable from '../components/ProductTable';
import {selectorsPost} from '../reducers/posts';
import {bindActionCreators} from 'redux';
import navPages from '../data/navPages';
import LeftMenuPageItem from '../components/LeftMenuPageItem';
import CenterTabs from '../components/CenterTabs';
import RightPanel from '../components/RightPanel';
import Account from '../components/Account';
import Main from './Main';
import Sportsbook from '../components/Sportsbook';


const mapStateToProps = (state) => ({
    filter: state.filter,
    pages: navPages,
    posts: selectorsPost.getPosts(state.posts),
    selections: state.selections,
    betslip: state.betslip,
    stakes: state.stakes
});

function mapDispachToProps(dispatch) {
  return bindActionCreators(actions, dispatch);
}

export default connect(mapStateToProps, mapDispachToProps)(Sportsbook);

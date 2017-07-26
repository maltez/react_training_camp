import React, { Component } from 'react';
import { About } from './about';

import { Link, Switch, Route } from 'react-router-dom';
import { Post } from './posts'
import { Post1 } from './post1'
import { Post2} from './post2'


export class App extends Component {
    render() {
        return <div>
        <div>
            <Link to='/about'> Main </Link>
            <br />
            <Link to='/post'> Post </Link>
            <br />
            <Link to='/post1'> Post1 </Link>
            <br />
            <Link to='/post2'> Post2 </Link>
        </div>
            
        <Switch>
            <Route exact path='/about' component={About}/>
            <Route exact path='/post' component={Post}/>
            <Route path='/post1' component={Post1}/>
            <Route path='/post2' component={Post2}/>
        </Switch>
        
    </div>;
    }
}





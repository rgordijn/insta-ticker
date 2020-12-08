import React, {Component} from 'react';
import Header from './Header';
import FlipClock from './FlipClock';

class App extends Component{
    render(){
        return(
            <div>
                <Header />
                <FlipClock />
            </div>
        );
    }
}
export default App;
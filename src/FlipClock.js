import React, {Component} from 'react';
import FlipUnitContainer from './FlipUnitContainer';

class FlipClock extends Component{
    constructor(props) {
        super(props);
        this.state = {
            first: 0,
            second: 0,
            third: 0,
            fourth: 0,
            fifth: 0,
            firstShuffle: true,
            secondShuffle: true,
            thirdShuffle: true,
            fourthShuffle: true,
            fifthShuffle: true
        };
    }
  
    componentDidMount() {
        //run 1 time at load then only with interval
        this.updateFollowCount();

        this.timerID = setInterval(
            () => this.updateFollowCount(),
            60000
        );
    }
  
    componentWillUnmount() {
        clearInterval(this.timerID);
    }
  
    //update time moet ik aanpassen naar ophalen van folowers en json laden in de state
    updateFollowCount() {
        // get new folower count
        let follow_count = 1337;

        // fetch("https://www.instagram.com/amehoela.studio/?__a=1")
        //     .then(response => response.json())
        //     .then((jsonData) => {
        //         // jsonData is parsed json object received from url
        //         console.log(jsonData)
        //         console.log(jsonData.graphql.user.edge_followed_by.count)
        //         follow_count = jsonData.graphql.user.edge_followed_by.count;
        //     })
        //     .catch((error) => {
        //         // handle your errors here
        //         console.error(error)
        //         follow_count = 1337;
        //     })

        // var request = require('request');

        // var url = "https://www.instagram.com/mr.curtainn";
        // request.get(url, function(err, response, body){
        //     if(response.body.indexOf(("meta property=\"og:description\" content=\"")) != -1){
        //         console.log("followers:", response.body.split("meta property=\"og:description\" content=\"")[1].split("Followers")[0])
        //     }
        // });

        let digitArray = (""+follow_count).split("");

        // set place units
        let i = 0;
        let first = 0;
        if(digitArray.length > 4)
            first = digitArray[i++];
        let second = digitArray[i++];
        let third = digitArray[i++];
        let fourth = digitArray[i++];
        let fifth = digitArray[i++];

        // on first chanage, update first and shuffle state
        if( first !== this.state.first) {
            const firstShuffle = !this.state.firstShuffle;
            this.setState({
                first,
                firstShuffle
            });
        }

        // on second chanage, update second and shuffle state
        if( second !== this.state.second) {
            const secondShuffle = !this.state.secondShuffle;
            this.setState({
                second,
                secondShuffle
            });
        }

        // on third change, update third and shuffle state
        if( third !== this.state.third) {
            const thirdShuffle = !this.state.thirdShuffle;
            this.setState({
                third,
                thirdShuffle
            });
        }

        // on fourth change, update fourth and shuffle state
        if( fourth !== this.state.fourth) {
            const fourthShuffle = !this.state.fourthShuffle;
            this.setState({
                fourth,
                fourthShuffle
            });
        }

        // on fifth change, update fifth and shuffle state
        if( fifth !== this.state.fifth) {
            const fifthShuffle = !this.state.fifthShuffle;
            this.setState({
                fifth,
                fifthShuffle
            });
        }
    }
  
    render() {
    
      // state object destructuring
      const { 
        first,
        second,
        third,
        fourth,
        fifth,
        firstShuffle,
        secondShuffle,
        thirdShuffle,
        fourthShuffle,
        fifthShuffle,
      } = this.state;
        
    return(
            <div className={'flipClock'}>
                <FlipUnitContainer 
                    digit={first} 
                    shuffle={firstShuffle} 
                    />
                <FlipUnitContainer 
                    digit={second} 
                    shuffle={secondShuffle} 
                    />
                <FlipUnitContainer 
                    digit={third} 
                    shuffle={thirdShuffle} 
                    />
                <FlipUnitContainer 
                    digit={fourth} 
                    shuffle={fourthShuffle} 
                    />
                <FlipUnitContainer 
                    digit={fifth} 
                    shuffle={fifthShuffle} 
                    />
            </div>
        );
    }

}
export default FlipClock;
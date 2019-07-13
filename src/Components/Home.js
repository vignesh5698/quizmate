import React, { Component } from 'react';
import TakeQuiz from './TakeQuiz';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Home extends Component {
    state = {  }

    styles = {
        marginTop: "2%",
        marginRight: "10%",
        marginLeft: "10%"
    }

    onTakeQuiz = () => {
        return <TakeQuiz/>
    }

    render() { 
        return ( 
            <div>
                <div className="card" style={this.styles}>
                    <div className="card-body">
                        <h3 className="card-title">Quiz Mate</h3>
                        <div>
                            <Router>
                                <Link to="/take-quiz"> TakeQuiz </Link>
                                <Route path="/take-quiz" component={TakeQuiz} />
                            </Router>
                        </div>
                    </div>
                </div>
                
            </div>
         );
    }
}
 
export default Home;

import React from 'react';

/*
Displays the types of cheeses available at our store
*/
class CheeseTypes extends React.Component{
    constructor(){
        super();
        this.state = {
            cheeseTypes: [
                {name: "cheddar", description: "A relatively hard, off-white, sometimes sharp-tasting, natural cheese.", price: "$4.00"},
                {name: "parmesan", description: "An Italian hard, granular cheese."},
                {name: "gouda", description: "A mild, yellow cheese, originating from the Netherlands, made from cow's milk.", price: "$4.25"},
                {name: "pepper jack", description: "An American white, semi-hard cheese made using cow's milk.", price: "$1.20"},
                {name: "provolone", description: "An aged pasta filata cheese originating in Casilli near Vesuvius.", price: "$500.01"},
            ]
        }
    }

    render(){
        // currently only shows the first cheese's name (cheddar)
        return(
            <div>
                <h1>Cheeses We Offer!</h1>
                {
                    this.state.cheeseTypes ?
                        this.state.cheeseTypes.map(cheese => 
                            <div>
                                <h3>{cheese.name}</h3>
                                <p>{cheese.description}</p>
                                <p>{cheese.price}</p>
                            </div>    
                        )
                        : null
                }
            </div>
        );
    }
}

export default CheeseTypes;
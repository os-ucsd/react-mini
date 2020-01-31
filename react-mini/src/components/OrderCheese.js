import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

class OrderCheese extends React.Component {
    constructor() {
        super();
        this.state = {
            name: "",
            address: "",
            quantity: "",
            cheese_type: "",
            showOrder: false
        }
    }

    submitForm = (e) => {
        e.preventDefault();
        console.log(e.target)
        this.setState({
            name: e.target[0].value,
            address: e.target[2].value,
            cheese_type: e.target[4].value,
            quantity: e.target[6].value,
            showOrder: true
        })
    }

    render() {
        return(
            <div>
                <h1>Order Some Cheese yo</h1>
                <form noValidate autoComplete="off" onSubmit={this.submitForm}>
                    <TextField id="name" label="Name" variant="outlined" />
                    <br/>
                    <br/>
                    <TextField id="address" label="Address" variant="outlined" />
                    <br/>
                    <br/>
                    <TextField
                        id="cheese"
                        select
                        label="Type of Cheese"
                        SelectProps={{
                            native: true,
                        }}
                        helperText="Please select your cheese"
                        variant="outlined"
                        >
                            <option>cheddar</option>
                            <option>parmesan</option>
                            <option>gouda</option>
                            <option>pepper jack</option>
                            <option>provolone</option>
                        </TextField>
                        <br/>
                        <br/>
                        <TextField id="quantity" label="Quantity" variant="outlined" name="quantity"/>
                        <br/>
                        <br/>
                        <Button variant="contained" color="primary" type="submit">
                            Submit
                        </Button>
                        <br/>
                        <br/>
                        { this.state.showOrder ? <h3>{this.state.quantity} order of {this.state.cheese_type} for {this.state.name}, sent to {this.state.address}</h3> : null }
                </form>
            </div>
        )
    }

}

export default OrderCheese;
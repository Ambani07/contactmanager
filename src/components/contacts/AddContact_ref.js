import React, { Component } from 'react'

class AddContact extends Component {
    constructor() {
        super();

        const props = this.props;

        this.nameInput = React.createRef();
        this.emailInput = React.createRef();
        this.phoneInput = React.createRef();
    }

    onSubmit = e => {
        e.preventDefault();
        const contact = {
            name: this.nameInput.current.value,
            email: this.emailInput.current.value,
            phone: this.phoneInput.current.value
        }

        console.log(contact);
    }

    static defaultProps = {
        name: 'Fred smith',
        email: 'fred@gmail.com',
        phone: '4654654665'
    }

    render() {
        const { name, email, phone } = this.props;
        return (
            <div className="card mb-3">
                <div className="card-header">Add Contact</div>
                <div className="card-body">
                    <form onSubmit={this.onSubmit}>
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input type="text" className="form-control" placeholder="Enter Name..." name="name" defaultValue={name} ref={this.nameInput} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input type="email" className="form-control" placeholder="Enter Email..." name="email" defaultValue={email} ref={this.emailInput} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="phone">Phone</label>
                            <input type="text" className="form-control" placeholder="Enter Phone..." name="phone" defaultValue={phone} ref={this.phoneInput} />
                        </div>
                        <input type="submit" defaultValue="Add Contact" className="btn btn-light btn-block"/>
                    </form>
                </div>
            </div>
        )
    }
}

export default AddContact;
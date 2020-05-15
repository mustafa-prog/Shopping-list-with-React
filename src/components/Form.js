import React from 'react';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newItem: '',
    };
  }

  handleChange = (evt) => {
    const value = evt.target.value;
    this.setState({ newItem: value });
  };

  handleSubmit = (evt) => {
    evt.preventDefault();
    this.props.addItem(this.state.newItem);
    this.setState({ newItem: '' });
  };

  render() {
    return (
      <form className="mb-4" onSubmit={this.handleSubmit}>
        <div className="input-group mb-3 px-2">
          <input
            type="text"
            className="form-control"
            aria-describedby="button-addon2"
            placeholder="Enter an item"
            onChange={this.handleChange}
            value={this.state.newItem}
          />
          <div className="input-group-append">
            <button
              className="btn btn-primary"
              type="submit"
              id="button-addon2"
            >
              Add
            </button>
          </div>
        </div>
      </form>
    );
  }
}

export default Form;

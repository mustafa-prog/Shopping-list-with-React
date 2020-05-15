import React from 'react';
import Form from './components/Form';
import ToBuy from './components/ToBuy';
import InCart from './components/InCart';
import { v4 as uuidv4 } from 'uuid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faListAlt } from '@fortawesome/free-solid-svg-icons';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './App.css';
import Empty from './components/Empty';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
    };
  }

  addItem = (text) => {
    const newItem = {
      id: uuidv4(),
      value: text,
      done: false,
    };
    this.setState({ items: [...this.state.items, newItem] });
  };

  toggleItem = (id) => {
    const newState = this.state.items.map((item) =>
      item.id === id ? { ...item, done: !item.done } : item
    );
    this.setState({ items: newState });
  };

  handleDelete = (id) => {
    const confirm = window.confirm('Are you sure that you want to delete?');
    if (confirm) {
      const newState = this.state.items.filter((item) => item.id !== id);
      this.setState({ items: newState });
    }
  };

  changeItem = (evt, id) => {
    const newState = this.state.items.map((item) => {
      const value = evt.target.value;
      return item.id === id ? { ...item, value: value } : item;
    });
    this.setState({ items: newState });
  };

  render() {
    const toBuyItems = this.state.items.filter((item) => item.done === false);
    const InCartItems = this.state.items.filter((item) => item.done === true);

    return (
      <div className="App container-sm">
        <h1 className="my-3">SHOPPING LIST</h1>
        <Form addItem={this.addItem} />
        <h4 className="text-left m-2">
          <FontAwesomeIcon icon={faListAlt} /> To Buy(
          {toBuyItems.length})
        </h4>
        {toBuyItems.length === 0 ? (
          <Empty />
        ) : (
          <ToBuy
            items={toBuyItems}
            onToggle={this.toggleItem}
            onDelete={this.handleDelete}
            changeItem={this.changeItem}
          />
        )}
        <h4 className="text-left m-2">
          <FontAwesomeIcon icon={faShoppingCart} />
          In Cart({InCartItems.length})
        </h4>
        {InCartItems.length === 0 ? (
          <Empty />
        ) : (
          <InCart
            items={InCartItems}
            onToggle={this.toggleItem}
            onDelete={this.handleDelete}
            changeItem={this.changeItem}
          />
        )}
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import Gift from './Gift';
import { max_number } from '../helper/index';

class App extends Component {
  constructor() {
    super();
    this.state = {
      gifts: []
    }
  }

  addGift = () => {
    this.setState((prevState) => {
      const ids = prevState.gifts.map(g => g.id);

      return { ...prevState, gifts: [...prevState.gifts, { id: max_number(ids) + 1 }] };
    });
  }

  removeGift = id => {
    this.setState((prevState) => {
      return { ...prevState, gifts: [...prevState.gifts.filter(g => g.id !== id)] };
    })
  }

  render() {
    return (
      <div>
        <h2>Gift Giver</h2>
        <div className='gift-list'>
          {
            this.state.gifts.map(gift => {
              return (
                <Gift
                  key={gift.id}
                  gift={gift}
                  removeGift={this.removeGift}
                />
              )
            })
          }
        </div>
        <Button className='btn-add' onClick={this.addGift}>Add Gift</Button>
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import { Card, Button } from 'antd';
import { connect } from 'dva';

const namespace = 'puzzlecards';

const mapStateToProps = (state) => {
  const cardList = state[namespace].data;
  return {
    cardList,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onClickAdd: (newCard) => {
      const action = {
        type: `${namespace}/addNewCard`,
        payload: newCard,
      }
      dispatch(action);
    }
  }
}

class PuzzleCardsPage extends Component {
  render() {
    let btnClass = {
      marginTop: '10px'
    };
    return (
      <div>
        {
          this.props.cardList.map(card => {
            return (
              <Card key={card.id}>
                <div>Q: {card.setup}</div>
                <div>
                  <strong>A: {card.punchline}</strong>
                </div>
              </Card>
            );
          })
        }
        <div style={btnClass}>
          <Button onClick={() => this.props.onClickAdd({
            setup: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit', 
            punchline: 'here we use dva'
            })}>添加卡片</Button>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PuzzleCardsPage);
import React from 'react';
import { Table } from 'antd';
import { connect } from 'dva';

function mapStateToProps(state) {
    return {
      cardsList: state.cards.cardsList,
      cardsLoading: state.loading.effects['cards/queryList'],
    };
}

class List extends React.Component {

    componentDidMount() {
        this.props.dispatch({
            type: 'cards/queryList',
        });
    }

    render() {
        const { cardsList, cardsLoading } = this.props;

        const columns = [
            {
                title: '名称',
                dataIndex: 'name',
            },
            {
                title: '描述',
                dataIndex: 'desc',
            },
            {
                title: '链接',
                dataIndex: 'url',
                render: value => { <a href={value} target='_blank'>{value}</a> },
            }
        ];

        return (
            <div>
                <Table columns={columns} dataSource={cardsList} loading={cardsLoading} rowKey="id" />
            </div>
        );
    }
}

export default connect(mapStateToProps)(List);
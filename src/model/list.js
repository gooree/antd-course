import request from '../utils/request';
import delay from '../utils/delay';

export default {
    namespace: 'cards',
    state: {
        cardsList: []
    },
    effects: {
        *queryList(_, {call, put}) {
            const resp = yield call(request, '/api/cards');
            console.log('queryList');
            console.log(resp);
            yield call(delay, 1000);
            yield put({
                type: 'initList',
                payload: { cardsList: resp.result }
            });
        },
        *addCard({ payload }, { call, put }) {
            const rsp = yield call(request, '/api/cards/add', {
                headers: {
                  'content-type': 'application/json',
                },
                method: 'POST',
                body: JSON.stringify(payload),
            });
            yield call(delay, 1000);
            yield put({ 
                type: 'queryList'
            });
        },
    },
    reducers: {
        initList(state, { payload: { cardsList } }) {
            console.log('initList');
            console.log(state);
            console.log(cardsList);
            return {
                ...state,
                cardsList
            };
        }
    }
};
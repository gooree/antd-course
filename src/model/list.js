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
        }
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
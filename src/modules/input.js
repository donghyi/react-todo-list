//redux ducks 구조 (action, reduce를 한파일안에 생성)

import { Map } from 'immutable';
import { handleActions, createAction } from 'redux-actions';

//액션타입을 정의할 때는 이처럼 문자열의 앞부분에 리듀서 이름을 적어준다.
const SET_INPUT = 'input/SET_INPUT'

export const setInput = createAction(SET_INPUT);

//리듀서 초기상태를 정의
const initialState = Map({
    value : ''
});

//리듀서 생성 (handleActions로 만듬)
export default handleActions({
    [SET_INPUT] : (state, action) => {
        return state.set('value', action.payload)
    }
}, initialState);
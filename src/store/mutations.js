import {SELECT_PERSON} from './mutation-types';

export default {
    [SELECT_PERSON](state, selectedIndex) {
        state.selectedPerson = selectedIndex
    }
};

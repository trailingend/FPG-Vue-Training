import {SELECT_PERSON, SELECT_TRAIT} from './mutation-types';

export default {
    [SELECT_PERSON](state, selectedIndex) {
        state.selectedPerson = selectedIndex
    },
    [SELECT_TRAIT](state, selectedIndex) {
        state.selectedTrait = selectedIndex
    }
};

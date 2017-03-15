import Vue from 'vue';
import VueResource from 'vue-resource';
import {SELECT_PERSON, SELECT_TRAIT} from './mutation-types';

export default {
    handleSelectPerson({commit, state}, selectedIndex) {
        if (state.selectedPerson !== selectedIndex) {
            commit(SELECT_PERSON, selectedIndex);
        }
    },

    handleSelectTrait({commit, state}, selectedIndex) {
        if (state.selectedTrait !== selectedIndex) {
            commit(SELECT_TRAIT, selectedIndex);
        }
    }
}

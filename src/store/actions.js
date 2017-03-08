import Vue from 'vue';
import VueResource from 'vue-resource';
import {SELECT_PERSON} from './mutation-types';

export default {
    handleSelectPerson({commit, state}, selectedIndex) {
        if (state.selectedPerson !== selectedIndex) {
            commit(SELECT_PERSON, selectedIndex);
        }
    }
}

<template>
    <div class="dtl-ctnr">
        <h2 class="page-title person-title">Who are you shopping for?</h2>
        <ul class="person-ul">
            <li v-for="(person, index) in persons"
                :key="person.id"
                :class="['person-li', {'active': index === selectedIndex}]"
                @mouseenter=""
                @click="selectPerson(index)"
            >
                <div class="person-thumb">
                    <img :src="person.avatar" />
                </div>
                <div class="person-title">{{person.name}}</div>
            </li>
        </ul>
        <button class="next-button person-next-button"
                v-if="selectedIndex!=-1">
            <router-link :to="{ path: 'trait' }">Next</router-link>
        </button>
        <button class="next-button disabled person-next-button"
                v-if="selectedIndex===-1">
            <span>Next</span>
        </button>
    </div>
</template>

<script>
    import { mapGetters, mapActions } from 'vuex';
    export default {
        data() {
            return {
                selectedIndex: -1,
            }
        },
        computed: {
            ...mapGetters([
                'persons',
            ]),
        },
        methods: {
            ...mapActions([
                'handleSelectPerson'
            ]),
            selectPerson(index) {
                this.selectedIndex = index;
                console.log(this.selectedIndex);
                this.handleSelectPerson(this.selectedIndex);
                // this.$router.push({
                //     name: 'trait',
                //     // query: {
                //     //     person: this.selectedIndex,
                //     // },
                // });
            },
        }
    }
</script>

<template>
    <div class="dtl-ctnr">
        <h3>detail here</h3>
        <ul>
            <li v-for="(person, index) in persons"
                :key="person.id"
                :class="['person', {'active': index === selectedIndex}]"
                @mouseenter=""
                @click="selectPerson(index)"
            >{{person.name}}</li>
        </ul>
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
            },
        }
    }
</script>

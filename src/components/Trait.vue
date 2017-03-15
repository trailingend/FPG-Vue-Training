<template>
    <div class="dtl-ctnr">
        <h2>Select Trait from below</h2>
        <p>Click one of the choices to go next</p>
        <ul>
            <li v-for="(trait, index) in traits"
                :key="trait.id"
                :class="['trait', {'active': index === selectedIndex}]"
                @mouseenter=""
                @click="selectTrait(index)"
            >{{trait.name}}</li>
        </ul>
    </div>
</template>

<script>
    import { mapGetters, mapActions } from 'vuex';
    export default {
        data() {
            return {
                selectedIndex: -1
            }
        },
        computed: {
            ...mapGetters([
                'traits'
            ]),
        },
        methods: {
            ...mapActions([
                'handleSelectTrait'
            ]),
            selectTrait(index) {
                this.selectedIndex = index;
                console.log(this.selectedIndex);
                this.handleSelectTrait(this.selectedIndex);
                this.$router.push({
                    name: 'entry',
                    query: {
                        trait: this.selectedIndex,
                    },
                });
            },
        }
    }
</script>

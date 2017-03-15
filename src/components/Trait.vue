<template>
    <div class="dtl-ctnr">
        <h2 class="page-title trait-title">What is your XXX like?</h2>
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
                selectedCount: -1,
                selectedIndex: []
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
                this.selectedCount++;
                this.selectedIndex.push(index);
                this.handleSelectTrait(this.selectedIndex);
                // this.$router.push({
                //     name: 'entry',
                //     // query: {
                //     //     trait: this.selectedIndex,
                //     // },
                // });
            },
        }
    }
</script>

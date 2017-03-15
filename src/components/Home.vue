<template>
    <div class="dtl-ctnr">
        <!-- <h2>Entry Screen</h2> -->
        <div class="home-logo home-vert-sec">
            <img src="images/logo.png" />
        </div>
        <div class="home-illu home-vert-sec">
            <img src="images/home.gif" />
        </div>
        <button class="next-button home-next-button home-vert-sec">
            <router-link :to="{ path: 'person' }">Next</router-link>
        </button>
    </div>
</template>

<script>
    import { mapGetters, mapActions } from 'vuex';
    export default {
        data() {
            return {
            }
        },
        computed: {
            ...mapGetters([
            ]),
        },
        methods: {
            ...mapActions([
            ]),
        }
    }
</script>

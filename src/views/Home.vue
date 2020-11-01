<template>
    <div>
        <h1>Home</h1>
        <button @click="toUsers">USERSへ行く</button>
        <p>{{ doubleCount }}</p>
    </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
    computed: mapGetters(['doubleCount']),
    methods: {
        toUsers() {
            this.$router.push({
                name: 'user-profile',
                params: { 'id': 1 }
            })
        }
    }
}
</script>
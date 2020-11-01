<template>
    <div>
        <h2>Home</h2>
        <nav>
            <router-link to="/" class="link" active-class="link--active" exact>HOME</router-link>
            <router-link to="/users" class="link" active-class="link--active" exact>USERS</router-link>
            <button @click="increment">+1</button>
            <button @click="decrement">-1</button>
        </nav>
    </div>
</template>

<script>
export default {
  methods: {
    increment() {
      this.$store.commit('increment', 2);
    },
    decrement() {
      this.$store.commit('decrement', 2);
    }
  }
}
</script>

<style scoped>
  .link {
    margin-right: 10px;
  }
  .link--active {
    font-size: 20px;
  }
</style>
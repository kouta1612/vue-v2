<template>
  <div>
    <header>
      <template v-if="isAuthenticated">
        <router-link to="/" class="header-item">掲示板</router-link>    
      </template>
      <template v-if="!isAuthenticated">
        <router-link to="/login" class="header-item">ログイン</router-link>
        <router-link to="/register" class="header-item">登録</router-link>    
      </template>
    </header>
    <router-view></router-view>
  </div>  
</template>

<script>
export default {
  computed: {
    isAuthenticated() {
      return this.$store.getters.idToken !== null;
    }
  }
}
</script>

<style scoped>
  .header-item {
    padding: 10px;
  }
</style>
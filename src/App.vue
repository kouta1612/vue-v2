<template>
  <div>
    <header>
      <router-link to="/" class="header-item">掲示板</router-link>
      <router-link to="/login" class="header-item">ログイン</router-link>
      <router-link to="/register" class="header-item">登録</router-link>
    </header>
    <router-view></router-view>
  </div>  
</template>

<style scoped>
  .header-item {
    padding: 10px;
  }
</style>
<template>
    <div>
        <h2>Home</h2>
        <nav>
            <router-link to="/" class="link" active-class="link--active" exact>HOME</router-link>
            <router-link to="/users" class="link" active-class="link--active" exact>USERS</router-link>
        </nav>
    </div>
</template>


<style scoped>
  .link {
    margin-right: 10px;
  }
  .link--active {
    font-size: 20px;
  }
</style>
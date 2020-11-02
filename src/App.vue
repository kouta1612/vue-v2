<template>
  <div>
    <router-view name="header"></router-view>
    <router-view></router-view>
    <h3>掲示板に投稿する</h3>
    <label for="name">ニックネーム：</label>
    <input type="text" id="name" v-model="name">
    <br><br>
    <label for="comment">コメント</label>
    <textarea name="" id="comment" v-model="comment"></textarea>
    <button @click="createComment">コメントをサーバーに送る</button>
    <h2>掲示板</h2>
    <div v-for="post in posts" :key="post.name">
      <br>
      <div>名前：{{post.fields.name.stringValue}}</div>
      <div>コメント：{{post.fields.comment.stringValue}}</div>
    </div>
  </div>  
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      name: "",
      comment: "",
      posts:[]
    }
  },
  created() {
    axios.get(
      'https://firestore.googleapis.com/v1/projects/vuejs-http-25e2b/databases/(default)/documents/comments'
    ).then(response => {
      this.posts = response.data.documents;
    });
  },
  methods: {
    createComment() {
      axios.post('https://firestore.googleapis.com/v1/projects/vuejs-http-25e2b/databases/(default)/documents/comments',
      {
        fields: {
          name: {
            stringValue: this.name
          },
          comment: {
            stringValue: this.comment
          }
        }
      });
    }
  }
}
</script>
<template>
  <div>
      <div v-for="(value, key, index) in shares" :key="index">
        <div class="message">
          <div class="flex">
            <p class="name">{{value.name}}</p>
            <img src="../assets/heart.png" alt="" class="icon">
            <p class="number">{{value.like.length}}</p>
            <img src="../assets/cross.png" alt="" class="icon">
            <img src="../assets/detail.png" alt="" class="icon detail">
          </div>
          <p class="text">{{value.share}}</p>
        </div>
      </div>
   </div>
</template>

<script>
export default {
  data(){
    return{
      shares:[{
        name: "太郎", 
        like: [], 
        share: "初めまして"  
      }
      ]
    };
  }
}
</script>

<style scoped>
  .flex{
    display: flex;
  }
  .detail{
    margin-left:50px;
  }
  .message{
    padding: 20px;
    border-bottom: 1px solid white;
    border-left:1px solid white ;
  }
  .name{
    font-size: 18px;
    font-weight: bold;
    margin-right: 10px;
  }
  .text{
    margin-top: 10px;
  }
  .number{
    margin: 0 10px;
  }
</style>


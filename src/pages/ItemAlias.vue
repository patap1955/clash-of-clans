<template>
  <div class="wrapper-person">
    <div>
      <img :src="item.img" :alt="item.title">
      <h1 style="color: #ffffff" class="title">{{ item.title }}</h1>
      <p>{{ item.desc }}</p>
      <br />
      <Stats :stats="item.info" />
      <br />
      <div>
        <router-link to="/" class="btn btnPrimary">Вернуться на главную</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import Items from "@/seeders/items";
import items from "@/seeders/items";
import Stats from "@/components/UI/Stats";

export default {
  name: "ItemAlias",
  components: {Stats},
  data() {
    return {
      item: null
    }
  },
  created() {
    const alias = this.$route.params.itemAlias
    const item = items.find(el => el.alias === alias)
    if (item) {
      this.item = item
    }
  }
}
</script>

<style lang="scss">
  .wrapper-person {
    text-align: center;
  }

  .card-stats {
    margin: 30px 0;
    border-radius: 14px;
  }
</style>
<template>
  <h1>Hello Home</h1>
  <carousel :settings="settings" :breakpoints="breakpoints">
<!--    <slide v-for="slide in 10" :key="slide">-->
<!--      {{ slide }}-->
<!--    </slide>-->
    <slide class="card-wrapper" v-for="item in items">
      <Card
          :name="`${item.lvl} lvl`"
          :title="item.title"
          :imgUrl="item.img"
          :key="item.id"
          :link="`/item/${item.alias}`"
      >
        <template v-slot:body>{{ item.desc }}</template>
        <template v-slot:footer>
          <Stats :stats="item.info" />
        </template>
      </Card>
    </slide>

    <template #addons>
      <navigation />
      <pagination />
    </template>
  </carousel>

</template>

<script>
import Card from "@/components/UI/Card";
import items from "@/seeders/items";
import 'vue3-carousel/dist/carousel.css'
import {Carousel, Slide, Pagination, Navigation} from 'vue3-carousel'
import Stats from "@/components/UI/Stats";

export default {
  name: "Home",
  components: {Stats, Card, Carousel, Slide, Pagination, Navigation},
  data() {
    return {
      items: items,
      settings: {
        itemsToShow: 3,
        wrapAround: true,
        snapAlign: 'center'
      },
      breakpoints: {
        300: {
          itemsToShow: 1
        },
        768: {
          itemsToShow: 2
        }
      }
    }
  }
}
</script>

<style scoped>

</style>
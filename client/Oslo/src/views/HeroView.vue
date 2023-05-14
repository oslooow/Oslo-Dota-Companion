<template>
  <section class="min-h-screen">
    <div class="bg-stone-900 text-white px-4 py-5 mx-auto sm:px-6 sm:py-12 lg:px-8">
      <div class="flex items-center justify-between">
        <h2 class="text-xl mb-10 font-bold text-white-900 sm:text-3xl">Heroes</h2>
        <div>
          <label for="search" class="mr-2 text-white">Search:</label>
          <input
            type="text"
            v-model="searchTerm"
            class="bg-white-900 text-stone-900 py-1 px-2 rounded-md focus:outline-none focus:ring-2 focus:ring-stone-400"
          />
        </div>
      </div>
      <div class="flex items-center justify-start text-stone-900">
        <button
          class="bg-stone-400 mr-auto text-white px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-stone-600"
          @click="selectRandomHero()"
        >
          Today i will play as
        </button>
      </div>
      <div class="flex items-center justify-start text-stone-900"></div>
      <div>
        <h3 class="text-l mt-8 font-bold text-white-900 sm:text-l">Strength</h3>
        <ul class="grid gap-4 mt-2 sm:grid-cols-12 lg:grid-cols-12">
          <Card v-for="hero in strength" :key="hero.id" :data="hero" />
        </ul>
      </div>

      <div>
        <h3 class="text-l mt-8 font-bold text-white-900 sm:text-l">Agility</h3>
        <ul class="grid gap-4 mt-2 sm:grid-cols-12 lg:grid-cols-12">
          <Card v-for="hero in agility" :key="hero.id" :data="hero" />
        </ul>
      </div>

      <div>
        <h3 class="text-l mt-8 font-bold text-white-900 sm:text-l">Intelligence</h3>
        <ul class="grid gap-4 mt-2 sm:grid-cols-12 lg:grid-cols-12">
          <Card v-for="hero in intelligence" :key="hero.id" :data="hero" />
        </ul>
      </div>
    </div>
  </section>
</template>

<script>
import Card from '../components/Card.vue'
import { mapState, mapActions } from 'pinia'
import { useAppStore } from '../stores/counter'
export default {
  components: {
    Card
  },
  methods: {
    ...mapActions(useAppStore, ['getHeroes']),
    selectRandomHero() {
      const index = Math.floor(Math.random() * this.heroList.length)
      const hero = this.heroList[index]
      this.$router.push(`/heroes/${hero.localized_name}`)
    }
  },
  computed: {
    ...mapState(useAppStore, ['heroList']),
    strength() {
      return this.heroList
        .filter(
          (hero) =>
            hero.primary_attr === 'str' &&
            hero.localized_name.toLowerCase().includes(this.searchTerm.toLowerCase())
        )
        .sort((a, b) => a.localized_name.localeCompare(b.localized_name))
    },
    agility() {
      return this.heroList
        .filter(
          (hero) =>
            hero.primary_attr === 'agi' &&
            hero.localized_name.toLowerCase().includes(this.searchTerm.toLowerCase())
        )
        .sort((a, b) => a.localized_name.localeCompare(b.localized_name))
    },
    intelligence() {
      return this.heroList
        .filter(
          (hero) =>
            hero.primary_attr === 'int' &&
            hero.localized_name.toLowerCase().includes(this.searchTerm.toLowerCase())
        )
        .sort((a, b) => a.localized_name.localeCompare(b.localized_name))
    }
  },
  data() {
    return {
      searchTerm: ''
    }
  },
  created() {
    this.getHeroes()
  }
}
</script>

<style></style>

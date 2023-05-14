<template>
  <section class="bg-stone-900 text-white px-4 py-8 mx-auto sm:px-6 sm:py-12 lg:px-8">
    <div class="relative mx-auto max-w-screen-xl px-4 py-8">
      <div class="grid grid-cols-1 items-start gap-8 md:grid-cols-2">
        <div class="grid grid-cols-2 gap-4 md:grid-cols-1">
          <img
            alt="Hero Image"
            :src="heroDetail.img"
            class="aspect-square w-full rounded-xl object-cover"
          />
        </div>

        <div class="sticky top-0">
          <div class="flex justify-between">
            <div class="max-w-[35ch] space-y-2">
              <h1 class="text-xl font-bold sm:text-2xl">{{ heroDetail.localized_name }}</h1>
              <p class="text-sm">{{ heroDetail.attack_type }}</p>
              <!-- <img :src="heroDetail.icon" alt="" /> -->
            </div>
            <p v-if="heroDetail.primary_attr === 'str'" class="text-lg font-bold text-red-500">
              Strength
            </p>
            <p v-if="heroDetail.primary_attr === 'agi'" class="text-lg font-bold text-green-500">
              Agility
            </p>
            <p v-if="heroDetail.primary_attr === 'int'" class="text-lg font-bold text-blue-500">
              Intelligence
            </p>
          </div>

          <div class="mt-8">
            <h4 class="text-xl font-bold mb-2">Winrate:</h4>
            <ul class="text-sm text-gray-300">
              <li class="mb-2">
                Turbo Mode:
                <span class="font-bold text-green-500"
                  >{{ ((heroDetail.turbo_wins / heroDetail.turbo_picks) * 100).toFixed(2) }}%</span
                >
              </li>
              <li class="mb-2">
                Ranked Pro Matches:
                <span class="font-bold text-green-500"
                  >{{ ((heroDetail.pro_win / heroDetail.pro_pick) * 100).toFixed(2) }}%</span
                >
              </li>
            </ul>
            <div class="prose max-w-none">
              <h4 class="text-xl font-bold mb-4">Roles:</h4>
              <ul class="flex flex-wrap">
                <li
                  v-for="role in heroDetail.roles"
                  :key="role.id"
                  class="bg-gray-200 rounded-full text-gray-800 text-sm font-semibold mr-2 mb-2 px-3 py-1"
                >
                  {{ role }}
                </li>
              </ul>
              <h4 class="text-xl font-bold mb-4">Base Stats:</h4>
              <ul class="grid grid-cols-2 gap-4">
                <li class="flex flex-col justify-center items-center py-1 bg-gray-800 rounded-lg">
                  <p class="text-sm text-gray-400">Base Attack Damage</p>
                  <p class="text-2xl font-bold">
                    {{ heroDetail.base_attack_min }} - {{ heroDetail.base_attack_max }}
                  </p>
                </li>
                <li class="flex flex-col justify-center items-center py-1 bg-gray-800 rounded-lg">
                  <p class="text-sm text-gray-400">Attack Range</p>
                  <p class="text-2xl font-bold">{{ heroDetail.attack_range }}</p>
                </li>
                <li class="flex flex-col justify-center items-center py-1 bg-gray-800 rounded-lg">
                  <p class="text-sm text-gray-400">Attack Speed</p>
                  <p class="text-2xl font-bold">{{ heroDetail.attack_rate }}</p>
                </li>
                <li class="flex flex-col justify-center items-center py-1 bg-gray-800 rounded-lg">
                  <p class="text-sm text-gray-400">Base Health</p>
                  <p class="text-2xl font-bold">{{ heroDetail.base_health }}</p>
                </li>
                <li class="flex flex-col justify-center items-center py-1 bg-gray-800 rounded-lg">
                  <p class="text-sm text-gray-400">Base Mana</p>
                  <p class="text-2xl font-bold">{{ heroDetail.base_mana }}</p>
                </li>
                <li class="flex flex-col justify-center items-center py-1 bg-gray-800 rounded-lg">
                  <p class="text-sm text-gray-400">Base Str</p>
                  <p class="text-2xl font-bold">{{ heroDetail.base_str }}</p>
                </li>
                <li class="flex flex-col justify-center items-center py-1 bg-gray-800 rounded-lg">
                  <p class="text-sm text-gray-400">Base Agi</p>
                  <p class="text-2xl font-bold">{{ heroDetail.base_agi }}</p>
                </li>
                <li class="flex flex-col justify-center items-center py-1 bg-gray-800 rounded-lg">
                  <p class="text-sm text-gray-400">Base Int</p>
                  <p class="text-2xl font-bold">{{ heroDetail.base_int }}</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapActions, mapState } from 'pinia'
import { useAppStore } from '../stores/counter'
export default {
  methods: {
    ...mapActions(useAppStore, ['getHeroesDetail'])
  },
  computed: {
    ...mapState(useAppStore, ['heroDetail']),
    winrate() {
      return ((this.heroDetail.turbo_wins / this.heroDetail.turbo_picks) * 100).toFixed(4)
    }
  },
  created() {
    let heroname = this.$route.params.heroname
    this.getHeroesDetail(heroname)
  }
}
</script>

<style></style>

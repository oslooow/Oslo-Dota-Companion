<template>
  <li>
    <RouterLink :to="'/heroes/' + data.localized_name">
      <a href="" class="group relative block overflow-hidden rounded-md">
        <img
          :src="data.img"
          alt=""
          class="h-35 w-40 object-cover rounded-md transition duration-500 group-hover:scale-105 group-hover:brightness-50 sm:h-35 sm:w-40"
        />
        <div class="absolute inset-0 flex flex-col items-start justify-end p-1">
          <h3
            class="text-sm font-medium text-white bg-black bg-opacity-50 opacity-0 transition duration-300 group-hover:opacity-100 z-10"
          >
            {{ data.localized_name }}
          </h3>
        </div>
      </a>
    </RouterLink>
  </li>
</template>

<script>
export default {
  props: ['data']
}
</script>

<style scoped>
img:hover {
  filter: brightness(100%);
}

h3 {
  transition: opacity 0.3s ease-in-out;
}
</style>

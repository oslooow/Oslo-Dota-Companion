<template>
  <div class="mx-auto flex h-16 items-center gap-8 px-4 sm:px-6 lg:px-8 bg-stone-900">
    <div class="flex flex-1 items-center justify-end md:justify-between">
      <nav aria-label="Site Nav" class="hidden md:block">
        <ul class="flex items-center gap-6 text-sm">
          <li>
            <RouterLink
              to="/heroes"
              class="text-stone-300 transition hover:text-stone-200"
              href="/"
            >
              Heroes
            </RouterLink>
          </li>

          <li>
            <RouterLink
              to="/memes"
              class="text-stone-300 transition hover:text-stone-200"
              href="/"
            >
              Meme
            </RouterLink>
          </li>

          <li>
            <RouterLink to="/freebies" class="text-stone-300 transition hover:text-stone-200" href="/">
              Free Games
            </RouterLink>
          </li>
        </ul>
      </nav>

      <div class="flex items-center gap-4">
        <div class="sm:flex sm:gap-4" v-if="user">
          <p class="text-stone-300 align-middle">Logged in as {{ user.email }}</p>
          <a
            @click.prevent="signOut"
            class="block rounded-md bg-stone-800 px-5 py-2.5 text-sm font-medium text-stone-300 transition hover:bg-stone-700"
            href="/"
          >
            Logout
          </a>
        </div>
        <div class="sm:flex sm:gap-4" v-else>
          <RouterLink
            to="/login"
            class="block rounded-md bg-stone-800 px-5 py-2.5 text-sm font-medium text-stone-300 transition hover:bg-stone-700"
            href=""
          >
            Login
          </RouterLink>

          <RouterLink
            to="/register"
            class="hidden rounded-md bg-stone-500 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-stone-400 sm:block"
            href=""
          >
            Register
          </RouterLink>
        </div>

        <button
          class="block rounded bg-stone-800 p-2.5 text-stone-300 transition hover:bg-stone-700 md:hidden"
        >
          <span class="sr-only">Toggle menu</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth'
export default {
  data() {
    return {
      user: null
    }
  },
  created() {
    const auth = getAuth()
    onAuthStateChanged(auth, (user) => {
      this.user = user
    })
  },
  methods: {
    async signOut() {
      const auth = getAuth()
      try {
        await signOut(auth)
        localStorage.clear();
        this.user = null
      } catch (error) {
        const errorCode = error.code
        const errorMessage = error.message
        console.error(errorCode, errorMessage)
      }
    }
  }
}
</script>

<style></style>

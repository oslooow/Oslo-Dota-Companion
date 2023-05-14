<template>
  <div class="mx-auto px-4 py-16 flex items-center justify-center bg-stone-900">
    <div class="mx-auto max-w-lg">
      <h1 class="text-center text-2xl font-bold text-white sm:text-3xl">Login</h1>

      <p class="mx-auto mt-4 max-w-md text-center text-gray-500">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati sunt dolores deleniti
        inventore quaerat mollitia?
      </p>

      <form
        action=""
        class="mt-6 mb-0 space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8 bg-stone-700"
      >
        <p class="text-center text-lg font-medium text-white">Login to your account</p>

        <div>
          <label for="email" class="sr-only">Email</label>

          <div class="relative">
            <input
              type="email"
              class="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm"
              placeholder="Enter email"
              v-model="email"
            />

            <span class="absolute inset-y-0 right-0 grid place-content-center px-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-4 w-4 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                />
              </svg>
            </span>
          </div>
        </div>

        <div>
          <label for="password" class="sr-only">Password</label>

          <div class="relative">
            <input
              type="password"
              class="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm"
              placeholder="Enter password"
              v-model="password"
            />

            <span class="absolute inset-y-0 right-0 grid place-content-center px-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-4 w-4 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                />
              </svg>
            </span>
          </div>
        </div>

        <button
          @click.prevent="login"
          type="submit"
          class="block w-full rounded-lg bg-stone-800 px-5 py-3 text-sm font-medium text-white"
        >
          Login
        </button>
        <div class="flex items-center justify-center">
          <button
            @click.prevent="googleLogin"
            class="flex items-center justify-center space-x-2 px-4 py-2 border border-transparent rounded-md font-semibold text-white border-blue-600 hover:border-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            <img
              class="w-6 h-6"
              src="https://cdn-icons-png.flaticon.com/512/300/300221.png"
              alt=""
            />
          </button>
        </div>
        <p class="text-center text-sm text-white">
          <a href="/reset" class="underline">Forgot Password</a>
        </p>

        <p class="text-center text-sm text-white">
          No account?
          <RouterLink to="/register" class="underline" href="">Sign up</RouterLink>
        </p>
      </form>
    </div>
  </div>
</template>

<script>
import {
  getAuth,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup
} from 'firebase/auth'
import Swal from 'sweetalert2'
export default {
  data() {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    async login() {
      const auth = getAuth()
      try {
        const userCredential = await signInWithEmailAndPassword(auth, this.email, this.password)
        const user = userCredential.user
        console.log(user)
        localStorage.access_token = user.accessToken
        Swal.fire({
          icon: 'success',
          title: 'Login Success',
          showConfirmButton: false
        })
        this.$router.push('/heroes')
      } catch (error) {
        const errorCode = error.code
        const errorMessage = error.message
        console.log(errorCode, errorMessage)
        Swal.fire({
          icon: 'error',
          title: errorMessage,
          showConfirmButton: false
        })
      }
    },
    async googleLogin() {
      const auth = getAuth()
      try {
        const provider = new GoogleAuthProvider()
        const userCredential = await signInWithPopup(auth, provider)
        const user = userCredential.user
        console.log(user)
        localStorage.access_token = user.accessToken
        Swal.fire({
          icon: 'success',
          title: 'Login Success',
          showConfirmButton: false
        })
        // console.log('login sucess' + user)
        this.$router.push('/heroes')
      } catch (error) {
        const errorCode = error.code
        const errorMessage = error.message
        console.log(errorCode, errorMessage)
        Swal.fire({
          icon: 'error',
          title: errorMessage,
          showConfirmButton: false
        })
      }
    }
  }
}
</script>

<style></style>

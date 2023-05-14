<template>
  <div class="mx-auto px-4 py-16 flex items-center justify-center bg-stone-900">
    <div class="mx-auto max-w-lg">
      <h1 class="text-center text-2xl font-bold text-white sm:text-3xl">Login</h1>

      <form
        action=""
        class="mt-6 mb-0 space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8 bg-stone-700"
      >
        <p class="text-center text-lg font-medium text-white">Reset your passsword</p>

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

        <button
          @click.prevent="forgotPassword"
          type="submit"
          class="block w-full rounded-lg bg-stone-800 px-5 py-3 text-sm font-medium text-white"
        >
          Reset Password
        </button>

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
  sendPasswordResetEmail
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
    async forgotPassword() {
      const auth = getAuth()
      try {
        await sendPasswordResetEmail(auth, this.email)
        Swal.fire({
        icon: 'success',
        title: 'Reset Password link has been sent to your email',
        showConfirmButton: false
      })
      } catch (error) {
        const errorCode = error.code
        const errorMessage = error.message
        console.log(errorCode, errorMessage)
        Swal.fire({
        icon: 'error',
        title: error.message,
        showConfirmButton: false
      })
      }
    }
  }
}
</script>

<style></style>

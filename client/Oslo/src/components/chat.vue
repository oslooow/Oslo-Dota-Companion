<template>
  <div class="fixed bottom-0 right-0 w-1/3 bg-color-stone-600 rounded-lg shadow-xl">
    <div class="p-4">
      <button
        @click="isCollapsed = !isCollapsed"
        class="text-white hover:text-gray-300 focus:outline-none"
      >
        <template v-if="isCollapsed">
          <svg class="w-6 h-6" viewBox="0 0 24 24">
            <path fill="currentColor" d="M19 12H5a1 1 0 000 2h14a1 1 0 000-2z" />
          </svg>
        </template>
        <template v-else>
          <svg class="w-6 h-6" viewBox="0 0 24 24">
            <path
              fill="currentColor"
              d="M5 12h14a1 1 0 110 2H5a1 1 0 110-2zm0-6h14a1 1 0 110 2H5a1 1 0 110-2zm0 12h14a1 1 0 110 2H5a1 1 0 110-2z"
            />
          </svg>
        </template>
      </button>
    </div>
    <div v-show="!isCollapsed" class="h-64 overflow-y-scroll">
      <div class="flex flex-col space-y-2 p-4">
        <div v-for="message in messages" :key="message.id" class="flex items-end">
          <div
            :class="{
              'bg-blue-500 text-white': message.sender === currentUser.uid,
              'bg-gray-100 text-black': message.sender !== currentUser.uid
            }"
            class="p-2 rounded-lg max-w-md"
          >
            <p class="text-sm">{{ message.text }}</p>
          </div>
          <div class="ml-2 text-gray-500 text-xs">
            {{
              message.timestamp
                .toDate()
                .toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
            }}
          </div>
        </div>
      </div>
    </div>
    <form @submit.prevent="sendMessage" class="p-4" v-show="!isCollapsed">
      <div class="flex">
        <input
          type="text"
          v-model="messageText"
          class="flex-1 px-2 py-1 bg-gray-100 rounded-lg"
          placeholder="Type a message..."
        />
        <button type="submit" class="ml-2 px-4 py-1 bg-blue-500 text-white rounded-lg">Send</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      messageText: '',
      isCollapsed: true
    }
  },
  methods: {
    sendMessage() {
    }
  }
}
</script>

<style>
.overflow-y-scroll::-webkit-scrollbar {
  width: 4px;
  height: 4px;
}

.overflow-y-scroll::-webkit-scrollbar-thumb {
  background-color: rgba(0, 0, 0, 0.3);
  border-radius: 2px;
}
</style>

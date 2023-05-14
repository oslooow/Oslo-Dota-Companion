import Axios from 'axios'
import { defineStore } from 'pinia'

export const useAppStore = defineStore('app', {
  state: () => ({
    loggedIn: null,
    baseUrl: 'https://oslo-app-server-production.up.railway.app/',
    heroList: [],
    heroDetail: [],
    meme: [],
    freebies: []
  }),
  actions: {
    async getHeroes() {
      try {
        const { data } = await Axios({
          method: 'get',
          url: this.baseUrl + 'heroes'
        })
        this.heroList = data
      } catch (error) {
        console.log(error)
      }
    },
    async getHeroesDetail(heroname) {
      // console.log(heroname);
      try {
        const { data } = await Axios({
          method: 'get',
          url: this.baseUrl + 'heroes/' + heroname
        })
        this.heroDetail = data
      } catch (error) {
        console.log(error)
      }
    },
    async getMemes() {
      try {
        const { data } = await Axios({
          method: 'get',
          url: this.baseUrl + 'memes'
        })
        this.meme = data
      } catch (error) {
        console.log(error)
      }
    },
    async getFreebies() {
      try {
        const { data } = await Axios({
          method: 'get',
          url: this.baseUrl + 'freebies',
          headers: {
            access_token: localStorage.access_token
          }
        })
        this.freebies = data
      } catch (error) {
        console.log(error)
      }
    }
  }
})

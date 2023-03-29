import { mande } from 'mande'
import { defineStore } from 'pinia';

const api = mande('https://docker119415-tcz-backend.jcloud.ik-server.com/api');
api.options.headers.Authorization = 'bearer ' + import.meta.env.VITE_STRAPI_KEY;

// Define a new store and make a request to the Strapi API with axios to get the posts
export const usePostsStore = defineStore('posts', {
    state: () => ({
        posts: []
    }),

    actions: {
        async fetchPosts() {
            const res = await api.get('/posts?populate=*');
            this.posts = res.data;
            console.log(this.posts[1].attributes.images.data[0].attributes.url);
        }
    }
});
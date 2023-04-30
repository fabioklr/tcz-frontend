import { mande } from 'mande'
import { defineStore } from 'pinia';

const api = mande('https://tcz-backend.jcloud.ik-server.com/api');
api.options.headers.Authorization = 'bearer ' + import.meta.env.VITE_STRAPI_KEY;

// Define a new store and make a request to the Strapi API
export const usePostsStore = defineStore('posts', {
    state: () => ({
        posts: []
    }),

    actions: {
        async fetchPosts() {
            const res = await api.get('/posts?populate=*');
            // Format the date of posts
            let date;
            res.data.forEach((post) => {
                if (post.attributes.original_date_for_old_post != null) {
                    date = new Date(post.attributes.original_date_for_old_post);
                    date = date.toLocaleDateString('de-DE', { year: 'numeric', month: 'long', day: 'numeric' });
                    post.attributes.date = date;
                }
                else {
                    date = new Date(post.attributes.createdAt);
                    date = date.toLocaleDateString('de-DE', { year: 'numeric', month: 'long', day: 'numeric' });
                    post.attributes.date = date;
                }
            });
            this.posts = res.data;
        }
    }
});
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
            let date_de;
            let date_en;
            res.data.forEach((post) => {
                if (post.attributes.original_date_for_old_posts) {
                    date_de = new Date(post.attributes.original_date_for_old_posts);
                    date_de = date_de.toLocaleDateString('de-DE', { year: 'numeric', month: 'long', day: 'numeric' });
                    post.attributes.date_de = date_de;
                    date_en = new Date(post.attributes.original_date_for_old_posts);
                    date_en = date_en.toLocaleDateString('en-EN', { year: 'numeric', month: 'long', day: 'numeric' });
                    post.attributes.date_en = date_en;
                }
                else {
                    date_de = new Date(post.attributes.createdAt);
                    date_de = date_de.toLocaleDateString('de-DE', { year: 'numeric', month: 'long', day: 'numeric' });
                    post.attributes.date_de = date_de;
                    date_en = new Date(post.attributes.createdAt);
                    date_en = date_en.toLocaleDateString('en-EN', { year: 'numeric', month: 'long', day: 'numeric' });
                    post.attributes.date_en = date_en;
                }
            });
            this.posts = res.data;
            console.log(this.posts);
        }
    }
});
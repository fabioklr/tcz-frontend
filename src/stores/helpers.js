import { defineStore } from 'pinia'

export const useHelpersStore = defineStore('helpers', {
  // arrow function recommended for full type inference
  state: () => ({
    isMobile: false,
  }),

  actions: {
    // Initially and continuously check if the window width is less than 768px and set isMobile accordingly
    checkIfMobile() {
      if (window.innerWidth < 768) {
        this.isMobile = true;
      }
      else {
        this.isMobile = false;
      }
      window.addEventListener('resize', () => {
        if (window.innerWidth < 768) {
          this.isMobile = true;
        }
        else {
          this.isMobile = false;
        }
      });
    }
  }
});
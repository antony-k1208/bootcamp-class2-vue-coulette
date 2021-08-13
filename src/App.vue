<template>
  <div class="home">
    <ClColorpicker @color="saveColor" :colors="colors" />
    <ClColorlist @delete="deleteColor" @clear="clear" :colors="colors" />
  </div>
</template>

<script>
import ClColorlist from "@/components/ClColorlist.vue";
import ClColorpicker from "@/components/ClColorpicker.vue";

export default {
  name: "Home",
  components: {
    ClColorlist,
    ClColorpicker,
  },
  data() {
    return {
      colors: [],
    };
  },
  methods: {
    updateLocalstorage() {
      window.localStorage.setItem("colors", JSON.stringify(this.colors));
    },
    saveColor(color) {
      this.colors.push(color);
      this.updateLocalstorage();
    },
    deleteColor(color) {
      /*this.colors = this.colors.filter(
        (currentColor) => currentColor !== color
      );*/
      const index = this.colors.findIndex(
        (currentColor) => currentColor === color
      );
      this.colors.splice(index, 1);
      this.updateLocalstorage();
    },
    clear() {
      this.colors = [];
      this.updateLocalstorage();
    },
  },
  created() {
    const savedColors = JSON.parse(window.localStorage.getItem("colors"));

    if (savedColors !== null) {
      this.colors = JSON.parse(window.localStorage.getItem("colors"));
    }
  },
};
</script>

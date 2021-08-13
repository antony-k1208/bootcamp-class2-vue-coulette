<template>
  <header :style="{ 'background-color': currentColor }">
    <h1>Coulette</h1>
    <ClButton @click="changeColor" text="Generate" />
    <ClButton @click="saveColor" text="Save Color" :disabled="isDisabled" />
    <p>{{ currentColor }}</p>
  </header>
</template>

<script>
import { randomHexColor } from "./utils";

export default {
  props: {
    colors: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      currentColor: {},
    };
  },
  methods: {
    changeColor() {
      this.currentColor = randomHexColor();
    },
    saveColor() {
      this.$emit("color", this.currentColor);
    },
  },
  computed: {
    isDisabled() {
      return this.colors.includes(this.currentColor);
    },
  },
  created() {
    this.changeColor();
  },
};
</script>

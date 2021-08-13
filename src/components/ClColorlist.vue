<template>
  <main>
    <ul class="list-group">
      <li
        class="list-group-item"
        v-for="color in colors"
        :key="color"
        :style="{ 'background-color': color }"
      >
        {{ color }}
        <ClButton
          class="btn-danger text-light"
          @click="deleteColor(color)"
          text="Delete"
        />
      </li>
    </ul>
    <ClButton v-if="colors.length > 0" @click="deleteAll" text="Delete all" />
  </main>
</template>

<script>
export default {
  props: {
    colors: {
      type: Array,
      required: true,
    },
  },
  methods: {
    deleteColor(color) {
      this.$emit("delete", color);
    },
    deleteAll() {
      this.$emit("clear");
    },
  },
};
</script>

<template lang="pug">
  div.k-input-container
    input(:value="value", @input="handleInput", v-bind="$attrs")
</template>

<script>
export default {
  inheritAttrs: false,
  props: {
    value: {
      type: String || Number,
      default: ""
    }
  },
  methods: {
    handleInput() {
      this.$parent.$emit("validate");
    }
  }
};
</script>

<style lang="stylus" scoped>
.k-input-container
  input
    border 1px solid #eee
    border-radius 8px
</style>
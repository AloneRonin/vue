<template lang="pug">
  div.form-item-container
    label.label {{ this.label }}
    slot
    span.errpr {{ this.form.model[this.prop] }}
</template>

<script>
import Schema from "async-validator";
export default {
  inject: ["form"],
  props: {
    label: {
      type: String,
      default: ""
    },
    prop: {
      type: String,
      default: ""
    }
  },
  mounted() {
    this.$on("validate", () => {
      this.validate();
    });
  },
  methods: {
    validate() {
      console.log(this.form.model[this.prop]);
      console.log(this.form.rules[this.prop]);
    }
  }
};
</script>

<style lang="stylus" scoped>
.form-item-container
  label
    font(30px, #333)
  span
    font(24px, red)
</style>
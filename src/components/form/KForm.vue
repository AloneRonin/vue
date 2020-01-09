<template lang="pug">
  form.form-container
    slot
</template>

<script>
export default {
  provide() {
    return {
      form: this
    };
  },
  props: {
    model: {
      type: Object,
      required: true
    },
    rules: {
      type: Object
    }
  },
  methods: {
    validate() {
      console.log("检验");
    }
  }
};
</script>

<style lang="stylus" scoped></style>
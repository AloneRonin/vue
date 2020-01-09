<template lang="pug">
  div.k-form
    slot
</template>

<script>
export default {
  componentName: 'KForm',
  provide () {
    return {
      form: this
    }
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
  created () {
    this.fields = []
    // 新增
    if (this.prop) {
      this.$on('k.form.addField', item => {
        this.fields.push(item)
      })
    }
    // 可能出现移除
  },
  methods: {
    validate (callback) {
      // 获取所有子节点KFormItem
      // [resultPromise]
      const tasks = this.fields
        // .filter(item => item.prop) // 过滤掉没有prop的form-item
        .map(item => item.validate())
      Promise.all(tasks)
        .then(() => callback(true))
        .catch(() => callback(false))
    },
  }
}
</script>

<style lang="pug" scoped>
</style>

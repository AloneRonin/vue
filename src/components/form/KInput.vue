<template lang="pug">
  div.k-input
    //- 自定义组建双向绑定： :value @input
    //- v-bind="$attrs" 展开$attrs
    input(:type="type", :value="value", @input="handleInput", v-bind="$attrs")
</template>

<script>
import emitter from '@/mixins/emitter'
export default {
  inheritAttrs: false,  /* 设置为false, 避免$attrs设置到跟元素上 */
  mixins: [emitter],
  props: {
    value: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: 'text'
    }
  },
  methods: {
    handleInput ($event) {
      // 派发$emit 实现双向绑定
      this.$emit('input', $event.target.value)

      // 通知父级执行校验
      // this.$parent.$emit('validate')

      this.dispatch('KFormItem', 'validate')
    }
  }
}
</script>

<style lang="stylus" scoped>
.k-input
  input
</style>

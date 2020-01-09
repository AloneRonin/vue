<template lang="pug">
  div.k-form-item
    //- label
    label(v-if="label") {{ label }}

    slot
    //- 检验信息显示
    p(v-if="error") {{ error }}
</template>

<script>
import Schema from 'async-validator'
import emitter from '@/mixins/emitter'
export default {
  name: 'KFormItem',
  mixins: [emitter],
  componentName: 'KFormItem',
  inject: ['form'],
  data () {
    return {
      error: '' // 错误信息展示
    }
  },
  props: {
    label: {
      type: String,
      default: ''
    },
    prop: {
      type: String,
    }
  },
  mounted () {
    this.$on('validate', () => {
      this.validate()
    })

    if (this.prop) {
      // 派发事件，通知KForm，新增一个KformItem实例
      this.dispatch('KForm' ,'k.form.addField', [this])
    }
  },
  methods: {
    validate () {
      // 当前规则
      const rules = this.form.rules[this.prop]
      // 当前值
      const value = this.form.model[this.prop]

      // 检验的描述对象
      const desc = {[this.prop]: rules}

      // 创建Schema实例
      const schema = new Schema(desc)
      return schema.validate({[this.prop]: value}, errors => {
        if (errors) {
          this.error = errors[0].message
        } else {
          // 检验通过
          this.error = ''
        }
      })
    }
  }
}
</script>

<style lang="pug" scoped>
</style>

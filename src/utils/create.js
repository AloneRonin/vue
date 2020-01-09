import Vue from 'vue'

function create (Component, props) {
    // 组建构造函数如何获取
    // 1. Vue.extend()
    const Ctor = Vue.extend(Component)
    // 获得组件实例
    const comp = new Ctor({propsData: props})
    comp.$mount()
    document.body.appendChild(comp.$el)
    comp.remove = function () {
        document.body.removeChild(comp.$el)
        comp.$destroy()
    }


    // 2. render
    // const vm =new Vue({
    //     // h是createElement, 返回虚拟DOM VNode
    //     // 需要挂在才能变成真实DOM
    //     render: h => h(Component, { props })
    // }).$mount() 
    // // 官方文档要求不能挂载到body，否则会报错
    // // $mount挂在变成真实DOM，不指定宿主元素则不会追加

    // // vm.$el获取真实DOM
    // document.body.appendChild(vm.$el)

    // const comp = vm.$children[0]

    // comp.remove = function () {
    //     document.body.removeChild(vm.$el)
    //     vm.$destroy()
    // }

    return comp
}

export default create
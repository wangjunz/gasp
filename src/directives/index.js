import {slowEnter} from './slide'

// 自定义指令
const directives = {
    slowEnter
}

export default {
  install(Vue) {
    Object.keys(directives).forEach((key) => {
      Vue.directive(key, directives[key])
    })
  },
}
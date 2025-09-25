import type { App } from "vue"
import SecDialog from "./components/SecDialog.vue"
import SecForm from "./components/SecForm.vue"
import SecFormItem from "./components/SecFormItem.vue"


const components = [
  SecDialog,
  SecForm,
  SecFormItem
]

const install = (app: App) => {
  components.forEach((cmp) => {
    app.component((cmp as any).name, cmp)
  })
}

export { 
  SecDialog,
  SecForm,
  SecFormItem
}
export default { install }
import type { App } from "vue"
import MyDialog from "./components/MyDialog.vue"

const components = [MyDialog]

const install = (app: App) => {
  components.forEach((cmp) => {
    app.component((cmp as any).name, cmp)
  })
}

export { MyDialog }
export default { install }
import { App } from 'vue'
import { registerElement } from '@/global/register-element'
import { registerProperties } from '@/global/register-properties'

export function globalRegister(app: App) {
  app.use(registerElement)
  app.use(registerProperties)
}

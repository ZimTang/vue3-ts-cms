import { App } from 'vue'
import { formatUtcString } from '@/util/dateFormat'

export function registerProperties(app: App) {
  app.config.globalProperties.$filters = {
    formatTime(value: string) {
      return formatUtcString(value)
    }
  }
}

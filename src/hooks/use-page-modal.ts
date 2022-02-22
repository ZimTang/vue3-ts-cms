import { ref } from 'vue'
import { pageModal } from '@/components/page-modal'
type callBackFn = (item?: any) => void
export function usePageModal(createCb?: callBackFn, editCb?: callBackFn) {
  const pageModalRef = ref<InstanceType<typeof pageModal>>()

  const defaultInfo = ref({})
  const handleEdit = (item: any) => {
    defaultInfo.value = { ...item }
    if (pageModalRef.value) {
      pageModalRef.value.dialogVisible = true
    }
    editCb && editCb(item)
  }

  const handleCreate = () => {
    defaultInfo.value = {}
    if (pageModalRef.value) {
      pageModalRef.value.dialogVisible = true
    }
    createCb && createCb()
  }
  return {
    pageModalRef,
    defaultInfo,
    handleEdit,
    handleCreate
  }
}

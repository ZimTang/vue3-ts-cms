import { ref } from 'vue'
import { pageModal } from '@/components/page-modal'
type callBackFn = () => void
export function usePageModal(createCb?: callBackFn, editCb?: callBackFn) {
  const pageModalRef = ref<InstanceType<typeof pageModal>>()

  const defaultInfo = ref({})
  const handleEdit = (item: any) => {
    defaultInfo.value = { ...item }
    pageModalRef.value.dialogVisible = true
    editCb && editCb()
  }

  const handleCreate = () => {
    defaultInfo.value = {}
    pageModalRef.value.dialogVisible = true
    createCb && createCb()
  }
  return {
    pageModalRef,
    defaultInfo,
    handleEdit,
    handleCreate
  }
}

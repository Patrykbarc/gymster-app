import toast from 'react-hot-toast'
import { debounce } from '../../_helpers/debounce'

const STORAGE_ITEM_NAME = 'workout-draft'

export const debouncedSave = debounce((value) => {
  const loadingPromise = new Promise((resolve) => {
    setTimeout(() => {
      localStorage.setItem(STORAGE_ITEM_NAME, JSON.stringify(value))
      resolve(true)
    }, 800)
  })

  toast.promise(loadingPromise, {
    loading: 'Saving draft',
    success: 'Draft saved!',
    error: 'Failed to save draft',
  })
}, 1000)

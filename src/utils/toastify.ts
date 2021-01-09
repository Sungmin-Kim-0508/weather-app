import { toast, ToastOptions } from 'react-toastify'

const options: ToastOptions = {
  position: toast.POSITION.BOTTOM_RIGHT,
  closeOnClick: true,
  pauseOnHover: false,
  autoClose: 3000
}

export const toastifyNotification = {
  success: (msg: string) => {
    return toast.success(msg, options)
  },
  error: (errorMsg: string) => {
    return toast.error(errorMsg, options)
  }
}
import { toast } from 'react-toastify';

export const useAlert = () => {
  const notify = ({ position, duration, title, message, status }: any) => {
    toast("Default Notification !");

    switch (status) {
      case 'success':
        return toast.success("Success Notification !", {
          position: toast.POSITION.TOP_CENTER
        });
      case 'error':
        return toast.error("Error Notification !", {
          position: toast.POSITION.TOP_LEFT
        });
      default:
        return toast.success("Success Notification !", {
          position: toast.POSITION.TOP_CENTER
        });
    }


    // toast.success("Success Notification !", {
    //   position: toast.POSITION.TOP_CENTER
    // });

    // toast.error("Error Notification !", {
    //   position: toast.POSITION.TOP_LEFT
    // });

    // toast.warn("Warning Notification !", {
    //   position: toast.POSITION.BOTTOM_LEFT
    // });

    // toast.info("Info Notification !", {
    //   position: toast.POSITION.BOTTOM_CENTER
    // });
  }
  return notify;
}
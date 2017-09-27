import { OK } from '../config/constants';

export const callback = ({ code, data, message }) => {
  let result = {
    success: false,
    data,
    message
  };

  if (code === OK) {
    result.success = true;
  } else {
    alert(message);
  }

  return result;
};

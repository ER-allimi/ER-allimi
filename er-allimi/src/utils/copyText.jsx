import toast from 'react-hot-toast';
import { SuccessMessage, ErrorMessage } from '@components';

const copyText = ({ text, successMessage, errorMessage }) => {
  navigator.clipboard
    .writeText(text)
    .then(() => {
      toast(() => <SuccessMessage content={successMessage} />);
    })
    .catch((err) => {
      toast(() => <ErrorMessage content={errorMessage} />);
    });
};

export { copyText };

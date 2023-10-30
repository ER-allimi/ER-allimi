import toast from 'react-hot-toast';
import { SuccessMessage, ErrorMessage } from '@components';

interface CopyTextProps {
  text: string;
  successMessage: string;
  errorMessage: string;
}

const copyText = ({ text, successMessage, errorMessage }: CopyTextProps) => {
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

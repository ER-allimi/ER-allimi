import { Button } from '@components';

function RefreshButton() {
  return (
    <Button color="gray" round="sm" onClick={() => location.reload()}>
      새로고침
    </Button>
  );
}

export default RefreshButton;

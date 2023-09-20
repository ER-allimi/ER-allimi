import { useState } from 'react';
import { Modal, RiCloseCircleFill } from '@components';

export default {
  title: 'Modal',
  component: Modal,
};

const Template = (args) => {
  const [showModal, setShowModal] = useState(true);

  const handleModalClose = () => setShowModal(false);

  return (
    <Modal
      {...args}
      showModal={showModal}
      handleModalClose={handleModalClose}
    />
  );
};

export const Default = Template.bind({});

export const CloseIcon = Template.bind({});
CloseIcon.args = {
  closeIcon: <RiCloseCircleFill />,
};

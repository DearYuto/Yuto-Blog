import type { Meta, StoryFn } from '@storybook/react';
import Modal from './Modal';
import { useModalDispatch, useOpenModal } from './utils/hooks/useModal';

const meta: Meta<typeof Modal> = {
  title: 'Common/Modal',
  component: Modal,
};

export default meta;

export const Default: StoryFn = () => {
  return (
    <Modal>
      <Modal.Contents>모달 초안 테스트</Modal.Contents>
    </Modal>
  );
};

import type { Meta, StoryFn, StoryObj } from '@storybook/react';
import Modal from './Modal';
import { useModal } from './utils/hooks/useModal';
import ModalContents from './components/ModalContents';

const meta: Meta<typeof Modal> = {
  title: 'Common/Modal',
  component: Modal,
};

export default meta;

export const Default: StoryFn = () => {
  const { isOpen, closeModal, openModal } = useModal();

  return (
    <Modal isOpen={isOpen} closeModal={closeModal} openModal={openModal}>
      <ModalContents>모달 초안 테스트</ModalContents>
    </Modal>
  );
};

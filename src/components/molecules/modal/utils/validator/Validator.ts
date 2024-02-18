import {
  DISPLAY_NAME,
  allowedDisplayNames,
} from '../../constants/displayNames';

export type AllowedDisplayName = (typeof allowedDisplayNames)[number];

class ModalValidator {
  static validateModalDisplayName(displayName: string) {
    if (!(allowedDisplayNames as string[]).includes(displayName)) {
      throw new Error(
        `모달의 자식 요소는 반드시 ${allowedDisplayNames.join(
          ' 또는 '
        )} 컴포넌트를 사용해야 합니다.`
      );
    }
  }

  static ensureSingleModalContent(displayName: string) {
    if (displayName !== DISPLAY_NAME.contents) {
      throw new Error(
        '모달의 자식 요소는 반드시 ModalContents 컴포넌트를 사용해야 합니다.'
      );
    }
  }
}

export default ModalValidator;

const PREFIX = 'Modal';

// ! displayName 별도 분리 시 제대로 적용되지 않음 -> 하드코딩 해서 넣어야 함.
const DISPLAY_NAME = Object.freeze({
  container: `${PREFIX}`,
  overlay: `${PREFIX}.Overlay`,
  contents: `${PREFIX}.Contents`,
  closeButton: `${PREFIX}.CloseButton`,
});

const allowedDisplayNames = [DISPLAY_NAME.contents, DISPLAY_NAME.closeButton];

export { DISPLAY_NAME, allowedDisplayNames };

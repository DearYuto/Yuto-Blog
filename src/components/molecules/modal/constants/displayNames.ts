const PREFIX = 'Modal';

const DISPLAY_NAME = Object.freeze({
  container: `${PREFIX}`,
  overlay: `${PREFIX}.Overlay`,
  contents: `${PREFIX}.Contents`,
  closeButton: `${PREFIX}.CloseButton`,
});

const allowedDisplayNames = [
  DISPLAY_NAME.contents,
  DISPLAY_NAME.closeButton,
] as const;

export { DISPLAY_NAME, allowedDisplayNames };

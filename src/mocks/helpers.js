export const createNodeMock = (element) => {
  if (element.type === `audio`) {
    return {
      pause() {},
      play() {}
    };
  }
  return null;
};

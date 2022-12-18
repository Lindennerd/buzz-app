export function useUserMedia() {
  return {
    hasGetUserMedia() {
      return !!(
        window.navigator.getUserMedia ||
        navigator.webkitGetUserMedia ||
        navigator.mozGetUserMedia ||
        navigator.msGetUserMedia
      );
    },
  };
}

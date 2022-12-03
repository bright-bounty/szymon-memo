function Btn(text, options) {
  const element = document.createElement('button');
  element.textContent = text;
  if (options) {
    if (options.className) {
      element.className = options.className;
    }
  }
  return element;
}
export default Btn;

function Btn(text) {
  const element = document.createElement('button');
  element.textContent = text;
  element.onclick = Btn;
  return element;
}
export default Btn;

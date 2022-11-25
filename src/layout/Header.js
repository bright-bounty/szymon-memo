import Btn from './Button';

function Header() {
  const header = document.createElement('header');
  const button = Btn('Click me');
  button.appendChild(Btn);
  return header;
}
export default Header;

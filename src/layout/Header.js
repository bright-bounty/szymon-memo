import Btn from './Button';

function Header() {
  const header = document.createElement('header');
  const button = Btn('Click me');
  header.appendChild(button);
  return header;
}
export default Header;

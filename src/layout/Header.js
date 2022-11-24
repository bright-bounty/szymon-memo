import Btn from './Button';

function Header() {
  const header = document.createElement('header');
  header.appendChild(Btn);
  return header;
}
export default Header;

import './src/scss/main.scss';
import Header from './src/layout/Header';
import ContentWrapper from './src/layout/ContentWrapper';

const header = Header();
const wrapper = ContentWrapper();
const app = document.getElementById('app');
app.appendChild(header);
app.appendChild(wrapper);

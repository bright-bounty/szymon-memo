import './src/scss/main.scss';
import Header from './src/layout/Header';
import ContentWrapper from './src/layout/ContentWrapper';

const app = document.getElementById('app');
app.appendChild(Header);

const content = document.getElementById('content');
content.appendChild(ContentWrapper);

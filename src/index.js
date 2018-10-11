import _ from 'lodash';
import './style.css';
import logo from './logo.png';
import data from './data.xml';

function component() {
    const element = document.createElement('div');

    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.classList.add('hello');
    const myLogo = new Image();
    myLogo.src = logo;
    element.appendChild(myLogo);
    console.log(data);
    return element;
}

document.body.appendChild(component());
import _ from 'lodash';
import './loader-static/style.css';
import logo from './loader-static/logo.png';
import data from './loader-static/data.xml';

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
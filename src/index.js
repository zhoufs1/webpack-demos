import _ from 'lodash';
// import './loader-static/style.css';
// import logo from './loader-static/logo.png';
// import data from './loader-static/data.xml';
import printMe from './output-static/print.js';
function component() {
    const element = document.createElement('div');

    element.innerHTML = _.join(['Hello', 'webpack!'], ' ');
    // element.classList.add('hello');
    // const myLogo = new Image();
    // myLogo.src = logo;
    // element.appendChild(myLogo);
    // console.log(data);

    const btn = document.createElement('button');
    btn.innerHTML = 'click me and chick the console1！';
    btn.onclick = printMe;
    element.appendChild(btn);
    return element;
}

document.body.appendChild(component());

if(module.hot){
    module.hot.accept('./output-static/print.js',function () {
        console.log('Accepting the updated printMe module!');
        printMe();
    })
}
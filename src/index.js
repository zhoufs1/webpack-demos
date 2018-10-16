import _ from 'lodash';
import flvjs from 'flv.js';
// import './loader-static/style.css';
// import logo from './loader-static/logo.png';
// import data from './loader-static/data.xml';
import printMe from './output-static/print.js';
function component() {
    const element = document.createElement('div');

    element.innerHTML = _.join(['Hello', 'webpack!'], ' ');

    const btn = document.createElement('button');
    btn.innerHTML = 'click me and chick the console1！';
    btn.onclick = printMe;
    element.appendChild(btn);


    if(flvjs.isSupported()){
        const video = document.createElement('video');
        element.appendChild(video);
        video.innerText = '打开video';
        const flvPlayer = flvjs.createPlayer({
            type: 'flv',
            url: 'http://127.0.0.1/flv/7182741-1.flv'
        });
        flvPlayer.attachMediaElement(video);
        flvPlayer.load();
        flvPlayer.play();
    }
    return element;
}

document.body.appendChild(component());

if(module.hot){
    module.hot.accept('./output-static/print.js',function () {
        console.log('Accepting the updated printMe module!');
        printMe();
    })
}
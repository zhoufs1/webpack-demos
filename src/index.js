import _ from 'lodash';
import React from 'react';
import flvjs from 'flv.js';
import ReactDOM from 'react-dom';
import HttpFlv from './flv-demo/HttpFlv';

import printMe from './output-static/print.js';
function component() {
    const element = document.createElement('div');
    element.id = 'example';
    element.style.display='flex';
    element.style.alignItems='center';
    element.style.flexDirection='column';
    element.innerHTML = _.join(['Hello', 'webpack!'], ' ');

    const btn = document.createElement('button');
    btn.innerHTML = 'click me and chick the console1！';
    btn.onclick = printMe;
    element.appendChild(btn);


    // if(flvjs.isSupported()){
    //     const video = document.createElement('video');
    //     element.appendChild(video);
    //     video.controls = true;
    //     video.autoplay = true;
    //     video.width = 1024;
    //     video.height = 576;
    //     video.innerText = '打开video';
    //     const flvPlayer = flvjs.createPlayer({
    //         type: 'flv',
    //         url: 'http://www.youtube.com/watch?v=dQ3Mt9yiz6k'
    //     });
    //     flvPlayer.attachMediaElement(video);
    //     flvPlayer.load();
    //     flvPlayer.play();
    // }
    return element;
}

document.body.appendChild(component());
ReactDOM.render(<HttpFlv/>, document.getElementById('example'));

if(module.hot){
    module.hot.accept('./output-static/print.js',function () {
        console.log('Accepting the updated printMe module!');
        printMe();
    })
}
import React, {PureComponent} from 'react';
import Reflv from 'reflv';
 class HttpFlv extends PureComponent {
    render() {
        return (<Reflv
                url={`http://localhost:7001/live/test.flv`
                }
                type="flv"
                isLive
                cors
            />
        )
    }
}

module.exports = HttpFlv;
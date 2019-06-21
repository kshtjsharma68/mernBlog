import React from 'react';
import Noty from 'noty';

export default function Notification(props) {
    let {type = '', msg = ''} = props; 
    alert(msg)
    new Noty({
        text: `${msg}`
    }).show();

} 
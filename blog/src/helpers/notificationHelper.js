import React from 'react';
import "../../node_modules/noty/lib/themes/mint.css"; 
import "../../node_modules/noty/lib/themes/bootstrap-v4.css";  
import Noty from 'noty';

export default function Notification(props) {
    let {type = '', msg = ''} = props; 
    alert(msg)
    new Noty({
        text: `${msg}`
    }).show();

} 
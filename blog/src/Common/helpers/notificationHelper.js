import React from 'react';
import 'react-notifications/lib/notifications.css';
import {NotificationContainer, NotificationManager} from 'react-notifications';

 const Show = ({type, msg}) => {
            switch (type) {
                case 'info':
                        NotificationManager.info(msg, 'Information', 5000);
                        break;
                case 'success':
                        NotificationManager.success(msg, 'Success Title', 5000);
                        break;
                case 'warning':
                        NotificationManager.warning(msg, 'automatic close', 4000);
                        break;
                case 'danger':
                        NotificationManager.error(msg, 'Click me!', 5000, () => {
                            alert('callback');
                        })        
                        break;
                case 'error':
                        NotificationManager.error(msg, 'Click me!', 5000, () => {
                            alert('callback');
                        })        
                        break;
                default:
                        NotificationManager.info(msg, 'Default case', 5000)        
            }  
    };

const Notification = props => {

    let  { type = '', msg = '' } = props;alert(msg)

    Show(props);
    return (    
        <div>
            <NotificationContainer />
        </div>    
    );
        
}


export default Notification;
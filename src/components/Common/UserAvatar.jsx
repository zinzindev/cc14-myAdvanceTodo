import React from 'react';
import { Avatar } from '@mui/material';
import defaultPhoto from '../../assets/user.jpeg';

export function UserAvatar(props) {
    // props = {sx : {width:80,height:80} , alt: "Smir Khan"}
    // props.sx = {width:80,height:80}
    return (
        <Avatar
            {...props} 
            src={props.src || defaultPhoto}
            sx={{ width: 40, height: 40, cursor: 'pointer', ...props.sx }}
        />
    );
}

// export UserAvatar;

import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';

export default function GroupAvatars() {
  return (
    <AvatarGroup max={4}>
      <Avatar alt="Remy Sharp" src="New Folder/A4.png" />
      <Avatar alt="Travis Howard" src="New Folder/A3.png" />
      <Avatar alt="Cindy Baker" src="New Folder/A1.png" />
      <Avatar alt="Agnes Walker" src="New Folder/A5.png" />
   
    </AvatarGroup>
  );
}

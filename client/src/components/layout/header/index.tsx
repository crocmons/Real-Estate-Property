/* eslint-disable */
import React, { useContext } from 'react';
import { useGetIdentity } from '@pankod/refine-core';
import {
  AppBar,
  IconButton,
  Avatar,
  Stack,
  Toolbar,
  Typography,
} from '@pankod/refine-mui';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import { ColorModeContext } from 'contexts';
import ManageSearchIcon from '@mui/icons-material/Search';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import Badge from '@mui/material/Badge';

export const Header: React.FC = () => {

  const { data: user } = useGetIdentity();
  const showUserInfo = user && (user.name || user.avatar);

  
  function notificationsLabel(count: number) {
    if (count === 0) {
      return 'no notifications';
    }
    if (count > 5) {
      return 'more than 5 notifications';
    }
    return `${count} notifications`;
  }
  

  return (
    // CHANGE: header color & elevation
    <AppBar color="default" position="sticky" elevation={0} sx={{ background: '#FCFCFC' }}>
      <Toolbar>
        <Stack
          direction="row"
          width="100%"
          justifyContent="flex-end"
          alignItems="center"
        >
          <IconButton
            // onClick={() => {
            //   setMode();
            // }}
            sx={{
              p: '5px',
              m: '5px',
            }}
            aria-label={notificationsLabel(100)}
          >
              <Badge badgeContent={5} color="error">
            <NotificationsOutlinedIcon />
              </Badge>
          </IconButton>
          <IconButton
            sx={{
              p: '5px',
              m: '5px',
            }}
          >
            <ManageSearchIcon />
          </IconButton>
          <IconButton
            sx={{
              p: '5px',
              m: '8px',
            }}
          >
            <SettingsOutlinedIcon />
          </IconButton>
         
          {showUserInfo && (
            <Stack direction="row" gap="12px" alignItems="center" justifyContent="center">
              {user.avatar && <Avatar src={user?.avatar} alt={user?.name} />}

              {user.name && (
                // CHANGE: Display user info on the header
                <Stack direction="column">
                  <Typography sx={{ fontSize: 14, fontWeight: 600, color: '#11142D' }}>{user?.name}</Typography>
                  <Typography sx={{ fontSize: 12, color: '#808191' }}>{user?.email}</Typography>
                </Stack>
              )}
            </Stack>
          )}
        </Stack>
      </Toolbar>
    </AppBar>
  );
};

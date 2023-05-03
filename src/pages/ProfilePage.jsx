import React, { Component } from 'react';
import { MenuAppBar as AppBar } from '../components/Common/AppBar';
// import Box from '@mui/material/Box'
import { Box,Grid,Typography } from '@mui/material';
import {UserAvatar} from '../components/Common/UserAvatar';

class ProfilePage extends Component {
    render() {
        return (
            <>
                <AppBar />
                <Box sx={{ flexGrow: 1 }}>
					<Grid container spacing={8} sx={{padding:12}}>
						<Grid item xs={10}>
							<Typography variant="h1" component="h6">Edit Profile</Typography>
						</Grid>
						<Grid item xs={2}>
							<UserAvatar 
							sx={{width:120, height: 120}} 
							alt="Smir Khan"
							src="https://images.unsply1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"/>
						</Grid>
						<Grid item xs={6}>FirstName</Grid>
						<Grid item xs={6}>LastName</Grid>
						<Grid item xs={12}>Email</Grid>
						<Grid item xs={12}>BirthDate</Grid>
						<Grid item xs={6}>BTN-Update</Grid>
						<Grid item xs={6}>BTN-Cancel</Grid>
						<Grid item xs={12}>BTN-Logout</Grid>
					</Grid>
				</Box>
            </>
        );
    }
}

export default ProfilePage;

// <ProfilePage/> ==> เรียก method render ==> <div>ProfilePage</div>

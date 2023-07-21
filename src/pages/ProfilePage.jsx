import { Box, Grid, Typography, Button } from '@mui/material';
import React, { Component } from 'react';

import { MenuAppBar as AppBar } from '../components/Common/AppBar';
import { UserAvatar } from '../components/Common/UserAvatar';
import { Input } from '../components/Common/Input';

class ProfilePage extends Component {
	render() {
		return (
			<>
				<AppBar />
				<Box sx={{ flexGrow: 1 }}>
					<Grid container spacing={8} sx={{ padding: 20 }}>
						<Grid item xs={10} alignSelf='flex-end'>
							<Typography variant='h1' component='h6'>
								Edit Profile
							</Typography>
						</Grid>
						<Grid item xs={2}>
							<UserAvatar
								alt='Zin'
								src='https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
								sx={{ width: 80, height: 80 }}
							/>
						</Grid>
						<Grid item xs={6}>
							<Input
								name='firstName'
								placeholder='your first name'
								error={false}
								label={<h1>First Name</h1>}
							/>
						</Grid>
						<Grid item xs={6}>
							<Input
								name='firstName'
								error={false}
								label={<h1>Last Name</h1>}
								placeholder='your last name'
							/>
						</Grid>
						<Grid item xs={12}>
							<Input
								type='email'
								name='email'
								placeholder='example@mail.com'
								error={false}
								label={<h1>Email</h1>}
							/>
						</Grid>
						<Grid item xs={12}>
							<Input type='date' name='birthDate' error={false} />
						</Grid>
						<Grid item xs={6}>
							<Button
								fullWidth
								variant='contained'
								size='large'
								sx={{ background: '#db4c3f', padding: 2 }}
							>
								<Typography variant='h5' component='span'>
									Edit Profile
								</Typography>
							</Button>
						</Grid>
						<Grid item xs={6}>
							<Button
								fullWidth
								variant='outlined'
								size='large'
								sx={{ padding: 2, backgroundColor: '#aaa' }}
							>
								<Typography variant='h5' component='span'>
									Cancel
								</Typography>
							</Button>
						</Grid>
						<Grid item xs={12}>
						<Button
								fullWidth
								variant='outlined'
								size='large'
								color='warning'
								sx={{ padding: 2 }}
							>
								<Typography variant='h5' component='span'>
									Logout
								</Typography>
							</Button>
						</Grid>
					</Grid>
				</Box>
			</>
		);
	}
}

export default ProfilePage;

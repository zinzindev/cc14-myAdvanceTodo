import { TextField } from '@mui/material';

export function Input(props) {
	return (
		<TextField
			fullWidth
			type={props.type || 'text'}
			name={props.name}
			variant={props.variant || 'outlined'}
			color={props.color || 'primary'}
			error={props.error}
			label={props.label && <h1>{props.label}</h1>}
			placeholder={props.placeholder}
            size='small'
			{...props}
		/>
	);
}

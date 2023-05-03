import CircularProgress from '@mui/material/CircularProgress';
import styled from 'styled-components';

// สร้าง Commponent
const Wrapper = styled.div`
    position: relative;
    height: 100vh;

    & > .loading__container {
        display: flex;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
`;

export function Spinner() {
    return (
        <Wrapper>
            <div className='loading__container'>
                <CircularProgress />
            </div>
        </Wrapper>
    );
}

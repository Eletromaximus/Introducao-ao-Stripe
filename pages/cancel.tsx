import React from 'react';
import {useRouter} from 'next/router';
import Link from 'next/link';

// import { Container } from './styles';

const CancelPage: React.FC = () => {
    
    return (
        <>
           <h1>Canceled.</h1>

           <Link href='/'><a href="">Go Back</a></Link>
        </>
    )
}

export default CancelPage;
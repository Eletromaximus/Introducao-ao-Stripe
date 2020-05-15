import React from 'react';
import {useRouter} from 'next/router';
import Link from 'next/link';

// import { Container } from './styles';

const SuccessPage: React.FC = () => {
    const {
        query: {itemName},
    } = useRouter();
    
    return (
        <>
           <h1>Thank you for buying {itemName}!</h1>

           <Link href='/'><a href="">Go Back</a></Link>
        </>
    )
}

export default SuccessPage;
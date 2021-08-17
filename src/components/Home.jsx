import { Redirect } from 'react-router-dom';
import {Wrapper, HomeContent, HomeTitle, Button} from './styles';

import {useState} from 'react';

export default function Home(){

    const settedSignedIn = localStorage.getItem('signedIn');
    const [sigedIn, setSignedIn] = useState(settedSignedIn);
    const firstName = localStorage.getItem('firstName');
    const lastName = localStorage.getItem('lastName');

    const handleClick = e => setSignedIn(false);
    
    if (!sigedIn){
        localStorage.setItem('signedIn', sigedIn);
        return <Redirect to='/sign-in'/>
    }

    return (
        <Wrapper>
            <HomeContent>
                <HomeTitle>Welcome, {firstName} {lastName}</HomeTitle>
                <Button onClick={handleClick}>Log out</Button>
            </HomeContent>
        </Wrapper>
    );
}
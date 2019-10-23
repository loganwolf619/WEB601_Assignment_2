import styled from 'styled-components';

export const ButtonContainer = styled.button`
text-transform:capitalize;
font-size:1.4rem;
background: transparent;
border:0.2rem solid var(--mainYellow);
color:var(--lightBlue);
border-radius: 0.5rem;
padding: 0.2 rem, 0.5 rem;
cursor: pointer;
margin: 0.2rem, 0.5rem 0.2rem 0;
transition:all 0.5s ease-in-out;
&:hover{
    background:var(--mainYellow);
    color:var(--darkRed);
}
&:focus{
    outline:none;
}
`;


export const ButtonLoad = styled.button`
text-transform:capitalize;
font-size:1.4rem;
background: transparent;
border:0.2rem solid var(--mainYellow);
color:var(--lightBlue);
border-radius: 0.5rem;
padding: 0.2 rem, 0.5 rem;
cursor: pointer;
margin: 0.2rem, 0.5rem 0.2rem 0;
transition:all 0.5s ease-in-out;
&:hover{
    background:var(--mainYellow);
    color:var(--mdarkRed);
}
&:focus{
    outline:none;
}
`;

export const ButtonForm = styled.butoon`
text-transform:capitalize;
font-size:1.6rem;
background: #4CAF50;
border:0.2rem solid var(--mainYellow);
color:var(--lightBlue);
border-radius: 0.5rem;
padding: 0.2 rem, 0.5 rem;
cursor: pointer;
width:100%
margin: 0.2rem, 0.5rem 0.2rem 0;
transition:all 0.5s ease-in-out;
&:hover{
    background:var(--mainYellow);
    color:var(--darkRed);
}
&:focus{
    outline:none;
}
`;
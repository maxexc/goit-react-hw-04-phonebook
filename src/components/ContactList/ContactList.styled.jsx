import styled from 'styled-components';

export const ContactsBlock = styled.div`
    padding: 10px;
    border: 1px solid darkcyan;    
    border-radius: 5px;
    background-color: rgb(100, 237, 207);
    color: darkblue;
    box-shadow: 3px 6px 6px rgba(0, 0, 0, 0.15);
`

export const ContactsTitle = styled.h2`
    font-size: 30px;
    margin-bottom: 10px;
    color: darkblue;
    text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.2);
    text-align: center;
`

export const ContactList = styled.ul`   
    max-width: 400px;
    min-width: 340px;
    padding: 0;
    list-style: inside;
    font-size: 20px;
    color: black;
    color: darkblue;
    font-weight: 600;
    /* text-shadow: 2px 2px 2px rgba(28, 2, 141, 0.2); */
    display: flex;
    flex-direction: column;
    gap: 15px;
`
export const ContactItem = styled.li`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const ContactBtn = styled.button`
    margin-left: 20px;
    width: 100px;
    padding: 5px 10px;
    /* background-color: rgb(28, 80, 165); */
    background-color: rgb(20, 89, 116);
    color: white;
    border: none;
    border-radius: 15px;
    
    transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1),
        background-color 250ms cubic-bezier(0.4, 0, 0.2, 1),
        box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1);
    &:hover {
        background-color: rgb(253, 232, 212);
        background-color: #fafafa;
        color: darkblue;
        box-shadow: 1px 3px 3px rgba(0, 0, 0, 0.4);
    }  
`
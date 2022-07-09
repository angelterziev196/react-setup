import axios from 'axios';
import React from 'react';
import { Outlet } from 'react-router-dom';

export default function Form() {
    function testApi(e) {
        e.preventDefault();
        const inputValue = document.getElementById('name').value;
        axios
            .post('http://localhost:3000/profile', {
                name: inputValue,
            })
            .then((response) => {
                console.log(response);
            })
            .then((error) => console.log(error));
    }

    return (
        <form>
            <label>
                Name:
                <input id='name' type='text' name='name' />
            </label>
            <input onClick={(e) => testApi(e)} type='submit' value='Submit' />
            <Outlet />
        </form>
    );
}

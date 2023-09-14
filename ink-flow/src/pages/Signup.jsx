import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_PROFILE } from './utils/mutations';

import Auth from './utils/auth'


const Signup = () => {
    const [formState, setFormState] = useState({
        email: '',
        password: '',
    });
    const [addProfile, { error, data }] = useMutation(ADD_PROFILE);

    const handleChange = async (event) => {
        const { name, value } = event.target;
    }
}
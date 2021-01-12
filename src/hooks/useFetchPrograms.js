/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect, useState} from 'react';

const useFetchPrograms = () => {
    const [data, setData] = useState('LOADING');

    useEffect(() => {
        fetch('https://still-castle-99749.herokuapp.com/playlist')
            .then((response) => response.json())
            .then((json) => {
                setData(json.member);
            })
            .catch((error) => setData(error.message));
    }, []);

    return data;
};

export default useFetchPrograms;

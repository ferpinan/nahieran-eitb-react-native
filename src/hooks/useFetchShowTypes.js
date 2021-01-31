/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect, useState} from 'react';

const useFetchShowTypes = () => {
    const [data, setData] = useState('LOADING');

    useEffect(() => {
        fetch('http://still-castle-99749.herokuapp.com/program-type-list')
            .then(response => response.json())
            .then(json => {
                setData(json.member);
            })
            .catch(error => setData(error.message));
    }, []);

    return data;
};

export default useFetchShowTypes;

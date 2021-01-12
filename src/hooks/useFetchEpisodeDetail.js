/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect, useState} from 'react';

const useFetchProgramDetail = (showUrl) => {
    const [data, setData] = useState("LOADING");

    useEffect(() => {
        fetch(showUrl.replace("http://", "https://"))
            .then((response) => response.json())
            .then((json) => {
                setData(json);
            });
    }, [showUrl]);

    return data;
};

export default useFetchProgramDetail;

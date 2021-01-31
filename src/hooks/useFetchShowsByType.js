import React, {useEffect, useState} from 'react';

const useFetchShowsByType = (route, showList) => {
    const [data, setData] = useState('LOADING');

    let id = '';
    if (route) {
        id = route.params['@id'];
    }
    useEffect(() => {
        if (!route) {
            console.log('Ha entrado mal');
            setData(showList);
            return;
        }
        fetch(id)
            .then(response => response.json())
            .then(json => {
                setData(json.member);
            })
            .catch(error => {
                setData(error.message);
            });
    }, [id]);

    return data;
};

export default useFetchShowsByType;

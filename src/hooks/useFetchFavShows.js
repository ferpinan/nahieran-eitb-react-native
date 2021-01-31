import * as LocalStorage from '../utils/LocalStorage';

import React, {useEffect, useState} from 'react';

const useFetchFavShows = favShows => {
    const [data, setData] = useState([]);

    useEffect(() => {
        LocalStorage.getFavShows().done(ea => {
            setData(ea);
        });
    }, [favShows]);

    return data;
};

export default useFetchFavShows;

import * as LocalStorage from '../utils/LocalStorage';

import React, {useEffect, useState} from 'react';

const useFetchStartedEpisodes = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        LocalStorage.getStartedEpisodes().done(setData);
    }, []);

    return data;
};

export default useFetchStartedEpisodes;

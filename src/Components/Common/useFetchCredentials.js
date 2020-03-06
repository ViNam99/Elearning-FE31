import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { fetchCredential } from '../../redux/Actions/User';

const useFetchCredentials = () => {
    const dispatch= useDispatch();
    const {value} = useSelector( state => state.UserReducer);
    useEffect(()=>{
        dispatch(fetchCredential(value));
    },[value])
    return {value};
};

export default useFetchCredentials;
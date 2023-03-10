import {useSelector} from "react-redux";
import {removeFavorites} from "../actions/MainActions";
import AutoPagination from "../components/autoPagination/AutoPagination";
import React from "react";


const FavoritePage = () => {
    const {favorites}: any = useSelector(state => state)

    return (
        <>
            <AutoPagination arr={favorites} method={removeFavorites} label={'Избранное'}/>
        </>
    )
}

export default FavoritePage

import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom"
import { useHttp } from "../../hooks/http.hook";
import SingleItemLayout from "../singleItemLayout/SingleItemLayout";

const SinglePage = () => {
    const { id } = useParams();
    const { request } = useHttp();
    const [data, setData] = useState();

    useEffect(() => {
        fetchSinglePage()
    }, [])

    const fetchSinglePage = async () => {
        const res = await request(`https://imdb-api.com/en/API/Title/k_dkokc24s/${id}/Images,Trailer,`);
        setData(res)
    }

    console.log(data)

    return (
        <SingleItemLayout {...data}/>
    )
}

export default SinglePage
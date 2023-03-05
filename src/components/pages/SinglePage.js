import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom"
import { useHttp } from "../../hooks/http.hook";
import SingleItemLayout from "../singleItemLayout/SingleItemLayout";
import Spinner from "../spinner/Spinner";

const SinglePage = () => {
    const { id } = useParams();
    const { request } = useHttp();
    const [data, setData] = useState();
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        setIsLoading(true)
        fetchSinglePage()
    }, [id])

    const fetchSinglePage = async () => {
        const res = await request(`https://imdb-api.com/en/API/Title/k_ul7iq834/${id}/Images,Trailer,`);
        setData(res)
        setIsLoading(false)
    }

    if (isLoading) {
        return (
            <div className="spinner spinner-page">
                <Spinner />
            </div>
        )
    }

    return (
        <SingleItemLayout {...data} />
    )
}

export default SinglePage
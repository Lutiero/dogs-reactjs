import React, {useEffect} from 'react';
import Head from "../../Helper/Head.jsx";
import useFetch from "../../Hooks/useFetch.jsx";
import {STATS_GET} from "../../Api.jsx";
import Loading from "../../Helper/Loading.jsx";
import Error from "../../Helper/Error.jsx";
const UserStatsGraphs = React.lazy(() => import('./UserStatsGraphs.jsx'))

const UserStats = () => {
    const {data, error, loading, request} = useFetch();

    useEffect(()=> {
        async function getData() {
            const {url, options} = STATS_GET();
            await request(url, options);
        }
        getData();
    }, [request])

    if(loading) return <Loading/>
    if(error) return <Error/>
    if(data)
    return (
        <React.Suspense fallback={<div></div>}>
            <Head title="Estatísticas" />
            <UserStatsGraphs data={data} />
        </React.Suspense>
    );
    else return null;
};

export default UserStats;
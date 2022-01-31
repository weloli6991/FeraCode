import React from 'react';
import { Leagues } from '../../components/Leagues';
import Year from '../../components/Year';

const Home = ({ }) => {
    const [loading, setLoading] = React.useState(false);
    const [loadingFlatList, setLoadingFlatList] = React.useState(false);
    const [year, setYear] = React.useState('');
    const [leaguesLimit, setLeaguesLimit] = React.useState([]);
    const [textSearch, setTextSearch] = React.useState('');
    const [searchLeagues, setSearchLeagues] = React.useState([]);
    const [leagues, setLeagues] = React.useState([]);
    const [yearValidation, setYearValidation] = React.useState(false);
    const [errorServer, setErrorServer] = React.useState(false);

    if (yearValidation) {
        return (
            <Leagues
                setLoading={setLoading}
                loadingFlatList={loadingFlatList}
                setLoadingFlatList={setLoadingFlatList}
                year={year}
                setYear={setYear}
                leaguesLimit={leaguesLimit}
                setLeaguesLimit={setLeaguesLimit}
                textSearch={textSearch}
                setTextSearch={setTextSearch}
                searchLeagues={searchLeagues}
                setSearchLeagues={setSearchLeagues}
                leagues={leagues}
                setYearValidation={setYearValidation}
            />
        );
    } else {
        return (
            <Year
                loading={loading}
                setYear={setYear}
                year={year}
                setLoading={setLoading}
                leaguesLimit={leaguesLimit}
                setLeagues={setLeagues}
                setLeaguesLimit={setLeaguesLimit}
                setYearValidation={setYearValidation}
                errorServer={errorServer}
                setErrorServer={setErrorServer}
            />
        );
    }
}

export default React.memo(Home);
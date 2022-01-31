export const getLeagues = (axios, year, leaguesLimit, setLeagues, setLeaguesLimit, setYearValidation, setLoading, setErrorServer) => {
    axios.get('https://api-football-v1.p.rapidapi.com/v3/leagues', {
        headers: {
            "x-rapidapi-host": "api-football-v1.p.rapidapi.com",
            "x-rapidapi-key": "1f410bd596msh9547e83959aa144p1e9bb9jsnbada85c94ced"
        },
        params: { season: year }
    }).then((response) => {
        setLeagues(response.data.response);
        setLeaguesLimit([...leaguesLimit, ...response.data.response.slice(0, 20)])
        setYearValidation(true)
    }).catch((e) => {
        setLoading(false);
        setErrorServer(true);
        console.log("error", e);
    });
}
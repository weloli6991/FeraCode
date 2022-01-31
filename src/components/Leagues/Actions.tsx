export const loadMore = (setLoadingFlatList, searchLeagues, textSearch, leaguesLimit, setLeaguesLimit, leagues) => {
    setLoadingFlatList(false);
    if (searchLeagues.length || textSearch) {
        if (leaguesLimit.length < searchLeagues.length) {
            setLeaguesLimit([...leaguesLimit, ...searchLeagues.slice(leaguesLimit.length, 20 + leaguesLimit.length)])
        } else {
            setLoadingFlatList(true);
            return;
        }
    } else {
        if (leaguesLimit.length < leagues.length) {
            setLeaguesLimit([...leaguesLimit, ...leagues.slice(leaguesLimit.length, 20 + leaguesLimit.length)])
        } else {
            setLoadingFlatList(true);
            return null;
        }
    }
}

export const renderFooter = (loadingFlatList, View) => {
    if (loadingFlatList) {
        return null;
    } else {
        return (
            View
        )
    }
}
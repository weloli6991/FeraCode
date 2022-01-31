import React from 'react';
import * as R from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Ripple from 'react-native-material-ripple';
import _ from 'lodash';
import styles from './style';
import { loadMore, renderFooter } from './Actions';

export const Leagues = ({ setLoading, loadingFlatList, setLoadingFlatList, year, setYear, leaguesLimit, setLeaguesLimit, textSearch, setTextSearch, searchLeagues, setSearchLeagues, leagues, setYearValidation }) => {
    const navigation = useNavigation();
    React.useEffect(() => {
        loadMore(setLoadingFlatList, searchLeagues, textSearch, leaguesLimit, setLeaguesLimit, leagues);
    }, [searchLeagues]);

    const search = (text: string) => {
        const filter = leagues.filter((o) => {
            var nameLeague = (o.league.name).toLowerCase();
            var nameCountry = (o.country.name).toLowerCase();
            return (nameLeague.search(text.toLowerCase()) > -1 || nameCountry.search(text.toLowerCase()) > -1);
        });

        setLeaguesLimit([]);
        setSearchLeagues(filter);
    }

    const selectNewDate = () => {
        setYear('');
        setYearValidation(false);
        setLoading(false);
        setLeaguesLimit([]);
        setTextSearch('');
    }

    const debounceSearch = _.debounce((text) => {
        search(text);
        setTextSearch(text);
    }, 300);

    return (
        <R.View style={styles.container}>
            <R.View style={styles.sectionSearch}>
                <Ripple style={styles.goBack} onPress={() => selectNewDate()}>
                    <R.Image
                        source={require('../../assets/arrow-left.png')}
                    />
                </Ripple>
                <R.Image
                    style={styles.imageSearch}
                    source={require('../../assets/search.png')}
                />
                <R.TextInput
                    style={styles.search}
                    onChangeText={(text) => { debounceSearch(text) }}
                    placeholder="Search your league ..."
                    placeholderTextColor="#65656B"
                />
            </R.View>

            <R.FlatList
                data={leaguesLimit}
                extraData={leaguesLimit}
                renderItem={(item) => {
                    return (
                        <Ripple style={styles.sectionLeague} onPress={() => navigation.navigate('Classifications', { year: year, league: item.item.league.id})}>
                            <R.Image
                                style={styles.imageLeague}
                                source={{ uri: item.item.league.logo }}
                            />
                            <R.View style={styles.textsLeague}>
                                <R.Text style={styles.titleLeague}>{item.item.league.name}</R.Text>
                                <R.Text style={styles.subTitleLeague}>{item.item.country.name}</R.Text>
                            </R.View>
                            <R.Image
                                style={styles.enterIconLeague}
                                source={require('../../assets/arrow-right.png')}
                            />
                        </Ripple>
                    )
                }}
                onEndReached={() => loadMore(setLoadingFlatList, searchLeagues, textSearch, leaguesLimit, setLeaguesLimit, leagues)}
                onEndReachedThreshold={0.1}
                ItemSeparatorComponent={() => <R.View style={styles.separatorLeague}></R.View>}
                ListFooterComponent={renderFooter(loadingFlatList,
                    <R.View style={styles.loadingFlatList}>
                        <R.ActivityIndicator color="#fff" size="large" />
                    </R.View>
                )}
                ListEmptyComponent={() => {
                    setLoadingFlatList(true);
                    return(
                        <R.Text style={styles.nothingFound}>Nothing found!</R.Text>
                    )
                }}
            />
        </R.View>
    );
}
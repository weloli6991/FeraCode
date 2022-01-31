import React, { useEffect, useState } from 'react';
import * as R from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Ripple from 'react-native-material-ripple';
import { SvgUri } from 'react-native-svg';
import styles from './style';
import axios from 'axios';
import reactotron from 'reactotron-react-native';

const Classifications = ({ route }) => {
    const navigation = useNavigation();
    const [classifications, setClassifications] = useState([]);
    const [finish, setFinish] = useState(false);
    const [errorServer, setErrorServer] = useState(false);
    const [calcHeight, setCalcHeight] = useState(0);

    useEffect(() => {
        standings();
    }, []);

    const standings = () => {
        axios.get('https://api-football-v1.p.rapidapi.com/v3/standings', {
            headers: {
                "x-rapidapi-host": "api-football-v1.p.rapidapi.com",
                "x-rapidapi-key": "1f410bd596msh9547e83959aa144p1e9bb9jsnbada85c94ced"
            },
            params: { season: route.params.year, league: route.params.league }
        }).then((response) => {
            setClassifications(response.data.response);
            setFinish(true)
        }).catch((e) => {
            setErrorServer(true);
            console.log("error", e);
        });
    }

    React.useEffect(() => {
        if (errorServer) {
            R.Alert.alert(
                "Error in server, try again!",
                "",
                [
                    { text: "OK", onPress: () => navigation.goBack() }
                ]
            );
        }
    }, [errorServer]);

    if (classifications.length || finish) {
        return (
            <R.View style={styles.container}>
                <R.View style={styles.sectionHeader}>
                    <Ripple style={styles.goBack} onPress={() => { navigation.goBack() }}>
                        <R.Image
                            source={require('../../assets/arrow-left.png')}
                        />
                    </Ripple>
                    {classifications.length ?
                        <R.View style={styles.sectionTitle}>
                            <SvgUri
                                width={16}
                                height={16}
                                uri={classifications[0].league.flag}
                            />
                            <R.Text style={styles.textCountry}>{classifications[0].league.country}</R.Text>
                        </R.View>
                        :
                        null
                    }
                </R.View>

                {classifications.length ?
                    <R.View style={{ flex: 1 }} onLayout={(ev) => {
                        var calc = R.Dimensions.get('window').height - ev.nativeEvent.layout.height;
                        setCalcHeight(R.Dimensions.get('window').height - 232 - calc)
                    }}>
                        <R.View style={styles.sectionIconLeague}>
                            <R.Image
                                style={styles.iconLeague}
                                source={{ uri: classifications[0].league.logo }}
                            />
                            <R.Text style={styles.nameLeague}>{classifications[0].league.name}</R.Text>
                        </R.View>
                        <R.FlatList
                            data={classifications[0].league.standings[0]}
                            style={[styles.flatList, { height: calcHeight }]}
                            renderItem={(item) => {
                                return (
                                    <Ripple style={styles.renderFlatList} onPress={() => { navigation.navigate('Team', { team: item.item.team.id }) }}>
                                        <R.View style={styles.sectionTeams}>
                                            <R.Text style={[styles.textHeader, { left: 10, position: "absolute" }]}>{item.item.rank}</R.Text>
                                            <R.Image
                                                style={[styles.iconTeam, { left: 22, position: "absolute" }]}
                                                source={{ uri: item.item.team.logo }}
                                            />
                                            <R.Text style={[styles.textHeader, { paddingLeft: 44 }]}>{item.item.team.name}</R.Text>
                                        </R.View>

                                        <R.View style={styles.sectionPontuations}>
                                            <R.View style={styles.pontuationsText}>
                                                <R.Text style={styles.textHeader}>{item.item.all.win}</R.Text>
                                            </R.View>

                                            <R.View style={styles.pontuationsText}>
                                                <R.Text style={styles.textHeader}>{item.item.all.draw}</R.Text>
                                            </R.View>

                                            <R.View style={styles.pontuationsText}>
                                                <R.Text style={styles.textHeader}>{item.item.all.lose}</R.Text>
                                            </R.View>

                                            <R.View style={styles.pontuationsText}>
                                                <R.Text style={styles.textHeader}>{item.item.all.goals.for}</R.Text>
                                            </R.View>

                                            <R.View style={styles.pontuationsText}>
                                                <R.Text style={styles.textHeader}>{item.item.points}</R.Text>
                                            </R.View>
                                        </R.View>
                                    </Ripple>
                                )
                            }}
                            ListHeaderComponent={() => {
                                return (
                                    <R.View style={styles.headerFlatList}>
                                        <R.View style={styles.sectionTeams}>
                                            <R.Text style={[styles.textHeader, { paddingLeft: 9 }]}>#</R.Text>
                                            <R.Text style={[styles.textHeader, { paddingLeft: 12 }]}>Team</R.Text>
                                        </R.View>

                                        <R.View style={styles.sectionPontuations}>
                                            <R.View style={styles.pontuationsText}>
                                                <R.Text style={styles.textHeader}>W</R.Text>
                                            </R.View>

                                            <R.View style={styles.pontuationsText}>
                                                <R.Text style={styles.textHeader}>D</R.Text>
                                            </R.View>

                                            <R.View style={styles.pontuationsText}>
                                                <R.Text style={styles.textHeader}>L</R.Text>
                                            </R.View>

                                            <R.View style={styles.pontuationsText}>
                                                <R.Text style={styles.textHeader}>GS</R.Text>
                                            </R.View>

                                            <R.View style={styles.pontuationsText}>
                                                <R.Text style={styles.textHeader}>Pts</R.Text>
                                            </R.View>
                                        </R.View>
                                    </R.View>
                                )
                            }}
                            ItemSeparatorComponent={() => {
                                return (
                                    <R.View style={{ marginBottom: 8 }}></R.View>
                                )
                            }}
                            ListFooterComponent={() => {
                                return (
                                    <R.View style={{ marginBottom: 8 }}></R.View>
                                )
                            }}
                        />
                    </R.View>
                    :
                    <R.Text style={styles.nothingFound}>Nothing found!</R.Text>
                }
            </R.View>
        );
    } else {
        return (
            <R.View style={[styles.container, styles.center]}>
                <R.ActivityIndicator size="large" color="#fff" />
            </R.View>
        );
    }
}

export default React.memo(Classifications);
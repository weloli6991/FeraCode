import React from 'react';
import * as R from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Ripple from 'react-native-material-ripple';
import styles from './style';
import axios from 'axios';

const Team = ({ route }) => {
    const navigation = useNavigation();
    const [team, setTeam] = React.useState([]);
    const [finish, setFinish] = React.useState(false);
    const [errorServer, setErrorServer] = React.useState(false);

    React.useEffect(() => {
        getTeam();
    }, []);

    const getTeam = () => {
        axios.get('https://api-football-v1.p.rapidapi.com/v3/teams', {
            headers: {
                "x-rapidapi-host": "api-football-v1.p.rapidapi.com",
                "x-rapidapi-key": "1f410bd596msh9547e83959aa144p1e9bb9jsnbada85c94ced"
            },
            params: { id: route.params.team }
        }).then((response) => {
            setTeam(response.data.response);
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

    if (team.length || finish) {
        return (
            <R.View style={styles.container}>
                <R.View style={styles.sectionHeader}>
                    <Ripple style={styles.goBack} onPress={() => { navigation.goBack() }}>
                        <R.Image
                            source={require('../../assets/arrow-left.png')}
                        />
                    </Ripple>
                </R.View>

                {team.length ?
                    <R.View>
                        <R.View style={styles.sectionIconTeam}>
                            <R.Image
                                style={styles.iconTeam}
                                source={{ uri: team[0].team.logo }}
                            />
                        </R.View>

                        <R.View style={{ paddingHorizontal: 28, marginTop: 18 }}>
                            <R.View style={styles.sectionInformations}>
                                <R.Text style={styles.nameTeam}>Informations of team</R.Text>
                                <R.Text style={styles.textInformations}>Name of team: {team[0].team.name}</R.Text>
                                <R.Text style={styles.textInformations}>Country: {team[0].team.country}</R.Text>
                                <R.Text style={styles.textInformations}>Year of founded: {team[0].team.founded}</R.Text>
                            </R.View>
                        </R.View>

                        <R.View style={{ paddingHorizontal: 28, marginTop: 18 }}>
                            <R.View style={styles.sectionInformations}>
                                <R.Text style={styles.nameTeam}>Informations of stadium</R.Text>
                                <R.Text style={styles.textInformations}>Name of stadium: {team[0].venue.name}</R.Text>
                                <R.Text style={styles.textInformations}>Address: {team[0].venue.address}</R.Text>
                                <R.Text style={styles.textInformations}>City: {team[0].venue.city}</R.Text>
                                <R.Text style={styles.textInformations}>Capacity: {team[0].venue.capacity}</R.Text>
                            </R.View>
                        </R.View>
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

export default React.memo(Team);
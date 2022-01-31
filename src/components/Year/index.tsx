import React from 'react';
import * as R from 'react-native';
import axios from "axios";
import { getLeagues } from './Actions';
import styles from './style';

const Year = ({ loading, year, setYear, setLoading, leaguesLimit, setLeagues, setLeaguesLimit, setYearValidation, errorServer, setErrorServer }) => {
    React.useEffect(() => {
        if (year.length === 4) {
            var date = new Date();
            var todayYear = date.getFullYear();
            if (parseInt(year) > todayYear) {
                setYear('');
                R.Alert.alert('Year must be less than or equal to the current one.')
            } else {
                setLoading(true);
                getLeagues(axios, year, leaguesLimit, setLeagues, setLeaguesLimit, setYearValidation, setLoading, setErrorServer);
            }
        } else {
            setYearValidation(false)
        }
    }, [year]);

    React.useEffect(() => {
        if (errorServer)
            R.Alert.alert('Error in server, try again!');
    }, [errorServer]);

    return (
        <R.View style={[styles.container, styles.center]}>
            {loading ?
                <R.ActivityIndicator size="large" color="#fff" />
                :
                <R.View style={[styles.container, styles.center]}>
                    <R.Text style={styles.textYaer}>Enter a year to list leagues:</R.Text>
                    <R.TextInput
                        style={styles.searchYear}
                        value={year}
                        onChangeText={(text) => {
                            setYear(text);
                        }}
                        placeholder="Ex: 2020"
                        placeholderTextColor="#65656B"
                        keyboardType="numeric"
                    />
                </R.View>
            }
        </R.View>
    );
}

export default React.memo(Year);
import { BackHandler, StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#181829"
    },
    center:{
        justifyContent: 'center',
        alignItems: 'center'
    },
    sectionHeader: {
        flexDirection: 'row',
        paddingLeft: 64,
        paddingRight: 28,
        paddingVertical: 42,
        justifyContent: 'center',
        alignItems: 'center'
    },
    goBack: {
        position: "absolute",
        left: 28,
        zIndex: 2
    },
    sectionTitle: {
        width: "100%",
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute'
    },
    iconCountry: {
        width: 12,
        height: 12,
        borderRadius: 12,
    },
    textCountry: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '600',
        paddingLeft: 12
    },
    sectionIconLeague: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    iconLeague: {
        width: 112,
        height: 112,
        borderRadius: 112,
        backgroundColor: '#fff'
    },
    nameLeague: {
        fontSize: 24,
        fontWeight: "600",
        color: "#fff",
        paddingVertical: 18
    },
    flatList: {
        paddingHorizontal: 28
    },
    headerFlatList: {
        width: "100%",
        flexDirection: 'row',
        height: 30,
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderColor: "#2B2B3D",
        marginBottom: 14
    },
    textHeader: {
        color: "#fff",
        fontSize: 14
    },
    sectionTeams: {
        width: "50%",
        flexDirection: 'row',
        alignItems: 'center'
    },
    sectionPontuations: {
        width: "50%",
        flexDirection: "row",
        justifyContent: 'center',
        alignItems: 'center'
    },
    pontuationsText: {
        width: "20%",
        justifyContent: 'center',
        alignItems: 'center'
    },
    renderFlatList: {
        width: "100%",
        flexDirection: 'row',
        paddingVertical: 14,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        backgroundColor: "#14274D"
    },
    iconTeam: {
        width: 16,
        height: 16
    },
    nothingFound:{
        color: '#fff',
        fontSize: 16,
        textAlign: 'center'
    }
});
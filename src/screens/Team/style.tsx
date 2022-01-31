import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#181829"
    },
    center: {
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
    sectionIconTeam: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    iconTeam: {
        width: 112,
        height: 112,
        borderRadius: 112,
        backgroundColor: '#fff'
    },
    nameTeam: {
        fontSize: 18,
        fontWeight: "700",
        color: "#fff",
        paddingBottom: 5,
        textAlign: 'center'
    },
    sectionInformations: {
        width: "100%",
        borderRadius: 10,
        backgroundColor: "#14274D",
        paddingVertical: 18,
        paddingHorizontal: 18
    },
    textInformations: {
        color: '#fff',
        fontSize: 12
    },
    nothingFound: {
        color: '#fff',
        fontSize: 16,
        textAlign: 'center'
    }
});
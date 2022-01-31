import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#181829"
    },
    sectionSearch: {
        flexDirection: 'row',
        paddingLeft: 64,
        paddingRight: 28,
        paddingVertical: 42,
        justifyContent: 'center',
        alignItems: 'center'
    },
    goBack:{
        position: "absolute",
        left: 28,
        zIndex: 2
    },
    imageSearch: {
        position: 'absolute',
        left: 79,
        zIndex: 1
    },
    search: {
        width: "100%",
        height: 54,
        backgroundColor: "#222232",
        borderRadius: 14,
        paddingLeft: 42,
        fontSize: 14,
        color: "#fff"
    },
    sectionLeague:{
        flexDirection: 'row',
        width: "100%",
        // height: 50,
        paddingVertical: 15,
        paddingHorizontal: 28,
        alignItems: 'center'
    },
    imageLeague:{
        width: 24,
        height: 24,
        borderRadius: 24
    },
    textsLeague:{
        paddingLeft: 12,
        paddingRight: 56
    },
    titleLeague: {
        fontSize: 16,
        fontWeight: "600",
        color: "#fff",
        lineHeight: 20.11
    },
    subTitleLeague: {
        fontSize: 12,
        color: "#aaa",
        lineHeight: 15.08
    },
    enterIconLeague:{
        width: 16,
        height: 16,
        position: "absolute",
        right: 28
    },
    separatorLeague:{
        borderBottomWidth: 1,
        borderColor: "#222232"
    },
    loadingFlatList:{
        alignSelf: "center",
        marginVertical: 20
    },
    nothingFound:{
        color: '#fff',
        fontSize: 16,
        textAlign: 'center'
    }
});
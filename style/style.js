import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingLeft: 30,
        paddingRight: 30,
        marginTop: 25
      },
      authorText: {
        fontSize: 15,
        alignSelf: 'center',
        fontStyle: 'italic',
        marginBottom: 3
      }, 
      mainHeader: {
        fontSize: 50,
        fontWeight: 'bold',
        alignSelf: 'center',
        color: '#4791ff',
        marginBottom: 3
      },
      subHeader: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
        marginTop: 15
      },
      input: {
        borderColor: '#000',
        borderWidth: 1,
        borderRadius: 5,
        paddingLeft: 10,
        paddingBottom: 8,
        paddingTop: 8,
        height: 45,
        fontSize: 20,
        backgroundColor: '#f5f5f5'
      },
      resultArea: {
        marginTop: 5,
        alignItems: 'center',
        backgroundColor: '#ebebeb',
        borderColor: 'lightgrey',
        borderRadius: 5,
        padding: 5
      },
      resultText: {
        fontSize: 20,
        fontStyle: 'italic',
        color: 'gray'
      },   
      button: {
        margin: 10,
        flexDirection: "row",
        padding: 10,
        backgroundColor: "#4791ff",
        width: 150,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center'
      },
      buttonText: {
        color: "#fff",
        fontSize: 25
      },
      buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        width: '100%',
        marginBottom: 5
    },
    label: {
        marginRight: 10,
        fontSize: 18,
        paddingLeft: 10
    },
    circle: {
        height: 28,
        width: 28,
        borderRadius: 15,
        borderWidth: 4,
        borderColor: '#dedede',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fafafa'
      },
    checkedCircle: {
        width: 12,
        height: 12,
        borderRadius: 7,
        borderColor: '#dedede',
        borderWidth: 2,
        backgroundColor: '#4791ff'
    },
    result: {
        fontSize: 30,
        fontWeight: 'bold'
    }
})
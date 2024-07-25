import { StyleSheet } from 'react-native';
import { colors} from '../../styles/colors';
export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    tittle: {
        fontSize: 30,
        fontWeight: "bold",
        textAlign: 'center',
        color:colors.black
    },
    formRow: {
        margin: 10,
        flexDirection: "row",
        alignItems: "center",
        borderWidth: 0.7,
        borderColor: colors.primary,
        borderRadius: 5
    },
    icon: {
        fontSize: 18,
        padding: 10,
        width: "70%"
    },

})
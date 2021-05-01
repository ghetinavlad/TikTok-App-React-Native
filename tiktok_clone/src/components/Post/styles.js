import {Dimensions, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container:{
        width:'100%',
        height:Dimensions.get('window').height-130,
    },
    video:{
        position:'absolute',
        top:0,
        left:0,
        right:0,
        bottom:0
    },
    uiContainer:{
        height:'100%',
        justifyContent:'flex-end'
    },
    rightContainer:{
        alignSelf:'flex-end',
        height:290,
        justifyContent:'space-between',
        marginRight:7
    },
    bottomContainer:{
        padding:10,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'flex-end'
    },
    handle:{
        color:'#ffffff',
        fontSize:16,
        fontWeight:'700',
        marginBottom:10
    },
    description:{
        color:'#ffffff',
        fontSize:15,
        fontWeight:'300',
        marginBottom:10
    },
    songContainer:{
        flexDirection:'row',
        alignItems:'center'
    },
    songName:{
        color:'#ffffff',
        fontSize:15,
        marginLeft:5
    },
    songImage:{
        width:45,
        height:45,
        borderRadius:25,
        borderWidth:8,
        borderColor:'#4c4c4c'
    },
    profilePicture:{
        width:50,
        height:50,
        borderRadius:25,
        borderWidth:1,
        borderColor:'white',
    
    },
    statsLabel:{
        color:'#ffffff',
        fontSize:14.5,
        fontWeight:'500',
        marginTop:5
    },
    iconContainer:{
        alignItems:'center'
    }

});

export default styles;
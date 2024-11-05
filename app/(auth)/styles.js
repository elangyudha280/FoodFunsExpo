import { StyleSheet,StatusBar } from "react-native"

export default classAuthPage = (width,height)=> StyleSheet.create({
    container:{
        position:"relative",
        width:'100%',
        backgroundColor:'#E9BA16',
        height:"100%",
    },
    containerView:{
        position:"relative", 
        width:'100%',
        height:"100%",
        paddingTop:StatusBar.currentHeight,
        padding:20,
        display:"flex",
        justifyContent:'center',
        gap:20
    },
    imageBottom:{
        objectFit:'contain',
        position:'absolute',
        right:'-2%',
        bottom:'-5%',
        zIndex:1,
        padding:0,
        margin:0
    },
    cardAuth:{
        width:width < 768 ? '100%' : 400,
        paddingVertical:10,
        paddingHorizontal:25,
        zIndex:2,
        marginHorizontal:"auto",
        backgroundColor:'#fff',
        borderRadius:10
    },
    styleInputAuth:{
        width:'100%',
        paddingVertical:5,
        borderBottomWidth:1,
        borderColor:'#626161'
    },
    buttonAuth:{
        width:'100%',
        padding:10,
        borderRadius:30,
        backgroundColor:'#E9BA16',
        marginHorizontal:'auto',
        paddingHorizontal:10,
        marginVertical:25,
        display:'flex',
        alignItems:'center'
        
    },
    containerOAuth:{
        position:"relative",
        width:"100%",
        marginTop:20,
        display:"flex",
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        gap:20,
    }
})
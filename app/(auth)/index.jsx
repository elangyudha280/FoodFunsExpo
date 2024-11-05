import React,{useState} from 'react'

// import component
import { SafeAreaView,View,ScrollView,Text, Image,TextInput,KeyboardAvoidingView,useWindowDimensions } from 'react-native'

// import icon
import { Ionicons } from '@expo/vector-icons'
import { TouchableOpacity } from 'react-native'
import { Link } from 'expo-router'

// import iconFacebook from '../../assets/images/facebookicon.svg'

// impot class stylesheet
import classAuthPage from './styles'

function AuthPage() {
    // get ukuran layar
    let {width,height} = useWindowDimensions()
    const classAuthPageDynamic = classAuthPage(width,height)
    // show password
    let [showPassword,setShowPassword] = useState(false)

  return (
    <SafeAreaView>
        <ScrollView style={classAuthPageDynamic.container} contentContainerStyle={{flexGrow:1}}>
            <View style={classAuthPageDynamic.containerView}>

                {/* logo */}
                <Image source={require('../../assets/images/LOGO.png')} style={{objectFit:"contain",width:'100%'}} />

                {/* card auth login */}
                <KeyboardAvoidingView behavior='padding' enabled={false} style={classAuthPageDynamic.cardAuth}>
                    {/* title */}
                    <View style={{
                        display:'flex',
                        justifyContent:'center',
                        alignItems:'center',
                    }}>
                        <Text style={{
                        textAlign:'center',
                        fontSize:26,
                        fontFamily:'InterMedium',
                        borderBottomWidth:2,
                        borderBottomColor:'#E9BA16'
                        }}>
                            Sign In
                        </Text>

                    </View>

                    {/* card form */}
                    <View style={{
                        position:'relative',
                        marginVertical:10,
                        width:'100%',
                    }}>

                        {/* input group email */}
                        <TextInput
                        style={classAuthPageDynamic.styleInputAuth}
                        placeholder="Email"
                        inputMode='email'
                        cursorColor={'#ddd'}
                        autoComplete='off'
                        // maxLength={40}
                        secureTextEntry
                        />

                        {/* input group password */}
                        <View style={[classAuthPageDynamic.styleInputAuth,{marginVertical:12,display:'flex',flexDirection:'row'}]}>
                            <TextInput
                            style={{
                                flex:1
                            }}
                            placeholder="Password"
                            inputMode='text'
                            cursorColor={'#ddd'}
                            autoComplete='off'
                            secureTextEntry={showPassword ? true : false}
                            />
                            {/* icon eye */}
                            <TouchableOpacity
                            onPress={()=>{setShowPassword(!showPassword)}}
                            style={{paddingHorizontal:8,display:'flex',justifyContent:'center'}}>
                                <Ionicons name={showPassword  ? 'eye-outline' : 'eye-off-outline'  } size={18} />
                            </TouchableOpacity>
                        </View>

                        {/* FORGOT PASSWORD */}
                        <View href={'(auth)'} style={{
                            display:'flex',
                            justifyContent:'flex-end',
                            alignItems:'flex-end',
                        }}>
                            <Link href={'(auth)'} style={{
                                fontSize:13,
                                color:'#626161',
                                textAlign:'right'
                            }}>
                                Forgot Password?
                            </Link>
                        </View>

                        {/* button login */}
                        <TouchableOpacity style={classAuthPageDynamic.buttonAuth}>
                              <Text
                              style={{
                                color:'#fff',
                                fontSize:16
                              }}
                              >Submit</Text>  
                        </TouchableOpacity>

                        {/* line  */}
                        <View style={{
                            display:'flex',
                            flexDirection:"row",
                            justifyContent:'center',
                            alignItems:'center',
                            gap:20
                        }}>
                            {/* line1 */}
                            <View style={{flex:1,padding:1,borderRadius:10,backgroundColor:'#ddd'}} ></View>

                            {/* text or */}
                            <Text style={{paddingHorizontal:10,color:'#626161'}}>
                                OR
                            </Text>

                            {/* line2 */}
                            <View style={{flex:1,padding:1,borderRadius:10,backgroundColor:'#ddd'}} ></View>
                        </View>

                        {/* login by OAUTH */}
                        <View style={classAuthPageDynamic.containerOAuth}>
                            <TouchableOpacity>
                                <Image source={require('../../assets/images/googleIcon.png')}  />
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <Image source={require('../../assets/images/facebookIcon.png')}  />
                            </TouchableOpacity>
                            {/*  */}
                        </View>
                        
                    </View>
                </KeyboardAvoidingView>

                {/* img bottom */}
                <Image source={require('../../assets/images/food_auth_bg.png')} style={classAuthPageDynamic?.imageBottom} />
            </View>
        </ScrollView>
    </SafeAreaView>
  )
}



export default AuthPage
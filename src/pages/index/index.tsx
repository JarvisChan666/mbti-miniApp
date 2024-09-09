// import { Component, PropsWithChildren } from 'react'
import { View, Image } from '@tarojs/components'
import { AtButton } from 'taro-ui'
import './index.scss'
import Taro from '@tarojs/taro'
import header_bg from '../../assets/header_bg.webp'
import GlobalFooter from '../../components/GlobalFooter'
export default () => {
  return (
    <View className='index'>
      <View className='header-content'>
        <Image className='header-image' src={header_bg} />
        <View className='header-title'>
          <View className='at-article__h1'>MBTI 性格测试</View>
          <View className='at-article__h2'>开始探索你的性格</View>
        </View>
        <AtButton className='header-button' type='primary' circle={true} onClick={() => {
          // Implement the navigation logic here
          Taro.navigateTo({ url: '/pages/question/index' });
        }}>
          开启测试
        </AtButton>
        <GlobalFooter />
      </View>
      
    </View>
  )
}
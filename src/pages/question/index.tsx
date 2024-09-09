// import { Component, PropsWithChildren } from 'react'
import { View, } from '@tarojs/components'
import { AtButton, AtRadio } from 'taro-ui'
import './index.scss'
import Taro from '@tarojs/taro'
import questions from '../../data/questions.json'

export default () => {
  // print the json file
  console.log('Questions:', questions);
  const question = questions[0]

  const questionOptions = question.options.map((option) => {
    return { label: `${option.key}. ${option.value}`, value: option.key}
  })
  return (
    <View className='question'>
      <View className='at-article__h1'>{question.title}</View>
      <AtRadio
        options={questionOptions}
      // value={this.state.value}
      // onClick={this.handleChange.bind(this)}
      />

      <AtButton className='header-button' type='primary' circle={true} onClick={() => {
        // Implement the navigation logic here
        Taro.navigateTo({ url: '/pages/question/index' });
      }}>
        下一题
      </AtButton>
      <AtButton className='header-button' type='primary' circle={true} onClick={() => {
        // Implement the navigation logic here
        Taro.navigateTo({ url: '/pages/question/index' });
      }}>
        上一题
      </AtButton>
      <AtButton className='header-button' type='primary' circle={true} onClick={() => {
        // Implement the navigation logic here
        Taro.navigateTo({ url: '/pages/question/index' });
      }}>
        查看结果
      </AtButton>
    </View>
  )
}
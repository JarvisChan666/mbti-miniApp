// import { Component, PropsWithChildren } from 'react'
import { View, } from '@tarojs/components'
import { AtButton, AtRadio } from 'taro-ui'
import './index.scss'
import Taro from '@tarojs/taro'
import questions from '../../data/questions.json'
import { useState } from 'react'

export default () => {
  // print the json file
  console.log('Questions:', questions);
  const question = questions[0]

  const questionOptions = question.options.map((option) => {
    return { label: `${option.key}. ${option.value}`, value: option.key }
  })
  // 定义题号，状态（影响页面更新）
  const [questionIndex, setQuestionIndex] = useState<number>(1)

  return (
    <View className='question'>
      <View className='at-article__h1'>{questionIndex}. {question.title}</View>
      <AtRadio
        options={questionOptions}
      // value={this.state.value}
      // onClick={this.handleChange.bind(this)}
      />

      <AtButton className='controlBtn' type='primary' circle={true}  onClick={() => {
        // Implement the navigation logic here
        Taro.navigateTo({ url: '/pages/question/index' });
      }}>
        下一题
      </AtButton>
      <AtButton className='controlBtn' type='primary' circle={true} onClick={() => {
        // Implement the navigation logic here
        Taro.navigateTo({ url: '/pages/question/index' });
      }}>
        查看结果
      </AtButton>
      <AtButton className='controlBtn' circle={true} onClick={() => {
        // Implement the navigation logic here
        Taro.navigateTo({ url: '/pages/question/index' });
      }}>
        上一题
      </AtButton>
      
    </View>
  )
}
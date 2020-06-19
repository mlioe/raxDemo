import { createElement,useState, useEffect } from 'rax';
import View from 'rax-view';
import Text from 'rax-text';

import './index.css';
import Demo from './demo';
import Logo from '../../components/Logo';


interface Props {
  data: string;
}

export default (props: Props) => {
  let [data,setData] = useState('你好')
  let DemoClick = (e) =>{
    console.log(e)
    setData(e)
  }

  let setN  = () => {
    console.log('你好')
    setData('你好')
  }

  return (
    <View className="home">
      <Logo uri="//gw.alicdn.com/tfs/TB1MRC_cvb2gK0jSZK9XXaEgFXa-1701-1535.png" />
      <Text className="title">Welcome to Your Rax App</Text>
      <Text className="info">More information about Rax</Text>
      <Text className="info">Visit https://rax.js.org</Text>
      <Demo data={data} demoClick= {DemoClick}></Demo>
      <button onClick={setN}>改变字符串</button>
    </View>
  );
};

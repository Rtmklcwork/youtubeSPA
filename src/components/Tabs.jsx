import { Tabs } from 'antd';
import Videos from './Videos';
const onChange = (key) => {
  console.log(key);
};
const items = [
  {
    key: '1',
    label: 'Поиск',
    children: <Videos/>,
  },
  {
    key: '2',
    label: `Сохраненные`,
    children: `Сохраненные видео`,
  },

];
const App = () => <Tabs defaultActiveKey="1" items={items} onChange={onChange} />;
export default App
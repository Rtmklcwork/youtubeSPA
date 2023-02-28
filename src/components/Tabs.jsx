import { Tabs } from 'antd';
import SavedRequests from './SavedRequests';
import Tabbb from './Tabbb';


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
    children: <SavedRequests/>,
  },
  {
    key: '3',
    label: `Tabbbs`,
    children: <Tabbb/>,
  },

];
const App = () => <Tabs defaultActiveKey="1" items={items} onChange={onChange} />;
export default App
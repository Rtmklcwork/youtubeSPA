import { Tabs } from 'antd';
import SavedRequests from './SavedRequests';
import Videos from './Videos';
import { useState } from 'react';




const Tabs1 = () => {
  const changeActive = (key) =>{
    setActiveKey(key)
  }
  const [activeKey, setActiveKey] = useState("1")
  
  return (
    <Tabs onChange={changeActive} activeKey={activeKey} >
      <Tabs.TabPane tab="Search" key="1">
        <Videos />
      </Tabs.TabPane>

      <Tabs.TabPane tab="Saved" key="2">
        <SavedRequests setActiveKey={setActiveKey} />
      </Tabs.TabPane>
  
    
    </Tabs>
  )
}





// const Tabs1 = () => {

//   const [activeKey, setActiveKey] = useState(1)
//   const navigate = useNavigate()
//   const onChange = (key) => {

//     navigate(`/tabs/${key}`)
//   };
//   const items = [
//     {
//       key: '1',
//       label: 'Поиск',
//       children: <Videos />,
//     },
//     {
//       key: '2',
//       label: `Сохраненные`,
//       children: <SavedRequests setActiveKey={setActiveKey} />,
//     },


//   ];
//   console.log(items);
// const { id } = useParams()
// console.log(111,id);
//   return (
//     <Tabs activeKey={activeKey}  defaultActiveKey={id} items={items} onChange={onChange} />
//   )
// }
export default Tabs1
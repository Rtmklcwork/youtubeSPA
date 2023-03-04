import React from 'react'
import { Slider } from 'antd'

const MyForm = () => {
    return (
        <form>
            <div>

                <input
                    type="text"
                    readOnly
                    value='save request'
                />
            </div>
            <div>
                <input
                    type="text"
                />
            </div>
            <div>
                <select placeholder='без сортировки' style={{width: 200}} name='Сортировать по'>
                    <option value="По названию">Без сортировки</option>
                    <option value="По названию">По названию</option>
                    <option value="По дате">По дате</option>
                    <option value="По релевантности">По релевантности</option>
                </select>
            </div>
            <div>
            
      <Slider 
      style={{width: 200}}
        marks={{
          0: 0,
          20: 20,
          40: 40,
          60: 60,
          80: 80,
          100: 100,
        }}
      />    
            </div>
            <button>Не сохранять</button>
            <button>Сохранить</button>
        </form>
    )
}

export default MyForm

import React, { useState } from 'react'
import { Slider } from 'antd'
import { useDispatch, useSelector } from 'react-redux'
import { addFilterData } from '../store/slices/filterSlice'

const MyForm = () => {
    const [value, setValue] = useState({ name: '', quantity: 0, selected: '' })
    console.log(value);

    const dispatch = useDispatch()
    const handleClick = () => {
       dispatch(addFilterData({value}))
    }
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
                    value={value.name}
                    onChange={(e) => setValue(e.target.value)}
                    type="text"
                />
            </div>
            <div>
                <select
                    value={value.selected}
                    onChange={(e) => setValue(e.target.value)}
                    placeholder='без сортировки'
                    style={{ width: 200 }}
                    name='Сортировать по'>
                    <option value="Без сортировки">Без сортировки</option>
                    <option value="По названию">По названию</option>
                    <option value="По дате">По дате</option>
                    <option value="По релевантности">По релевантности</option>
                </select>
            </div>
            <div>

                <Slider
                    onChange={(e) => setValue(e.target.value)}
                    value={value.quantity}
                    style={{ width: 200 }}
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
            <div>{value.name}</div>
            <div>{value.quantity}</div>
            <div>{value.selected}</div>
            <div>
                <button>Не сохранять</button>
                <button onClick={() => handleClick()}>Сохранить</button>
            </div>
        </form>
    )
}

export default MyForm

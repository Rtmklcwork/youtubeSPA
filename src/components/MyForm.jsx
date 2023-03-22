import React, { useState } from 'react'
import { Slider } from 'antd'
import { useDispatch, useSelector } from 'react-redux'
import { addFilterData } from '../store/slices/filterSlice'

const MyForm = ({ item }) => {
    const store = useSelector(state => state.filter.filterData)
    console.log(store);

    // console.log(value);


    const [value, setValue] = useState({ name: '', selected: '', quantity: 0 })
    const dispatch = useDispatch()
    const handleClick = () => {
        dispatch(addFilterData({ value }))

    }


    return (
        <form>
            <div>

                <input
                    type="text"
                    readOnly
                    value={item}
                />
            </div>
            <div>
                <input
                    value={value.name}
                    onChange={(vlaue3) => setValue((prevname) => {
                        const data = {
                            ...prevname

                        }
                        data.quantity = vlaue3
                        return data
                    })}
                    type="text"
                />
            </div>
            <div>
                <select
                    value={value.selected}
                    onChange={(vlaue2) => setValue((prevselect) => {
                        const data = {
                            ...prevselect

                        }
                        data.quantity = vlaue2
                        return data
                    })}
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
                    onChange={(vlaue1) => setValue((prevdata) => {
                        const data = {
                            ...prevdata

                        }
                        data.quantity = vlaue1
                        return data
                    })}
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

            <div>
                <button type='button'>Не сохранять</button>
                <button type='button' onClick={() => handleClick()}>Сохранить</button>
            </div>
        </form>
    )
}

export default MyForm

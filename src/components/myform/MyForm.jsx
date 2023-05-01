import React, { useState } from 'react'
import { Slider } from 'antd'
import { useDispatch } from 'react-redux'
import { addFilterData } from '../../store/slices/filterSlice'
import s from './MyForm.module.css'




const MyForm = ({ item, setActive, setActiveKey }) => {


    const [value, setValue] = useState({ id: Date.now(), title: '', selected: '', quantity: 0 })
    const dispatch = useDispatch()
    const handleClick = async () => {
        await dispatch(addFilterData({ value }))
        setActiveKey("1")

    }
    return (
        <>
            <form className={s.wrapper}>
                <span className={s.title}>To save request</span>
                <div>

                    <input
                    className={s.input}
                        type="text"
                        readOnly
                        value={item}
                    />
                </div>
                
                    {/* <input
                        value={value.title}
                        onChange={(e) => {
                            e.preventDefault(); setValue((prevname) => {

                                const data = {
                                    ...prevname

                                }
                                data.title = e.target.value
                                return data
                            })
                        }}
                        type="text"
                    /> */}
                
                <div>
                    <select
                    className={s.select}
                        value={value.selected}
                        onChange={(e) => setValue((prevselect) => {
                            const data = {
                                ...prevselect

                            }
                            data.selected = e.target.value

                            return data
                        })}
                        placeholder='без сортировки'
                        style={{ width: 200 }}
                        name='Сортировать по'>
                        <option value="relevance">Без сортировки</option>
                        <option value="viewCount">По количеству просмотров</option>
                        <option value="date">По дате</option>
                        <option value="title">По названию</option>
                        <option value="rating">По рейтингу</option>
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
                    <button className={s.btns} type='button' onClick={() => setActive(false)}>Не сохранять</button>
                    <button className={s.btns} type='button' onClick={() => handleClick()}>Сохранить</button>
                </div>
            </form>
        </>
    )
}

export default MyForm

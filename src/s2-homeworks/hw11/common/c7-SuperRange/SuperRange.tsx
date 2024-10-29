import React from 'react'
import {Slider, SliderProps} from '@mui/material'

const SuperRange: React.FC<SliderProps> = (props) => {



    return (
        <Slider

            sx={{
                color: '#00CC22', // Цвет полосы слайдера
                '& .MuiSlider-thumb': {
                    color: '#00CC22', // Цвет ползунка
                },
                '& .MuiSlider-rail': {
                    color: '#8B8B8B', // Цвет фона слайдера
                },
            }}
             value={props.value}

            {...props} // отдаём слайдеру пропсы если они есть (value например там внутри)
        />
    )
}

export default SuperRange

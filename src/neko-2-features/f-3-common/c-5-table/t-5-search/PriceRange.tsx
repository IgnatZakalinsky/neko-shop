import React, {useEffect, useState} from 'react';
import {Range, getTrackBackground} from 'react-range';
import {useDispatch, useSelector} from "react-redux";
import {setMinMax} from "../t-1-table/t-2-bll/b-2-redux/tableActions";
import {IAppStore} from "../../../../neko-1-main/m-2-bll/store";
import {FlexCenterCenter} from "../../../../neko-3-styles/flex-containers";

const PriceRange: React.FC = () => {
    const {shop} = useSelector((store: IAppStore) => store.tables);
    const {minPrice, maxPrice} = shop.settings;
    const [values, setValues] = useState([minPrice, maxPrice]);

    const dispatch = useDispatch();

    const setGlobalValues = (newValues: number[]) => {
        dispatch(setMinMax('shop', newValues[0], newValues[1]));
        setValues(newValues);
    };

    useEffect(() => {
        setGlobalValues([minPrice, maxPrice]);
    }, [minPrice, maxPrice]);

    return (
        <Range
            values={values}
            step={500}
            min={minPrice}
            max={maxPrice}
            onChange={values => setGlobalValues(values)}
            renderTrack={({props, children}) => (
                <div
                    onMouseDown={props.onMouseDown}
                    onTouchStart={props.onTouchStart}
                    style={{
                        ...props.style,
                        height: '36px',
                        display: 'flex',
                        width: '50%',
                        margin: '30px',
                    }}
                >
                    <div
                        ref={props.ref}
                        style={{
                            height: '5px',
                            width: '100%',
                            borderRadius: '4px',
                            background: getTrackBackground({
                                values: values,
                                colors: ['#ccc', '#548BF4', '#ccc'],
                                min: minPrice,
                                max: maxPrice
                            }),
                            alignSelf: 'center'
                        }}
                    >
                        {children}
                    </div>
                </div>
            )}
            renderThumb={({index, props, isDragged}) => (
                <div
                    {...props}
                    style={{
                        ...props.style,
                        height: '12px',
                        width: '12px',
                        borderRadius: '1px',
                        backgroundColor: '#FFF',
                        ...FlexCenterCenter,
                        boxShadow: '0px 2px 6px #AAA',
                    }}
                >
                    <div
                        style={{
                            position: 'absolute',
                            top: '-28px',
                            color: '#fff',
                            fontWeight: 'bold',
                            fontSize: '14px',
                            fontFamily: 'Arial,Helvetica Neue,Helvetica,sans-serif',
                            padding: '4px',
                            borderRadius: '4px',
                            backgroundColor: '#548BF4'
                        }}
                    >
                        {values[index].toFixed(0)}
                        {/*// 10.12345 => 10; (1) => 10.1; (2) > 10.12; ...*/}
                    </div>
                    <div style={{height: '16px', width: '5px', backgroundColor: isDragged ? '#548BF4' : '#CCC'}}/>
                </div>
            )}
        />
    );
};

export default PriceRange;

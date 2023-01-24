import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import InTheatersListItem from './inTheatersListItem/InTheatersListItem';
import { fetchInTheaters } from './inTheatersSlice';

import '../../style/style.scss';
import './inTheatersList.scss';

const InTheatersList = () => {
    const { inTheaters} = useSelector(state => state.inTheaters)
    const dispatch = useDispatch();    

    useEffect(() => {
        dispatch(fetchInTheaters());
    }, [])


    const renderList = (arr) => {
        return arr.map(({ id, ...props }, index) => {
            if (index < 3) {
                return (
                    <InTheatersListItem
                        key={id}
                        index={index}
                        {...props}
                    />
                )
            }
        })
    }
    
    const elements = renderList(inTheaters)

    return (
        <div className="in-theaters">
            <div className="container">
                <h2 className="title">In theaters</h2>
                <div className="in-theaters__wrapper">
                    {elements}
                    <button className="btn in-theaters__btn-link">see more</button>
                </div>
            </div>
        </div>
    )
}

export default InTheatersList;
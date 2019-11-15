import React from 'react';
import './styles/History.css';
import {useSpring, animated} from 'react-spring';

const History = ({display, data}) => {
    const props = useSpring({top: display ? '10vh' : '110vh'})
    return (
        <animated.div className="history--wrapper" style={props}>
            <div className="history--title">
                Past Mentions:
            </div>
            {data.map(e => {
                return <div className="history--item" key={e}>{(new Date(e)).toString()}</div>
            })}
        </animated.div>
    );
}

export default History;
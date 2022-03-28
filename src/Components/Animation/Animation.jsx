import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring'

const Animation = () => {
    const [flip, set] = useState(false)
    const props = useSpring({
        to: { opacity: 1 },
        from: { opacity: 0 },
        reset: true,
        reverse: flip,
        delay: 200,
        onRest: () => set(!flip)
    })
    return (
        <h2>
            <animated.div style={props}>Cool Animation</animated.div>
        </h2>
    );
};

export default Animation;
import React, { useRef, useEffect, useState } from "react";
import PropTypes from "prop-types";
import Clouds from "vanta/dist/vanta.clouds.min";
import * as THREE from "three";

const WelcomeScreen = ({ children }) => {
    const myRefDif = useRef(null);
    const [vanta, setVanta] = useState(false);

    useEffect(() => {
        if (!vanta) {
            setVanta(
                Clouds({
                    THREE,
                    el: myRefDif.current,
                })
            );
        }

        // callback para sanear el componente (liberar memoria, lo que se hacia en el componentWillUnmount)
        return () => {
            if(vanta) vanta.destroy()
        }

    }, [vanta]);

    return <div className='full' ref={myRefDif}>{children}</div>;
};

WelcomeScreen.propTypes = {
    children: PropTypes.node,
};

export default WelcomeScreen;

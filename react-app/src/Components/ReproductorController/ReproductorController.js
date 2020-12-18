import React from "react";
import Styles from './ReproductorController.module.sass';
import { IconContext } from 'react-icons';
import { BiPauseCircle, BiFastForward, BiPlay } from 'react-icons/bi';

function ReproductorController({
    handlePrevious,
    handlePlayBackward,
    handlePause,
    handlePlayForward,
    handleNext,
}) {
    return (
        <div className={Styles["reproductor-controller"]}>
            <div className={`${Styles["flip-horizontal"]} ${Styles["icon-container"]}`} onClick={handlePrevious}>
                <IconContext.Provider value={{ color: "white", className: Styles["icon"] }}>
                    <BiFastForward />
                </IconContext.Provider>
            </div>
            <div className={`${Styles["flip-horizontal"]} ${Styles["icon-container"]}`} onClick={handlePlayBackward}>
                <IconContext.Provider value={{ color: "white", className: Styles["icon"] }}>
                    <BiPlay />
                </IconContext.Provider>
            </div>
            <div className={Styles["icon-container"]} onClick={handlePause}>
                <IconContext.Provider value={{ color: "white", className: Styles["icon"] }}>
                    <BiPauseCircle />
                </IconContext.Provider>
            </div>
            <div className={Styles["icon-container"]} onClick={handlePlayForward}>
                <IconContext.Provider value={{ color: "white", className: Styles["icon"] }}>
                    <BiPlay />
                </IconContext.Provider>
            </div>
            <div className={Styles["icon-container"]} onClick={handleNext}>
                <IconContext.Provider value={{ color: "white", className: Styles["icon"] }}>
                    <BiFastForward />
                </IconContext.Provider>
            </div>
        </div>
    );
}

export default ReproductorController;

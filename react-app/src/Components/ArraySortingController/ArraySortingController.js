import React, { useState, useEffect, forwardRef, useImperativeHandle } from 'react';
import Styles from './ArraySortingController.module.sass';
import ArrayVisualizer from '../ArrayVisualizer/ArrayVisualizer';
import bubbleSort from '../../Utilities/SortingUtil/BubbleSort';
import mergeSort from '../../Utilities/SortingUtil/MergeSort';
import quickSort from '../../Utilities/SortingUtil/QuickSort';
import { arrayMove, arrayShuffle } from '../../Utilities/ArrayUtil/ArrayUtil';

const generateRandomArray = (length, range) => {
    console.log(length, range);
    return Array.from(Array(length)).map(() => {
        return {
            value: Math.round(Math.random() * (range.max - range.min) + range.min),
            isActive: false
        }
    });
}

const generateRampArray = (length, range) => {
    const step = (range.max - range.min) / length;
    let collector = range.min;
    let array = Array.from(Array(length)).map(e => {
        const data = {
            value: collector,
            isActive: false
        };
        collector += step;
        return data;
    });

    array = arrayShuffle(array);

    return array;
}

const implementStep = ({ elements }, array) => {
    var newArray = array.slice(0);
    elements.forEach(element => {
        newArray[element.index].isActive = true
        newArray = arrayMove(newArray, element.index, element.newIndex);
    });

    return newArray;
}

const revertStep = ({ elements }, array) => {
    var newArray = array.slice(0);
    elements.reverse().forEach(element => {
        newArray[element.newIndex].isActive = true
        newArray = arrayMove(newArray, element.newIndex, element.index);
    });

    return newArray;
}

const deactivate = ({ elements }, array) => {
    var newArray = array.slice(0);
    elements.forEach(element => {
        newArray[element.newIndex].isActive = false
        newArray[element.index].isActive = false
    });

    return newArray;
}

const delay = ms => new Promise(res => setTimeout(res, ms));

const sortingAlgorithms = {
    MERGE_SORT: mergeSort,
    QUICK_SORT: quickSort,
    BUBBLE_SORT: bubbleSort
}

const ArraySortingController = forwardRef(({ length, range, isRamp, sortingAlgorithm }, ref) => {
    const [array, setArray] = useState([]);
    const [steps, setSteps] = useState([]);
    const [isPlay, setIsPlay] = useState(false);
    const [currentStepIndex, setCurrentStepIndex] = useState(0);
    const [isForward, setIsForward] = useState(true);
    const [isUpdating, setIsUpdating] = useState(false);
    // const [currentStep, setCurrentStep] = useState({ elements: [], isChange: false });
    // const [finalArray, setFinalArray] = useState([]);

    useEffect(() => {
        generateArray();
        setIsPlay(false);
        setIsForward(true);
        setCurrentStepIndex(0);
    }, [length, range, isRamp, sortingAlgorithm]);

    // useEffect(() => {
    //     // animateSteps();
    // }, [isPlay]);

    useEffect(() => {
        if (isPlay) {
            animateSteps();
        }
    }, [currentStepIndex, isForward, isUpdating]);

    useImperativeHandle(
        ref,
        () => ({
            handlePlayAnimation(play) { handlePlayAnimation(play) },
            handleNextStep() { handleNextStep() },
            handlePreviousStep() { handlePreviousStep() },
            generateArray() { generateArray() },
        }),
    )

    const handlePlayAnimation = async (play) => {
        setIsPlay(play);
        if (play) animateSteps();
    }

    const animateSteps = async () => {
        isForward ? handleNextStep() : handlePreviousStep();
    }

    const handleNextStep = async () => {
        if (!isUpdating) {


            const nextStep = isForward ? currentStepIndex : currentStepIndex + 1;
            if (nextStep < steps.length) {
                setIsUpdating(true);
                setIsForward(true);

                const step = steps[nextStep];
                var newArray = implementStep(step, array);
                setArray(newArray);
                setCurrentStepIndex(nextStep + 1);
                await delay(0);
                newArray = deactivate(step, newArray);
                setArray(newArray);
                setIsUpdating(false);
            }
            else {
                setIsPlay(false);
            }
        }
    }

    const handlePreviousStep = async () => {
        if (!isUpdating) {


            const previousStep = isForward ? currentStepIndex - 1 : currentStepIndex;
            if (previousStep > 0) {
                setIsUpdating(true);
                setIsForward(false);

                let step = steps[previousStep];
                var newArray = revertStep(step, array);
                setArray(newArray);
                setCurrentStepIndex(previousStep - 1);
                await delay(0);
                step.elements = step.elements.reverse();
                newArray = deactivate(step, newArray);
                setArray(newArray);
                setIsUpdating(false);
            }
        }

    }

    const generateArray = () => {
        console.log(length, range, isRamp, sortingAlgorithm);
        const randomArray = isRamp ? generateRampArray(length, range) : generateRandomArray(length, range);
        setArray(randomArray);
        console.log(randomArray);

        const sortedArray = sortingAlgorithms[sortingAlgorithm](randomArray, 0, (randomArray.length - 1));

        console.log("sorted", sortedArray);
        setSteps(sortedArray.steps);
    }

    return (
        <div className={Styles['array-sorting-controller']}>
            {/* <div onClick={() => handleStartAnimation()}>start</div> */}
            <ArrayVisualizer startingArray={array} range={range} lenght={length} />
        </div>
    );
});

export default ArraySortingController;
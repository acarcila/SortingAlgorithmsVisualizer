import React, {
    useState,
    useEffect,
    forwardRef,
    useImperativeHandle,
    useRef,
} from "react";
import Styles from "./ArraySortingController.module.sass";
import ArrayVisualizer from "../ArrayVisualizer/ArrayVisualizer";
import bubbleSort from "../../Utilities/SortingUtil/BubbleSort";
import mergeSort from "../../Utilities/SortingUtil/MergeSort";
import quickSort from "../../Utilities/SortingUtil/QuickSort";
import { arrayMove, arrayShuffle } from "../../Utilities/ArrayUtil/ArrayUtil";

const generateRandomArray = (length, range) => {
    return Array.from(Array(length)).map(() => {
        return {
            value: Math.random() * (range.max - range.min) + range.min,
            isActive: false,
        };
    });
};

const generateRampArray = (length, range) => {
    const step = (range.max - range.min) / length;
    let collector = range.min;
    let array = Array.from(Array(length)).map((e) => {
        const data = {
            value: collector,
            isActive: false,
        };
        collector += step;
        return data;
    });

    array = arrayShuffle(array);

    return array;
};

const implementStep = ({ elements }, array) => {
    var newArray = array.slice(0);
    elements.forEach((element) => {
        newArray[element.index].isActive = true;
        newArray = arrayMove(newArray, element.index, element.newIndex);
    });

    return newArray;
};

const revertStep = ({ elements }, array) => {
    var newArray = array.slice(0);
    elements.reverse().forEach((element) => {
        newArray[element.newIndex].isActive = true;
        newArray = arrayMove(newArray, element.newIndex, element.index);
    });

    return newArray;
};

const deactivate = ({ elements }, array) => {
    var newArray = array.slice(0);
    elements.forEach((element) => {
        newArray[element.newIndex].isActive = false;
        newArray[element.index].isActive = false;
    });

    return newArray;
};

const sortingAlgorithms = {
    MERGE_SORT: mergeSort,
    QUICK_SORT: quickSort,
    BUBBLE_SORT: bubbleSort,
};

const ArraySortingController = forwardRef((props, ref) => {
    const { length, range, isRamp, sortingAlgorithm } = props;
    const [array, setArray] = useState([]);
    const [steps, setSteps] = useState([]);
    // const [isPlay, setIsPlay] = useState(false);
    const [currentStepIndex, setCurrentStepIndex] = useState(0);
    const [previousStepIndex, setPreviousStepIndex] = useState(0);
    // const [isForward, setIsForward] = useState(true);

    const [flags, setFlags] = useState({
        isForward: true,
        isPlay: false,
    });
    const refs = useRef({
        flags,
        array,
        steps,
        currentStepIndex,
        previousStepIndex,
    });
    refs.current.flags = flags;
    refs.current.array = array;
    refs.current.steps = steps;
    refs.current.currentStepIndex = currentStepIndex;
    refs.current.previousStepIndex = previousStepIndex;
    // const [currentStep, setCurrentStep] = useState({ elements: [], isChange: false });
    // const [finalArray, setFinalArray] = useState([]);

    useEffect(() => {
        generateArray();
    }, [props]);

    useEffect(() => {
        setUp();
        setInterval(() => update(), 10);
    }, []);

    useImperativeHandle(ref, () => ({
        handleNextStep() {
            handleNextStep();
        },
        handlePreviousStep() {
            handlePreviousStep();
        },
        handlePlayForward() {
            handlePlayForward();
        },
        handlePlayBackward() {
            handlePlayBackward();
        },
        handlePause() {
            handlePause();
        },
        generateArray() {
            generateArray();
        },
        shuffleArray() {
            shuffleArray();
        },
    }));

    const setUp = () => {
        generateArray();
    };

    const update = () => {
        const previousStepI = refs.current.previousStepIndex;
        if (refs.current.currentStepIndex !== previousStepI) {
            const newArray = deactivate(refs.current.steps[previousStepI], refs.current.array);
            setArray(newArray);
            setPreviousStepIndex(refs.current.currentStepIndex);
        }

        if (refs.current.flags.isPlay) {
            console.log("play");
            animateSteps();
        }
    };

    const handlePlayForward = () => {
        setFlags({
            ...refs.current.flags,
            isPlay: true,
            isForward: true,
        });
        // setIsPlay(true);
        // setIsForward(true);
        // setTimeout(() => animateSteps(), 10);
    };

    const handlePlayBackward = () => {
        setFlags({
            ...refs.current.flags,
            isPlay: true,
            isForward: false,
        });
        // setIsPlay(true);
        // setIsForward(false);
        // setTimeout(() => animateSteps(), 10);
    };

    const handlePause = () => {
        setFlags({
            ...refs.current.flags,
            isPlay: false,
        });
        // setIsPlay(false);
    };

    const animateSteps = () => {
        // setIsForward(isForwardTemp);
        console.log("forward", refs.current.flags.isForward);
        refs.current.flags.isForward ? handleNextStep() : handlePreviousStep();
    };

    const handleNextStep = () => {
        const nextStep = refs.current.flags.isForward
            ? refs.current.currentStepIndex
            : refs.current.currentStepIndex + 1;
        // const nextStep = refs.current.currentStepIndex
        if (nextStep < refs.current.steps.length) {
            setFlags({
                ...refs.current.flags,
                isForward: true,
            });

            // setIsForward(true);

            const step = refs.current.steps[nextStep];
            const newArray = implementStep(step, refs.current.array);
            setArray(newArray);
            setPreviousStepIndex(nextStep);
            setCurrentStepIndex(nextStep + 1);
            // newArray = deactivate(step, newArray);
            // setArray(newArray);
        } else {
            setFlags({
                ...refs.current.flags,
                isPlay: false,
            });
        }
    };

    const handlePreviousStep = () => {
        const previousStep = refs.current.flags.isForward
            ? refs.current.currentStepIndex - 1
            : refs.current.currentStepIndex;
        // const previousStep = refs.current.currentStepIndex;
        if (previousStep >= 0) {
            setFlags({
                ...refs.current.flags,

                isForward: false,
            });

            // setIsForward(false);

            const step = refs.current.steps[previousStep];
            const newArray = revertStep(step, refs.current.array);
            setArray(newArray);
            setPreviousStepIndex(previousStep);
            setCurrentStepIndex(previousStep - 1);

        } else {
            setFlags({
                ...refs.current.flags,
                isPlay: false,
            });
            // setIsPlay(false);
        }
    };

    const generateArray = () => {
        setFlags({
            ...refs.current.flags,

            isForward: true,
        });

        // setIsForward(true);
        setCurrentStepIndex(0);

        console.log("updating");
        const randomArray = isRamp
            ? generateRampArray(length, range)
            : generateRandomArray(length, range);
        setArray(randomArray);

        const sortedArray = sortingAlgorithms[sortingAlgorithm](
            randomArray,
            0.0,
            parseFloat(randomArray.length - 1)
        );

        setSteps(sortedArray.steps);
    };

    const shuffleArray = () => {
        generateArray();
    };

    return (
        <div className={Styles["array-sorting-controller"]}>
            {/* <div onClick={() => handleStartAnimation()}>start</div> */}
            <ArrayVisualizer startingArray={array} range={range} lenght={length} />
        </div>
    );
});

export default ArraySortingController;

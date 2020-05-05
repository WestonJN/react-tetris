import { useState } from 'react';
import { createStage } from '../gameHelpers';

//generate initail stage of game
//clean stage
export const useStage = () => {
    const[stage, setStage] = useState(createStage());

    return[stage, setStage]; 
}
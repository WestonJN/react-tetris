import { useState, useEffect } from 'react';
import { createStage } from '../gameHelpers';

//generate initail stage of game
//clean stage
export const useStage = (player, resetPlayer) => {
    const[stage, setStage] = useState(createStage());

    useEffect(() => {
        const updateStage = prevStage => {
            //First clear it from previous render
            const newStage = prevStage.map(row =>
                row.map(cell => (cell[1] === 'clear' ? [0, 'clear'] : cell)),
                );

                //then draw the tetromino
                player.tetromino.forEach((row, y) => {
                    row.forEach((value, x) => {
                        if (value !== 0) {
                            newStage[y + player.pos.y][x + player.pos.x] =[
                                value,
                                `${player.collided ? 'merged' : 'clear'}`,
                            ];
                        }
                    });
               }); 

               return newStage;
        };

        setStage(prev => updateStage(prev));
    }, [player.collided, player.pos.x, player.pos.y, player.tetromino]);

    return[stage, setStage]; 
};
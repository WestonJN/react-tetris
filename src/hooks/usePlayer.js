import { useState } from 'react';

import { randomTetromino } from '../tetrominos';

//inital state for the player
export const usePlayer = () => {
    const [player, setPlayer] = useState({
        pod: { x:0, y:0},
        tetromino: randomTetromino().shape,
        collided: false
    });

return [player]
}
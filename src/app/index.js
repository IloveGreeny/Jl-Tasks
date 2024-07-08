const TIMESTAMPS_COUNT = 50000;

const PROBABILITY_SCORE_CHANGED = 0.0001;

const PROBABILITY_HOME_SCORE = 0.45;

const OFFSET_MAX_STEP = 3;

const emptyScoreStamp = {
    offset: 0,
    score: {
        home: 0,
        away: 0,
    },
};

const generateStamps = () => {
    const scoreStamps = Array(TIMESTAMPS_COUNT)
        .fill(emptyScoreStamp)
        .map(
            ((acc) => () => {
                const scoreChanged =
                    Math.random() > 1 - PROBABILITY_SCORE_CHANGED;
                const homeScoreChange =
                    scoreChanged && Math.random() < PROBABILITY_HOME_SCORE
                        ? 1
                        : 0;
                const awayScoreChange =
                    scoreChanged && !homeScoreChange ? 1 : 0;
                return {
                    offset: (acc.offset +=
                        Math.floor(Math.random() * OFFSET_MAX_STEP) + 1),
                    score: {
                        home: (acc.score.home += homeScoreChange),
                        away: (acc.score.away += awayScoreChange),
                    },
                };
            })(emptyScoreStamp)
        );

    console.log(scoreStamps);
};

const getScore = (gameStamps, offset) => {
    const stamp = gameStamps.find((stamp) => stamp.offset > offset);
    console.log(stamp ? stamp.score : gameStamps[gameStamps.length - 1].score);
};


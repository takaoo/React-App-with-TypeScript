import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core';
import Input from '@material-ui/core/Input';
import Paper from '@material-ui/core/Paper';

let inputValue = 0;
let A = false;

const Component1: React.FC = () => {
    const classes = useStyles();
    const [num, setNum] = React.useState(0);
    const [result, setResult] = React.useState('');
    return (
        <div>
            <Paper>
                <h1>Component1</h1>
                <h2>Please select number</h2>
                <div>
                    <Button
                        disabled={A}
                        variant="contained"
                        onClick={e => {
                            setNum(gen_random(4));
                        }}
                    >
                        4
                    </Button>
                    {/* </div>
            <div> */}
                    <Button
                        disabled={A}
                        variant="contained"
                        onClick={e => {
                            setNum(gen_random(5));
                        }}
                    >
                        5
                    </Button>
                    {/* </div>
            <div> */}
                    <Button
                        disabled={A}
                        variant="contained"
                        onClick={e => {
                            setNum(gen_random(6));
                        }}
                    >
                        6
                    </Button>
                </div>
                <div className={classes.root}>{num}</div>
                <Input
                    className={classes.input}
                    type="number"
                    onChange={event => {
                        inputValue = Number(event.target.value);
                        console.log(event.target.value);
                    }}
                />
                <Button
                    onClick={e => {
                        console.log('正解は', num);
                        console.log('inputValueは', inputValue);
                        setResult(check(num));
                    }}
                >
                    check
                </Button>
            </Paper>
            result: {result}
        </div>
    );
};

export default Component1;

const gen_random = (n: number): number => {
    let randoms: number[] = [];
    let random = 0;
    for (let i = 1; i <= n; i++) {
        while (true) {
            var tmp = Math.floor(Math.random() * 9) + 1;
            if (!randoms.includes(tmp)) {
                randoms.push(tmp);
                random += tmp * 10 ** (n - i);
                break;
            }
        }
    }
    A = true;
    return random;
};

const check = (num: number) => {
    let Hits = 0;
    let Blow = 0;
    let arr = String(num).split('');
    console.log(arr);

    let strinput = inputValue.toString();
    for (let i = 0; i < arr.length; i++) {
        console.log(strinput.indexOf(arr[i]));
        if (strinput.indexOf(arr[i]) === i) {
            //同じ場所で同じ数字
            Hits++;
        } else if (strinput.indexOf(arr[i]) === -1) {
            //はずれ
        } else {
            //かすり
            Blow++;
        }
    }

    return 'Hits: ' + Hits + ' Blow: ' + Blow;
};
const useStyles = makeStyles({
    root: {
        fontSize: '2em'
        // color: 'blue'
    },
    input: {
        fontSize: '4em'
    }
});

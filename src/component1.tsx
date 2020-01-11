import React from 'react';

const Component1: React.FC = () => {
  return (
    <div>
      <h1>Component1</h1>
      {random()}
    </div>
  );
}
export default Component1;


const random = (): number => {
  let random = 0;

  let arr: number[] = []

  for (let index = 0; index < 4; index++) {
    arr.push(index + 1);
    console.log(arr);
  }

  for (let index = 0; index < arr.length; index++) {
    random += arr[index] * 10 ** (arr.length - index - 1)

    // console.log(arr[index], 10 ** (arr.length - index));

    console.log(random);

  }
  return random
}

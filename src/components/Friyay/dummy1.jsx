import { useEffect } from 'react';

// useEffect -> takes 2 arguments
// 1st argument -> any function/arrow functn. you want to execute
// 2nd argument -> array of dependencies



const Dummy1 = (props) => {

    const { value } = props;

    // useEffect(() => {

    // }, []) // calls only 1 time

    // useEffect(() => {

    // }, [a,b]) // call for 1st time during 1st load and then, whenever these variable

    useEffect(() => {
            fetch("https://jsonplaceholder.typicode.com/todos/1")
            .then((response) => response.json())
            .then((json) => console.log('dummy component',json));
    }, [value])

  return <h6>Hello</h6>;
};

export default Dummy1;

import './App.css'

function App() {

    function arrayNumbers(numbers: number[]): number[] {
        return numbers.map((number) => number * 2);
    }

    const numbers: number[] = [1, 2, 3, 4, 5];
    const doubleNumbers: number[] = arrayNumbers(numbers);
    console.log(doubleNumbers);



    // Step 2: Create an array of words. Use the '.filter'
    // function to select only the words that are longer than 5 letters.

    const words: string[] = ["hello", "goodbye", "good", "bad", "yes", "no", "maybe", "never", "always", "sometimes"];
    const longWords: string[] = words.filter((word) => word.length > 5);
    const str: string = " " + longWords;
    console.log(str);


    // Step 3: Create an array of numbers. Use the '.reduce' function to calculate the sum
    // of all the numbers in the array.
    const reduceNumbers: number[] = [1, 2, 3, 4, 5];
    const total: number = reduceNumbers.reduce((acc, curr) => acc + curr);


    // Step 4: Create an array of numbers. Use the '.some' function to check
    // if at least one number is greater than 10.
    const someNumbers:number[] = [1, 2, 3, 4, 5];
    const some: boolean = someNumbers.some((number) => number > 10);
    console.log(some);


    function myNunmbers(num: number, name: string) : string {
        return `${name} ${num}`
    }

    console.log(myNunmbers(5, "hello"));


    const add = (a: number, b: number) : number => a + b;


    const number = [1, 2, 3, 4, 5];
    const squaredNumbers = number.map(num => num * num);
    console.log(squaredNumbers);

    const evenNumber = number.filter(num => num % 2 === 0);
    console.log("evenNumber ", evenNumber);

  return (
    <>
        <h1>{doubleNumbers}</h1>
        <h2>{str}</h2>
        <h3>{total}</h3>
        <h3>{some}</h3>
        <h3>{myNunmbers(5, "hallo")}</h3>
        <h3>{add(5, 10)}</h3>
        <h3>{add(5, 10)}</h3>
        <h3>{evenNumber}</h3>




    </>
  )
}

export default App

export const findMax = (numbers) => {
    if (numbers.length === 0) {
      return []; 
    } else {
      return Math.max(...numbers); 
    }
}

export const calculateAverage = (numbers) => {
    if (numbers.length === 0) {
      return []; 
    } else {
      const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0); 
      const average = sum / numbers.length; 
      return average;
    }
}

export const getEvenNumbers = (numbers) => {
    return numbers.filter(number => number % 2 === 0); 
}

export const getIntersection = (values1, values2) => {
    return values1.filter(value => values2.includes(value)); 
}

export const findLargestElement = (nestedArrs) => {
    if (nestedArrs.length === 0) {
      return []; 
    } else {
      let flattenedArray = nestedArrs.flat(Infinity); 
      return Math.max(...flattenedArray); 
    }
}
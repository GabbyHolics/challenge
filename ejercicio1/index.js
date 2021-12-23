const isPrime = (num) => {
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return num !== 1;
};

const primes = (numStart, numEnd) => {

    let primeNumbers = []
    for (let i = numStart; i < numEnd; i++) {
        if (isPrime(i)) {
            primeNumbers.push(i)
        }
    }
    return primeNumbers;
}


console.log(primes(1,10))
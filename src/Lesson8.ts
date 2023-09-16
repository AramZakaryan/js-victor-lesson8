// + 1. Функция sum принимает параметром целые положительные
// числа (неопределённое кол-во) и возвращает их сумму (rest).

export function sum(...nums: Array<number>): number {
    return nums.reduce((acc, el) => acc + el)
}


// + 2. Функция getTriangleType принимает три параметра:
// длины сторон треугольника.
// Функция должна возвращать:
//  - "10", если треугольник равносторонний,
//  - "01", если треугольник равнобедренный,
//  - "11", если треугольник обычный,
//  - "00", если такого треугольника не существует.

export function getTriangleType(a: number, b: number, c: number): string {
    if (a + b < c || a + c < b || c + b < a) {
        return "00"
    } else if (a === b && b === c) {
        return "10"
    } else if (a === b || a === c || b === c) {
        return "01"
    } else {
        return "11"
    }
}


// + 3. Функция getSum принимает параметром целое число и возвращает
// сумму цифр этого числа

export function getSum(number: number): number {
    return number.toString()
        .split("")
        .reduce((acc, el) =>
                acc + Number(el)
            , 0)
}


// 4. Функция isEvenIndexSumGreater принимает  параметром массив чисел.
// Если сумма чисел с чётными ИНДЕКСАМИ!!! (0 как чётный индекс) больше
// суммы чисел с нечётными ИНДЕКСАМИ!!!, то функция возвращает true.
// В противном случае - false.

export const isEvenIndexSumGreater = (arr: Array<number>): boolean => {
    const sumEvenInd = arr.reduce((acc, el, ind) =>
        acc + (ind % 2 === 0 ? el : 0)
    )
    const sumOddInd = arr.reduce((acc, el, ind) =>
        acc + (ind % 2 !== 0 ? el : 0)
    )

    return sumEvenInd > sumOddInd
}


// 5. Функция getSquarePositiveIntegers принимает параметром массив чисел
// и возвращает новый массив.
// Новый массив состоит из квадратов целых положительных чисел,
// котрые являются элементами исходгого массива.
// Исходный массив не мутирует.

export function getSquarePositiveIntegers(arr: Array<number>): Array<number> {
    return (
        arr.filter(el => el % 1 === 0 && el > 0)
            .map(el => el ** 2)
    )
}


// 6. Функция принимает параметром целое не отрицательное число N
// и возвращает сумму всех чисел от 0 до N включительно
// Попробуйте реализовать функцию без использования перебирающих методов.

export function sumFirstNumbers(N: number): number {
    let res = 0
    for (let i = 1; i <= N; i++) {
        res += i
    }
    return res
}


// Д.З.:
// 7. Функция-банкомат принимает параметром целое натуральное число (сумму).
// Возвращает массив с наименьшим количеством купюр, которыми можно выдать эту
// сумму. Доступны банкноты следующих номиналов:
// const banknotes = [1000, 500, 100, 50, 20, 10, 5, 2, 1].
// Считаем, что количество банкнот каждого номинала не ограничено

// export function getBanknoteList(amountOfMoney: number): Array<number> {
export function getBanknoteList(amountOfMoney: number){
    let resArr: number[] = []
    let remaining = amountOfMoney
    const banknotes = [1000, 500, 100, 50, 20, 10, 5, 2, 1]
    let k = 0 // index of banknotes
    for (let i = 0; remaining!==0; i++) {
        if (remaining - banknotes[k] >= 0) {
            resArr.push(banknotes[k])
            remaining = remaining - banknotes[k]
        } else {
            k++
        }
    }
    return resArr
}

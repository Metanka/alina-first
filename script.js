// поменять переменные местами.

function twoVariables (a,b) {
    let c = a;
    let d = b;
    a = d;
    b = c;
    console.log(a,b);
}

function oneVariable (first, second) {
    let temp = first;
    first = second;
    second = temp;

    console.log(first, second);
}

function withoutVariable (first, second) {
    first = first + second;
    second = first - second;
    first = first - second;

    console.log(first, second);
}

//этот способ - полная хрень, особенность языка, повязана на массивах

function desctructionVariable (first, second) {
    var [first, second] = [second, first];

    console.log(first, second);
}

twoVariables(1, 2);
oneVariable(1, 2);
withoutVariable(1, 2);
desctructionVariable(1, 2);

// Алгоритмы измеряются скростью(сложностью) и объемом используемой памяти.
// однопроходный O = N (по каждому элементу проходим один раз)
// квадратичные O = N + M, N^2, !N (N - время, M - память)
// квадратичные - проходит по сетке значений (x строк, х столбцов)
// O = log2*N (тоже относится к квадратичным, но он самый быстрый
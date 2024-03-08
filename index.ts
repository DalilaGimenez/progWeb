

export function calcularMedia(notas: number[]): number {
    const total = notas.reduce((acc, curr) => acc + curr, 0);
    return total / notas.length;
}

const notas: number[] = [2.5, 5.2, 2, 2];

console.log(calcularMedia(notas));
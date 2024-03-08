"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calcularMedia = void 0;
function calcularMedia(notas) {
    var total = notas.reduce(function (acc, curr) { return acc + curr; }, 0);
    return total / notas.length;
}
exports.calcularMedia = calcularMedia;
var notas = [2.5, 5.2, 2, 2];
console.log(calcularMedia(notas));

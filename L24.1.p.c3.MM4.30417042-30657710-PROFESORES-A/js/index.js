/**
 * PROFESORES-A 
En la Universidad se contratan los profesores por categorías (1=Instructor, 2=Asistente, 
3=Agregado, 4=Asociado, 5=Titular), también se conoce de cada profesor: su cédula, nombre y 
sexo (F - M). 
Considerando que los datos de los profesores se cargan en un array de objetos (Ej. 
estructura de cada objeto: {categoría: 1, nombre: ‘Ana’, sexo: ‘F’}) se requiere una función que 
retorne otro arreglo de objetos con solamente los profesores de una categoría dada. 
Función: profesoresCategoria. 
Parámetros: profesores (array de objetos profesor), categoria (un número). 
Retorno: array de objetos profesor que pertenecen a la categoría indicada.
 */

let profesores = [
    {categoria: 1, nombre: 'Ana', sexo: 'F'},
    {categoria: 2, nombre: 'Carlos', sexo: 'M'},
    {categoria: 3, nombre: 'Diana', sexo: 'F'},
    {categoria: 4, nombre: 'Eduardo', sexo: 'M'},
    {categoria: 5, nombre: 'Fernando', sexo: 'M'},
    {categoria: 1, nombre: 'Gonzalo', sexo: 'M'},
    {categoria: 2, nombre: 'Hernando', sexo: 'M'},
    {categoria: 3, nombre: 'Ingrid', sexo: 'F'},
    {categoria: 4, nombre: 'Javier', sexo: 'M'},
    {categoria: 5, nombre: 'Katherine', sexo: 'F'},
    {categoria: 1, nombre: 'Luis', sexo: 'M'},
    {categoria: 2, nombre: 'Maria', sexo: 'F'},
    {categoria: 3, nombre: 'Natalia', sexo: 'F'},
    {categoria: 4, nombre: 'Oscar', sexo: 'M'},
    {categoria: 5, nombre: 'Pedro', sexo: 'M'},
    {categoria: 1, nombre: 'Ricardo', sexo: 'M'},
    {categoria: 2, nombre: 'Sandra', sexo: 'F'},
    {categoria: 3, nombre: 'Tania', sexo: 'F'},
    {categoria: 4, nombre: 'Ulises', sexo: 'M'},
    {categoria: 5, nombre: 'Victoria', sexo: 'F'},
];

let profesoresCategoria = (profesores, categoria) => {
    let profesoresCategoria = [];
    for (let i = 0; i < profesores.length; i++) {
        if (profesores[i].categoria == categoria) {
            profesoresCategoria.push(profesores[i]);
        }
    }
    return profesoresCategoria;
}

let salida = document.getElementById("salida");
let categoria1 = profesoresCategoria(profesores, 1);
salida.innerHTML = `Profesores de la categoria 1:<br>`;
categoria1.forEach(profesor => {
    salida.innerHTML += `Nombre: ${profesor.nombre} - Sexo: ${profesor.sexo}<br>`
})
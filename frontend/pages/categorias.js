import {
    obtainCategories,
    nuevaCategoria
} from "../API.js";

document.addEventListener("DOMContentLoaded", () => {
    listCategorias()
});

/* LISTAR CATEGORIAS  - CRUD (R) */
async function listCategorias(){
    const categorias = await obtainCategories();
    console.log(categorias);
    const tablaCatg = document.querySelector("#categories")
    categorias.forEach(element => {
        const {CategoriaID, CategoriaNombre, Descripcion, Imagen} = element
        tablaCatg.innerHTML+= `
        <tr>
            <th scope="row">${CategoriaID}</th>
            <td>${CategoriaNombre}</td>
            <td>${Descripcion}</td>
            <td>${Imagen}</td>
            <td><button class="btn btn-primary">Actualizar</button></td>
            <td><button class="btn btn-danger">Borrar</button></td>
        </tr>
        `
    });
}

/* INGRESAR NUEVA CATEGORIA  - CRUD (C) */
const formCatg = document.getElementById("registrarCatg");
formCatg.addEventListener('submit', newCatg)

function newCatg(e){
    e.preventDefault();

    const nombreCatg=document.querySelector("#nombreCatg").value
    console.log(nombreCatg);
    const descripcionCatg=document.querySelector("#descripcionCatg").value
    console.log(descripcionCatg);
    const imgCatg=document.querySelector("#imgCatg").value
    console.log(imgCatg);

    const registCatg = {
        nombreCatg,
        descripcionCatg,
        imgCatg
    }

    alert("xd")
    
    nuevaCategoria(registCatg);

}

/* ELIMINAR CATEGORIA  - CRUD (D) */



//EDITAR CATEGORIA - CRUD (U)



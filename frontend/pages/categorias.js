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
            <td><button class="btn btn-danger" id="${CategoriaID}">Borrar</button></td>
        </tr>
        `
    });
}

/* INGRESAR NUEVA CATEGORIA  - CRUD (C) */
const formCatg = document.getElementById("registrarCatg");
formCatg.addEventListener('submit', newCatg)

function newCatg(e){
    e.preventDefault();

    const CategoriaNombre=document.querySelector("#nombreCatg").value
    const Descripcion=document.querySelector("#descripcionCatg").value
    const Imagen=document.querySelector("#imgCatg").value

    const registCatg = {
        CategoriaNombre,
        Descripcion,
        Imagen
    }
    
    nuevaCategoria(registCatg);
}

/* ELIMINAR CATEGORIA  - CRUD (D) */



//EDITAR CATEGORIA - CRUD (U)



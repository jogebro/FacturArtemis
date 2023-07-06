import {
    obtainCategories,
    nuevaCategoria,
    deleteCategory
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
            <td><button class="btn btn-primary class="btn btn-dark mb-2" data-bs-toggle="modal" data-bs-target="#updateCatg"">Actualizar</button></td>
            <td><button class="btn btn-danger delete" id="${CategoriaID}">Borrar</button></td>
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
const tabla = document.getElementById("categories");
tabla.addEventListener('click', deleteCatg)

function deleteCatg(e) {
    if (e.target.classList.contains('delete')) {
        const id = e.target.getAttribute('id');
        const confirmar = confirm("Are you sure you want to delete this category?")
        if(confirmar){
            deleteCategory(id)
        }
    }
}


//EDITAR CATEGORIA - CRUD (U)



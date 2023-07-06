const url = "http://localhost:5000/api/categorias";


export const obtainCategories = async () => {
    try {
        const data = await fetch(`${url}`);
        const result = data.json();
        return result;
    } catch (error) {
        console.log(error);
    }
};


export const nuevaCategoria = async (registCatg) => {
    try {
        await fetch(url,{
            method: "POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(registCatg)
        })
        window.location.href="categorias.html"
    } catch (error) {
        console.log(error);
    }
};


export const deleteCategory = async (id) => {
    try {
        await fetch(`${url}/${id}`,{
            method: "DELETE"
        })
        window.location.href="categorias.html"
    } catch (error) {
        console.log(error);
    }
};

export const editarCategory = async (UpdCatg) => {
    try {
        await fetch(`${url}/${UpdCatg}`,{
            method: "PUT"
        })
        window.location.href="categorias.html"
    } catch (error) {
        console.log(error);
    }
};


export const obtenerCategory = async (id) => {
 
};









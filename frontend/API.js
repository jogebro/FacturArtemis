const url = "http://localhost:5000/api/categorias/";


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
            body:JSON.stringify(registCatg),
            headers:{
                "Content-Type":"application/json"
            }
        })
        window.location.href="categorias.html"
    } catch (error) {
        console.log(error);
    }
};


export const deleteCategory = async (id) => {
  
};



export const obtenerCategory = async (id) => {
 
};



export const editarCategory = async (category) => {
 
};






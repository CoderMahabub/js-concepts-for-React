// TODO: Add Something to localStorage

const addToLocalStorage = ()=>{
    const idInput = document.getElementById('storage-id');
    const id = idInput.value;
    const valueInput = document.getElementById('storage-value');
    const value = valueInput.value;
    
    //If id && value both are truthy then it will store
    if(id && value){
    localStorage.setItem(id,value);
    idInput.value = '';
    valueInput.value = '';
    }
}
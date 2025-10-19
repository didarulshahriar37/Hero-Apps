const deleteFromLocalStorage = (id) =>{
    const storedAppData = JSON.parse(localStorage.getItem("installed")) || [];

    // const appId = parseInt(id);
    const updatedStoredAppData = storedAppData.filter(aId => aId !== id);

    localStorage.setItem("installed", JSON.stringify(updatedStoredAppData));
}

export {deleteFromLocalStorage};
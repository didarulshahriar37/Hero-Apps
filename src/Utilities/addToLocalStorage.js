const getStoredApp = () =>{
    const storedAppSTR = localStorage.getItem('installed');

    if (storedAppSTR){
        const storedAppData = JSON.parse(storedAppSTR);
        return storedAppData;
    }
    else{
        return [];
    }
}

const addToLocalStorage = (id) =>{
    const storedAppData = getStoredApp();

    const appId = parseInt(id);

    if(storedAppData.includes(appId)){
        return;
    }
    else{
        storedAppData.push(appId);
        const data = JSON.stringify(storedAppData);
        localStorage.setItem("installed", data);
    }
}

export {addToLocalStorage, getStoredApp};
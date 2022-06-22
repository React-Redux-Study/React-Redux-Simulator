export const splitPath = (path, index) => {
    if(path === undefined){
        return null;
    }else{
        return Number(path.split("/")[index]);
    }
}
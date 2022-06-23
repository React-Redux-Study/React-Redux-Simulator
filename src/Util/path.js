export const splitPath = (path, index) => {
    if(path === undefined){
        return null;
    }else{
        return Number(path.split("/")[index]);
    }
}

export const classNames = (...classes) => {
    return classes.filter(Boolean).join(' ');
}
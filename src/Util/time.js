export const convertTime = (time) => {
    if(time === undefined){
        return "";
    }else{
        let result = time.replace("T", " ");
        return result.split(".")[0];
    }
}
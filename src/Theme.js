const Theme = ( dark ) => {
    let root = document.documentElement.style;
    if(dark){
        root.setProperty('--text-color-1', '#FFFFFF');
        root.setProperty('--highlight', '#151515');
        root.setProperty('--background-color', '#151515');
    }else{
        root.setProperty('--text-color-1', '#000000');
        root.setProperty('--highlight', '#FF7B7B');
        root.setProperty('--background-color', '#FFFFFF');
    }
}
export default Theme;
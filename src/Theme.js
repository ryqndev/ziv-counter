const Theme = ( dark ) => {
    let root = document.documentElement.style;
    if(dark){
        root.setProperty('--text-color-1', '#CECECE');
        root.setProperty('--text-color-accent', '#FFFF00');
        root.setProperty('--background-color', '#151515');
        root.setProperty('--alt-background-color', '#777777');
    }else{
        root.setProperty('--text-color-1', '#151515');
        root.setProperty('--text-color-accent', '#FF00FF');
        root.setProperty('--background-color', '#FFFFFF');
        root.setProperty('--alt-background-color', '#CECECE');
    }
}
export default Theme;
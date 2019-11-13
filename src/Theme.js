const Theme = ( dark ) => {
    let root = document.documentElement.style;
    if(dark){
        root.setProperty('--text-color-1', '#CECECE');
        root.setProperty('--text-color-accent', '#FFFFFF');
        root.setProperty('--background-color', '#151515');
    }else{
        root.setProperty('--text-color-1', '#151515');
        root.setProperty('--text-color-accent', '#FF7B7B');
        root.setProperty('--background-color', '#FFFFFF');
    }
}
export default Theme;
const extname = (filename) => {
    /* TODO */
    const dotIndex = filename.lastIndexOf('.');
    if(dotIndex<1){
        return ''
    }
    return filename.slice(dotIndex);
}
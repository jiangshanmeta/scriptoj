(() => {
    /* TODO */
    const old$ = window.$;
    window.$ = {
      noConflict () {
        const tmp = window.$;
        window.$ = old$;
        return tmp;
      }
    }
})()
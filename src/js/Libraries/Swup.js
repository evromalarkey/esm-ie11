import Swup from 'swup';
import LibLocomotive from "./Locomotive.js";

const LibSwup = new Swup({
    cache: false
});

console.log(LibSwup);

LibSwup.on('contentReplaced', function () {
    LibLocomotive.destroy();
    // $("#layout_scroll").removeAttr("style");
    LibLocomotive.init();
});

export default LibSwup;
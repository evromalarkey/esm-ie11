// https://esm.run/locomotive-scroll@4.0.6 shorthand nebo přes import-maps locomotive-scroll
import LocomotiveScroll from 'locomotive-scroll';

const LibLocomotive =  new LocomotiveScroll({
    el: document.querySelector('[data-scroll-container]'),
    smooth: true
});

export default LibLocomotive;
import "./slider";
import modals from "./modules/modules.modal";
import tabs from "./modules/module.tabs";
import forms from  "./modules/module.forms";
import changeModalState from "./modules/module.changeModalState";
import timer from "./modules/module.timer";
import images from "./modules/module.images"

window.addEventListener('DOMContentLoaded', () => {
    "use strict";

    let modalState = {};
    let deadline = '2022-02-01';

    changeModalState(modalState);
    modals();
    tabs('.glazing_slider', '.glazing_block', '.glazing_content', 'active');
    tabs('.decoration_slider', '.no_click', '.decoration_content > div > div', 'after_click');
    tabs('.balcon_icons', '.balcon_icons_img', '.big_img > img', 'do_image_more', 'inline-block');
    forms(modalState);
    timer('.container1', deadline);
    images();
});
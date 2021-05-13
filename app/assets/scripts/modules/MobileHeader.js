import $ from "jquery";

class MobileHeader{
    constructor(){
        this.header = $(".header");
        this.menuIcon = $(".header__menu-icon");
        this.menuContainer = $(".header__menu-container");
        this.events();
    }
    
    events(){
        this.menuIcon.click(this.toggleMobileHeader.bind(this));
    }
    //bind() is called as this changes from MobileHeader to menuIcon i.e. ".header__menu-icon" element.
    
    toggleMobileHeader(){
        this.menuContainer.toggleClass("header__menu-container__is-visible");
        this.menuIcon.toggleClass("header__menu-icon__close");
        this.header.toggleClass("header__is-expanded");
    }
}

export default MobileHeader;
//var Person = require("./modules/Person");
import MobileHeader from "./modules/MobileHeader"; //es6
import RevealOnScroll from "./modules/RevealOnScroll";
import StickyHeader from "./modules/StickyHeader";
import Modal from "./modules/Modal";

var mobileHeader = new MobileHeader();
var revealOnScroll = new RevealOnScroll(".feature-item","85%");
var revealOnScroll1 = new RevealOnScroll(".testimonial","60%");
var stickyHeader = new StickyHeader;
var modal = new Modal();

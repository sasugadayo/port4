class MobileMenu {
    constructor() {
        this.DOM = {};
        this.DOM.btn = document.querySelector('.mobile-menu__btn');
        this.DOM.text = document.querySelector('.main-title');
        this.DOM.text2 = document.querySelector('.main-title2');
        this.DOM.text3 = document.querySelector('.main-title3');
        this.DOM.text4 = document.querySelector('.main-title4');
        this.DOM.text5 = document.querySelector('.main-title5');
        this.DOM.cover = document.querySelector('.mobile-menu__cover');
        this.DOM.container = document.querySelector('#global-container');
        this.eventType = this._getEventType();
        this._addEvent();
    }

    _getEventType() {
        return window.ontouchstart ? 'touchstart' : 'click';
    }


    _toggle() {
        this.DOM.container.classList.toggle('menu-open');
    }

    _addEvent() {
        this.DOM.btn.addEventListener(this.eventType, this._toggle.bind(this));
        this.DOM.text.addEventListener(this.eventType, this._toggle.bind(this));
        this.DOM.text2.addEventListener(this.eventType, this._toggle.bind(this));
        this.DOM.text3.addEventListener(this.eventType, this._toggle.bind(this));
        this.DOM.text4.addEventListener(this.eventType, this._toggle.bind(this));
        this.DOM.text5.addEventListener(this.eventType, this._toggle.bind(this));
        this.DOM.cover.addEventListener(this.eventType, this._toggle.bind(this));
    }
}

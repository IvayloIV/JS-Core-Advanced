class TitleBar {
    constructor(title){
        this.title = title;
        this._element = this.createElement();
    }
    createElement(){
        function showContent() {
            let currentEl = $(this).parent().parent().find('.drawer');
            if (currentEl.css('display') === 'block'){
                currentEl.css('display', 'none');
            } else {
                currentEl.css('display', 'block');
            }
        }
        return $('<header>').addClass('header')
            .append($('<div>').addClass('header-row')
                .append($('<a>').addClass('button').html('&#9776;').on('click', showContent))
                .append($('<span>').addClass('title').text(this.title)))
            .append($('<div>').addClass('drawer').css('display', 'none')
                .append($('<nav>').addClass('menu')));
    }
    addLink(href, name){
        $(this._element).find('.menu').append($('<a>').addClass('menu-link').attr('href', href).text(name));
    }
    appendTo(selector){
        $(selector).append(this._element);
    }
}
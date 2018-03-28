class Contact {
    constructor(firstName, lastName, phone, email){
        this.firstName = firstName;
        this.lastName = lastName;
        this.phone = phone;
        this.email = email;

        this._element = this.createElement();
        this._online = false;
    }
    createElement() {
        let newArticle = $('<article>');
        newArticle.append($('<div>').addClass(`title`).text(`${this.firstName} ${this.lastName}`)
            .append($('<button>').html('&#8505;').on('click', showContent)));
        newArticle.append($('<div>').addClass('info').css('display', 'none')
            .append($('<span>').html(`&phone; ${this.phone}`))
            .append($('<span>').html(`&#9993; ${this.email}`)));
        function showContent() {
            let currentBlock = $(this).parent().parent().find('.info');
            if (currentBlock.css('display') === 'none'){
                currentBlock.css('display', 'block');
            } else {
                currentBlock.css('display', 'none');
            }
        }
        return newArticle;
    }

    render(id){
        $(`#${id}`).append(this._element);
    }

    update(){
        console.log(this._element);
        if (this._online === true){
            this._element.find('.title').addClass('online');
        } else {
            this._element.find('.title').removeClass('online');
        }
    }
    get online() {
        return this._online;
    }

    set online(value) {
        this._online = value;
        this.update();
    }
}
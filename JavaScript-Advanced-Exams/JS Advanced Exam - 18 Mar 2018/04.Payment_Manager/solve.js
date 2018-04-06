class PaymentManager  {
    constructor(title){
        this.title = title;
        this.view = this.createView();
    }

    createView(){
        return $('<table>')
            .append($('<caption>').text(`${this.title} Payment Manager`))
            .append($('<thead>')
                .append($('<tr>')
                    .append($('<th>').addClass('name').text('Name'))
                    .append($('<th>').addClass('category').text('Category'))
                    .append($('<th>').addClass('price').text('Price'))
                    .append($('<th>').text('Actions'))))
            .append($('<tbody>').addClass('payments'))
            .append($('<tfoot>').addClass('input-data')
                .append($('<tr>')
                    .append($('<td>')
                        .append($('<input>').attr('name', 'name').attr('type', 'text')))
                    .append($('<td>')
                        .append($('<input>').attr('name', 'category').attr('type', 'text')))
                    .append($('<td>')
                        .append($('<input>').attr('name', 'price').attr('type', 'number')))
                    .append($('<td>')
                        .append($('<button>').text('Add').on('click', this.addElement.bind(this))))));
    }

    addElement(){
        let allElements = $(this.view).find(`.input-data tr td input`);
        let name = $(allElements[0]);
        let category = $(allElements[1]);
        let price = $(allElements[2]);
        if ($(name).val() === "" || $(category).val() === "" || $(price).val() === ""){
            return;
        }
        $(this.view).find('.payments')
            .append($('<tr>')
                .append($('<td>').text($(name).val()))
                .append($('<td>').text($(category).val()))
                .append($('<td>').text(Number($(price).val())))
                .append($('<td>')
                    .append($('<button>').text('Delete').on('click', this.removeItem))));
        $(name).val('');
        $(category).val('');
        $(price).val('');
    }

    removeItem(){
        $(this).parent().parent().remove();
    }

    render(id){
        $(`#${id}`).append(this.view);
    }
}
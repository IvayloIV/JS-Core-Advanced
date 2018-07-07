class PublicTransportTable {
    constructor(townName) {
        this.changeTitle(townName);
        this.data = [];
        this.attachEvents();
    }

    attachEvents() {
        $('.search-btn').on('click', this.searchItems.bind(this));
        $('.clear-btn').on('click', this.clearItems.bind(this));
    }

    clearItems() {
        for (let i = 0; i < this.data.length; i++) {
            this.data[i]['currentHtml'].css('display', '');
        }
        $('thead input[name="type"]').val('');
        $('thead input[name="name"]').val('');
    }

    searchItems() {
        let type = $('thead input[name="type"]');
        let name = $('thead input[name="name"]');
        if (type.val() === '' && name.val() === '') {
            return;
        }
        for (let i = 0; i < this.data.length; i++) {
            this.data[i]['currentHtml'].css('display', '');
        }
        if (type.val() !== '') {
            this.changeData('type', type.val());
        }
        if (name.val() !== '') {
            this.changeData('name', name.val());
        }
    }

    changeData(type, text) {
        for (let i = 0; i < this.data.length; i++) {
            if (this.data[i][type].indexOf(text) === -1) {
                this.data[i]['currentHtml'].css('display', 'none');
                this.data[i]['currentHtml'].find('button').text('More Info');
                this.data[i]['bonusInfo'].remove();
            }
        }
    }

    changeTitle(newTitle) {
        let allText = $('caption');
        allText.text(newTitle + `\'s Public Transport`);
    }

    addVehicle(obj) {
        let bonusInfo = $('<tr>').addClass('more-info')
            .append($('<td>').attr('colspan', '3')
                .append($('<table>')
                    .append($('<tr>')
                        .append($('<td>').text(`Route: ${obj.route}`)))
                    .append($('<tr>')
                        .append($('<td>').text(`Price: ${obj.price}`)))
                    .append($('<tr>')
                        .append($('<td>').text(`Driver: ${obj.driver}`)))));
        let newInfo = $('<tr>')
            .append($('<td>').text(obj.type))
            .append($('<td>').text(obj.name))
            .append($('<td>')
                .append($('<button>').text('More Info').on('click', function () {
                    if ($(this).text() === 'More Info')
                    {
                        bonusInfo.insertAfter($(this).parent().parent());
                        $(this).text('Less Info');
                    } else {
                        bonusInfo.remove();
                        $(this).text('More Info');
                    }
                })));
        this.data.push({name: obj.name, type: obj.type, currentHtml: newInfo, bonusInfo});
        $('.vehicles-info').append(newInfo);
    }
}
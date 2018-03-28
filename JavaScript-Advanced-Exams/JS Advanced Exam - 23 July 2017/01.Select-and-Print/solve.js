function move(command) {
    if (command === 'right'){
        let availableTown = $('#available-towns option:selected');
        $(availableTown).fadeOut(() => {
            $('#selected-towns').append(availableTown.fadeIn());
        });
    } else if (command === 'left'){
        let selectedTown = $('#selected-towns option:selected');
        $(selectedTown).fadeOut(() => {
            $('#available-towns').append(selectedTown.fadeIn());
        });
    } else if (command === 'print'){
        let selectedTowns = $('#selected-towns option').toArray();
        $('#output').empty().append(selectedTowns.map(a => $(a).text()).join('; '));
    }
}
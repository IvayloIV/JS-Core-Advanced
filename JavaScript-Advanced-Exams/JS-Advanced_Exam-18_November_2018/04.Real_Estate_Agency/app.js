function realEstateAgency () {
    let regOffer = $('#regOffer');
    let apartmentRent = regOffer.find('input[name="apartmentRent"]');
    let apartmentType = regOffer.find('input[name="apartmentType"]');
    let agencyCommission = regOffer.find('input[name="agencyCommission"]');
    let message = $('#message');
    let building = $('#building');
    let roof = $('#roof h1');
    let sumAgency = 0;

    let findOfferDiv = $('#findOffer');
    let familyBudget = findOfferDiv.find('input[name="familyBudget"]');
    let familyApartmentType = findOfferDiv.find('input[name="familyApartmentType"]');
    let familyName = findOfferDiv.find('input[name="familyName"]');

    regOffer.find('button[name="regOffer"]').on('click', createRegOffer);
    findOfferDiv.find('button[name="findOffer"]').on('click', findOffer);

    let register = [];

    function createRegOffer() {
        let apartmentRentVal = apartmentRent.val();
        let apartmentTypeVal = apartmentType.val();
        let agencyCommissionVal = Number(agencyCommission.val());

        apartmentRent.val('');
        apartmentType.val('');
        agencyCommission.val('');
        message.text('');

        if (apartmentRentVal === '' || apartmentTypeVal === '' || agencyCommissionVal === '') {
            message.text('Your offer registration went wrong, try again.');
            return;
        }

        apartmentRentVal = Number(apartmentRentVal);
        agencyCommissionVal = Number(agencyCommissionVal);

        if (isNaN(apartmentRentVal) || isNaN(agencyCommissionVal) || apartmentRentVal <= 0
            || agencyCommissionVal < 0 || agencyCommissionVal > 100
            || apartmentTypeVal.indexOf(':') !== -1) {
            message.text('Your offer registration went wrong, try again.');
            return;
        }

        let apartment = $('<div>').addClass('apartment')
            .append($('<p>').text(`Rent: ${apartmentRentVal}`))
            .append($('<p>').text(`Type: ${apartmentTypeVal}`))
            .append($('<p>').text(`Commission: ${agencyCommissionVal}`));

        building.append(apartment);
        register.push({
            apartmentRent: apartmentRentVal,
            agencyCommission: agencyCommissionVal,
            apartmentType: apartmentTypeVal,
            price: apartmentRentVal + (apartmentRentVal * agencyCommissionVal / 100),
            html: apartment
        });
        message.text('Your offer was created successfully.');
    }

    function findOffer() {
        let familyBudgetVal = familyBudget.val();
        let familyApartmentTypeVal = familyApartmentType.val();
        let familyNameVal = familyName.val();

        familyBudget.val('');
        familyApartmentType.val('');
        familyName.val('');
        message.text('');

        if (familyBudgetVal === '' || familyApartmentTypeVal === '' || familyNameVal === '') {
            message.text('We were unable to find you a home, so sorry :(');
            return;
        }

        familyBudgetVal = Number(familyBudgetVal);

        if (isNaN(familyBudgetVal) || familyBudgetVal <= 0) {
            message.text('We were unable to find you a home, so sorry :(');
            return;
        }

        let index = -1;
        for (let i = 0; i < register.length; i++) {
            let currentOffer = register[i];

            if (currentOffer['apartmentType'] === familyApartmentTypeVal
                && currentOffer['price'] <= familyBudgetVal) {
                index = i;
                break;
            }
        }

        if (index === -1) {
            message.text('We were unable to find you a home, so sorry :(');
            return;
        }

        let html = register[index]['html'];
        let offerPrice = register[index]['apartmentRent'];
        let offerCommission = register[index]['agencyCommission'];
        let bestOffer = register.splice(index, 1)[0];

        $(html).empty();
        $(html).css('border', '2px solid red')
            .append($('<p>').text(familyNameVal))
            .append($('<p>').text('live here now'))
            .append($('<button>').text('MoveOut').on('click', removeHouse));

        sumAgency += (offerPrice * offerCommission / 100) * 2;;
        roof.text(`Agency profit: ${sumAgency} lv.`);

        message.text('Enjoy your new home! :))');
    }

    function removeHouse() {
        let parent = $(this).parent();
        message.text(`They had found cockroaches in ${parent.find('p:first-of-type').text()}'s apartment`);
        parent.remove();
    }
}

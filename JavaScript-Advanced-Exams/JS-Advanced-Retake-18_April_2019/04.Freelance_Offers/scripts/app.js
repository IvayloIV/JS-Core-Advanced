const usernameInput = $('#username');
const createOffers = $('#create-offers');
const logButton = $('#loginBtn');
const notifications = $('#notification');

const offerNameInput = $('#offerName');
const companyInput = $('#company');
const descriptionInput = $('#description');
const offers = $('#offers-container');

createOffers.css('display', 'none');

logButton.on('click', log);
$('#create-offer-Btn').on('click', createOffer);

function isAuth() {
    return logButton.text() === 'Logout';
}

function log(e) {
    e.preventDefault();

    if (isAuth()) {
        logout();
    } else {
        login();
    }
}

function login() {
    let username = usernameInput.val();
    notifications.text('');

    if (username.length < 4 || username.length > 10) {
        notifications.text('The username length should be between 4 and 10 characters.');
        return;
    }
    
    createOffers.css('display', 'block');
    usernameInput.val(`Hello, ${username}!`)
        .addClass('border-0 bg-light')
        .attr('disabled', 'disabled');

    logButton.text('Logout');
}

function logout() {
    createOffers.css('display', 'none');
    usernameInput.val('')
        .removeClass('border-0 bg-light')
        .removeAttr('disabled');

    logButton.text('Login');
}

function createOffer(e) {
    e.preventDefault();

    if (!isAuth()) {
        return;
    }

    const offerName = offerNameInput.val();
    const company = companyInput.val();
    const description = descriptionInput.val();

    if (offerName === '' || company === '' || description === '') {
        return;
    }

    offers.append($('<div>').addClass('col-3')
        .append($('<div>').addClass('card text-white bg-dark mb-3 pb-3').css('max-width', '18rem')
            .append($('<div>').addClass('card-header').text(offerName))
            .append($('<div>').addClass('card-body')
                .append($('<h5>').addClass('card-title').text(company))
                .append($('<p>').addClass('card-text').text(description)))));
    
    offerNameInput.val('');
    companyInput.val('');
    descriptionInput.val('');
}

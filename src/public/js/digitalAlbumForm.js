//REFERENCE https://stackoverflow.com/questions/4060004/calculate-age-given-the-birth-date-in-the-format-yyyymmdd
//Underaged Validation (WITH SERVER DATE)
document.getElementById('birthday').onblur = function() {
    var today = new Date();
    var birthDate = new Date(document.getElementById('birthday').value);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    if (age < 18) {
        document.getElementById('div-responsible-name').style.display = 'block'
        document.getElementById('div-responsible-cpf').style.display = 'block'
        document.getElementById('div-cpf').style.display = 'none'
    } else {
        document.getElementById('div-responsible-name').style.display = 'none'
        document.getElementById('div-responsible-cpf').style.display = 'none'
        document.getElementById('div-cpf').style.display = 'block'
    }
}

//REFERENCE https://stackoverflow.com/questions/21070101/show-hide-div-using-javascript
//REFERENCE https://stackoverflow.com/questions/11719961/javascript-remove-disabled-attribute-from-html-input
//Hide the authorization tab and your content
document.getElementById('div-authorization').style.display = 'none';
document.getElementById('tab-authorization').disabled = true;
//Hide the minor's guardian field
document.getElementById('div-responsible-name').style.display = 'none';
document.getElementById('div-responsible-cpf').style.display = 'none';
//Hide cpf field
document.getElementById('div-cpf').style.display = 'none';

//Assign functionality to the tabs
//tab authorization
document.getElementById('tab-authorization').onclick = function() {
    document.getElementById('div-personalInfos').style.display = 'none';
    document.getElementById('div-authorization').style.display = 'block';
};
//tab personal informations
document.getElementById('tab-personalInfos').onclick = function() {
    document.getElementById('div-authorization').style.display = 'none';
    document.getElementById('div-personalInfos').style.display = 'block';
};

function validationForm() {
    let isValid = validateName(document.querySelector("#photographer_name"));
    if (isValid) {
        updateFile();
        return true;
    }
    return false;
}
//ajax and upload config
function updateFile() {
    $('#photo_name').clone().appendTo('#fileForm');

    let myForm = document.getElementById('fileForm'); 
    let formDataFile = new FormData(myForm);

    $.ajax({
        url: '/uploadPhoto',
        data: formDataFile,
        processData: false,
        contentType: false,
        type: 'POST',
        success: function(data) {}
    })
}

//Does validation and goes to the authorization content
document.getElementById('btnNext').onclick = function() {
    let isValid = validateName(document.querySelector("#name")) && validateTelephoneNumber(document.querySelector("#phone_whatsapp")) && validateEmail(document.querySelector("#email"));
    if (isValid) {
        document.getElementById('tab-authorization').disabled = false;
        document.getElementById('tab-authorization').click();
    }
};

//Form Digital Album Validation
function validateName(name) {
    if (isEmpty(name) || isIncomplete(name)) {
        updateWarning(name);
    } else {
        removeWarning(name);
        return true;
    }
    return false;
}

function validateTelephoneNumber(telephoneNumber) {
    if (isInvalidTelephoneNumber(telephoneNumber)) {
        updateWarning(telephoneNumber);
    } else {
        removeWarning(telephoneNumber);
        return true;
    }
    return false;
}

function validateEmail(email) {
    if (isEmpty(email) || isInvalidEmail(email)) {
        updateWarning(email);
    } else {
        removeWarning(email);
        return true;
    }
    return false;
}

function validateCpf(cpf) {
    if (isEmpty(cpf) || isInvalidCpf(cpf)) {
        updateWarning(cpf);
    } else {
        removeWarning(cpf);
        return true;
    }
    return false;
}

function updateWarning(element) {
    element.classList.add("border-danger");
    element.focus();
}

function removeWarning(element) {
    element.classList.remove("border-danger");
}

function isEmpty(element) {
    return element.value == "";
}

function isIncomplete(element) {
    return element.value.length < 10;
}

function isInvalidTelephoneNumber(telephoneNumber) {
    return telephoneNumber.value.length > 11 || telephoneNumber.value.length < 9;
}

function isInvalidEmail(email) {
    return email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1;
}

function isInvalidCpf(cpf) {
    return cpf.value.length != 11;
}
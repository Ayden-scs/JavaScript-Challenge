const storageType = sessionStorage;
const consentName = 'cookie_consent';

const shouldShowPopup = () => !storageType.getItem(consentName);
const saveToStorage = () => storageType.setItem(consentName, true);

window.onload = () => {
    const consentPopup = document.getElementById('consent-popup');
    const cookieAccept = document.getElementById('cookie-accept');

    const cookieComplete = event => {
        saveToStorage(storageType);
        consentPopup.classList.add('cookie-hidden');
    }

    cookieAccept.addEventListener('click', cookieComplete);

    if (shouldShowPopup(storageType)) {
        consentPopup.classList.remove('cookie-hidden');
    }
}
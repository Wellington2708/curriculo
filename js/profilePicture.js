const imageContainer = document.querySelector('.image');
const newImage = document.createElement('img');
newImage.src = 'img/profilePicture.png';
newImage.alt = 'Profile picture';
newImage.classList.add('profile__picture');
imageContainer.appendChild(newImage);

newImage.addEventListener('click', changeProfilePicture);

function changeProfilePicture() {

    switch (true) {
        case newImage.src.endsWith('profilePicture.png'):
            newImage.src = 'img/profilePicture2.png';
            break;
        case newImage.src.endsWith('profilePicture2.png'):
            newImage.src = 'img/profilePicture3.png';
            break;
        case newImage.src.endsWith('profilePicture3.png'):
            newImage.src = 'img/profilePicture4.png';
            break;
        case newImage.src.endsWith('profilePicture4.png'):
            newImage.src = 'img/profilePicture5.png';
            break;
        case newImage.src.endsWith('profilePicture5.png'):
            newImage.src = 'img/profilePicture.png';
            break;
        default:
            newImage.src = 'img/profilePicture.png';
            break;
    }

}

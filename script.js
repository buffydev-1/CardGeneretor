const generateBtn = document.getElementById('generateBtn');
const cardNumberElement = document.getElementById('cardNumber');
const expiryDateElement = document.getElementById('expiryDate');
const cardHolderElement = document.getElementById('cardHolder');
const cardLogoElement = document.getElementById('cardLogo');
const cardTypeElement = document.getElementById('cardType');
const cardBackNumberElement = document.getElementById('cardBackNumber');

const logos = {
  VISA: 'https://upload.wikimedia.org/wikipedia/commons/4/41/Visa_2021_logo.svg',
  MasterCard: 'https://upload.wikimedia.org/wikipedia/commons/1/1f/Mastercard-logo.svg',
  AmEx: 'https://upload.wikimedia.org/wikipedia/commons/a/a3/American_Express_logo.svg',
  Discover: 'https://upload.wikimedia.org/wikipedia/commons/4/4a/Discover_Card_logo_2016.svg',
};

// פונקציה ליצירת שם אקראי
function generateRandomName() {
  const firstNames = ['John', 'Jane', 'Michael', 'Emily', 'David', 'Sarah', 'James', 'Anna', 'William', 'Olivia'];
  const lastNames = ['Doe', 'Smith', 'Brown', 'White', 'Green', 'Johnson', 'Miller', 'Lee', 'Harris', 'King'];
  
  const firstName = firstNames[Math.floor(Math.random() * firstNames.length)];
  const lastName = lastNames[Math.floor(Math.random() * lastNames.length)];
  
  return firstName + ' ' + lastName;
}

function generateRandomCard() {
  // Generate random numbers for the card (full number)
  const randomCardNumber = `${generateCardNumber()} ${generateCardNumber()} ${generateCardNumber()} ${generateCardNumber()}`;
  cardNumberElement.innerText = randomCardNumber;

  // Generate random expiry date
  const randomMonth = Math.floor(Math.random() * 12 + 1).toString().padStart(2, '0');
  const randomYear = Math.floor(Math.random() * 10 + 23);
  expiryDateElement.innerText = `${randomMonth}/${randomYear}`;

  // Generate random cardholder name (new every time)
  const randomHolder = generateRandomName();
  cardHolderElement.innerText = randomHolder;

  // Choose a random company and display logo
  const companies = ['VISA', 'MasterCard', 'AmEx', 'Discover'];
  const company = companies[Math.floor(Math.random() * companies.length)];
  cardLogoElement.innerHTML = `<img src="${logos[company]}" alt="${company}" width="40px">`;
  cardTypeElement.innerText = company;

  // Generate random card number for back (CVC)
  cardBackNumberElement.innerText = Math.floor(Math.random() * 900 + 100);
}

function generateCardNumber() {
  return Math.floor(Math.random() * 9000 + 1000);
}

// Initial card generation
generateRandomCard();

// Event listener for button to generate new card
generateBtn.addEventListener('click', generateRandomCard);

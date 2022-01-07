prompt("Assalomu Alaykum, Sayohatga chiqmoqmisiz?", "Ha");

var elresultHeading = document.querySelector('.heading');

var userCoast = Number(prompt("Sayohat uchun ajratgan mablag'ingizni yozing!", 0));

var ticketPrice = 500;
var hotelPayment = 250;
var forMuseum = 120;
var courseDollar = 9433.34;
var courseEur = 10354.03;
var totalDollarcoast = Number(Math.floor (ticketPrice + hotelPayment )* courseDollar);
var totalEurcoast = Number(Math.floor (forMuseum * courseEur));
var totalCoast = totalDollarcoast + totalEurcoast;



if (userCoast >= totalCoast) {
    elresultHeading.textContent = "Alisher aka puliz bo'lsa haltada dam olasiz Yaltada :) Oq yo'l sizga";
} else {
    elresultHeading.textContent = "Alisher aka puliz bo'lmasa haltada baloo bormi Yaltada :( Hafa bo'misiz endi keyingi yil borarsiz";
}

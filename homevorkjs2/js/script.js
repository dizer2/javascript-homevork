// let userName = "Yura";
// let age = 15;
// let favouriteFruit = "apple";
// let favouriteColor = "red";
// let myNumber = 380685315298;
// let devicePhone = "Samsung A40";
// let nameBrother = "Taras";
// let nameMother = "Natalia";
// let nameFather = "Igor";
// let myLaptopDevice = "acer nitro 5";
// let mySystemLaptop = "Windows11";
// let favoriteCar = "Tesla";
// let favoriteBrothersFruit = "watermelon";
// let myFavoriteVegetable = "Tomato";
// let weatherToday = "sunny";
// let myBestProgram = "VS code";
// let myBestsociable = "Instagram";
// let myFavoritefootballer = "Messi";
// let myFavoriteBranding = "Nike";
// let myFavoriteSweet = "Ice cream";
// let myFavoriteTvProgram = "Heads and tails";
// let myFavoriteWeather = "Sunny";
// let nameMyHeadphone = "Airpods"
// let nameMyCat = "Myrchik";
// let myNational = "Ukrain";
// let myBestFriend = "Roman";
// let myFavoriteTeamOnCsgo = "Navi";
// let myFavoritGamesInPlastation = "Horizen Zero Dawn";
// let nameMyLaptopMouse = "Yenkee";
// let nameMyVillage = "Tershiv";
// let myFavoritSubject = "English";
// let myDatOfBirth = 18.07;
// let myBrotherDatOfBirth = 15.05 ;
// let myNameTeacherInIt = "Vitalik";
// let myHobbi = "Dance";
// let myFavoriteMusic = "Time moves";
// let myFavoriteMusicBand = "MiyaGi";
// let myTeacherInDance = "Michailo";
// let myFamilyCar = "Ford";
// let myNameNicon = false ;
// let lLoveFootball = false;
// let todayWeatherIsGood = true;
// let lLiveInPairs = false;
// let myMotherNameIsNIka = false;
// let tomorrowLWentToHospital = false;
// let lLoveRain = false;
// let lLOveMusic = true;

let robot = -1;
let garden = 6;
let school = 16;
let university = 23;
let work = 60;
let pension = 100;

let howOldAreYou = prompt(`Введи свій вік!`);

if (howOldAreYou < robot){
    alert(`Ти що аферист?`);
}else{
    if (howOldAreYou < garden ){
        alert(`Тобі пора в садік`);
    }else{
        if (howOldAreYou < school){
            alert(`Тобі пора в школу`);
        }else{
            if (howOldAreYou < university){
                alert(`Тобі пора в універ`);
            }else{
                if (howOldAreYou < work){
                    alert(`Тобі пора на роботу`);
                }else{
                    if (howOldAreYou < pension){
                        alert(`Тобі пора на мальдіви`);
                    }else{
                        if (howOldAreYou > pension){
                            alert(`Ти що аферист?`);
                        }
                    }
                }
            }
        }
    }
}

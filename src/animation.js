import './components/MainPage/MainPage.css';
//import WebpackLogo from './img/logo.png';
let url = document.URL;

function Animation () {
    setTimeout(()=> {
        let animation = document.querySelector("#logo");
        let wrapper = document.querySelector(".wrapper");
        let buttons = document.querySelector('.page-content__buttons');
        //wrapper.style = "height: 100vh; display: flex; justify-content: space-around; align-items: center; flex-direction: column;";
        //animation.style.display = "none";
        //buttons.style.visibility = 'initial';
        let xhr = new XMLHttpRequest();
        xhr.open("GET", "google.com",true);
        xhr.send();
    },5000);
}

export default Animation




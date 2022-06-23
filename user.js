let date = new Date();
let month = date.getMonth() + 1 < 10 ? `0${date.getMonth() + 1}` : date.getMonth() + 1;
let day = date.getDate() < 10 ? `0${date.getDate()}` : date.getDate();
let year = date.getFullYear();
let today = `${year}-${month}-${day}`;

const getAge = (birthdate, yearToday, monthToday, dateToday) => {
    let age = 0;
    let birthYear = parseInt(birthdate.split("-")[0]);
    let birthMonth = parseInt(birthdate.split("-")[1]);
    let birthday = parseInt(birthdate.split("-")[2]);
    age = yearToday - birthYear;
    if(birthYear % 4 == 0 && birthMonth == 2 && birthday == 29)
    {
        age = age / 4;
    } 
    else
    {
        monthToday < birthMonth || monthToday == birthMonth && birthday > dateToday ? age-- : null;
    }
    return parseInt(age);
  }

$(".userform").submit((e) => {
    e.preventDefault();
    let firstname = $("#firstname").val();
    let middlename = $("#middlename").val();
    let lastname = $("#lastname").val();
    let birthdate = $("#birthdate").val();
    let address = $("#address").val();
    let email = $("#email").val();

    firstname.length == 1 ? $(".error-text").text("Invalid Firstname") :
    middlename.length == 1 ? $(".error-text").text("Invalid Middlename") :
    lastname.length == 1 ? $(".error-text").text("Invalid Lastname") :
    today == birthdate || parseInt(birthdate.split("-")[0]) > 2004 ? $(".error-text").text("Required Age is 18yrs old above") :
    alert("User Form Submitted");
});

$("#birthdate").change(() => {
    $("#age").val(getAge($("#birthdate").val(),parseInt(year),parseInt(month),parseInt(day)));
});



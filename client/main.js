const complimentBtn = document.querySelector("#complimentButton")
const fortuneBtn = document.querySelector("#fortuneButton")
const babyNameBtn = document.querySelector("#babyNameButton")
const dateBtn = document.querySelector("#dateButton")
const timeBtn = document.querySelector("#timeButton")

const getCompliment = () => {
    axios.get("http://localhost:4000/api/compliment/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};
const getFortune = () => {
    axios.get("http://localhost:4000/api/fortune/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};
const getBabyName = () => {
    const babyGender = document.querySelector("#selectGender").value;
    axios.get(`http://localhost:4000/api/babyname/${babyGender}`)
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

const getCurrentDate = () => {
    axios.get(`http://localhost:4000/api/currentdate`)
        .then(res => {
            const data = res.data;
            alert(data);
    });
};


const getCurrentTime = () => {
    axios.get(`http://localhost:4000/api/currenttime`)
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

complimentBtn.addEventListener('click', getCompliment)
fortuneBtn.addEventListener('click', getFortune)
babyNameBtn.addEventListener('click', getBabyName)
dateBtn.addEventListener('click', getCurrentDate)
timeBtn.addEventListener('click', getCurrentTime)
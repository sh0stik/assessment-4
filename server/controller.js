module.exports = {

    getCompliment: (req, res) => {
        const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];

        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];

        res.status(200).send(randomCompliment);
    },

    getFortune: (req, res) => {
        const fortunes = ["You are almost there.", "All will go well with your new project.", "Practice makes perfect."];

        // choose random fortune
        let randomIndex = Math.floor(Math.random() * fortunes.length);
        let randomfortune = fortunes[randomIndex];

        res.status(200).send(randomfortune);
    },

    getBabyName: (req, res) => {
        const gender = req.params.gender
        const babyBoyNames = ["James", "Robert", "John", "Michael", "David", "William", "Richard", "Joseph",
            "Thomas"];

        const babyGirlNames = ["Olivia", "Emma", "Charlotte", "Amelia", "Sophia", "Isabella",
            "Ava", "Mia"];
        // choose random name
        let randomIndex;
        let randomName;
        if (gender === 'boy') {
            randomIndex = Math.floor(Math.random() * babyBoyNames.length);
            randomName = babyBoyNames[randomIndex];
        } else {
            randomIndex = Math.floor(Math.random() * babyGirlNames.length);
            randomName = babyGirlNames[randomIndex];
        }

        res.status(200).send(randomName);
    },

    getCurrentDate: (req, res) => {
        const curDate = new Date();

        res.status(200).send(curDate.toDateString());
    },
    getCurrentTime: (req, res) => {
        const curTime = new Date();

        res.status(200).send(curTime.toTimeString());
    }

}
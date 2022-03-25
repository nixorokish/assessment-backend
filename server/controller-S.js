const compliments = require(`./db.json`)
const fortunes = require(`./db2.json`)

module.exports = {

    getCompliment: (req, res) => {
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
        res.status(200).send(randomCompliment)
    },

    getFortune: (req, res) => {
        let randomIndex = Math.floor(Math.random() * fortunes.length);
        let randomFortune = fortunes[randomIndex];
        res.status(200).send(randomFortune)
    },

    newCompliment: (req, res) => {
        let compliment = req.body
        compliments.push(compliment)
        res.status(200).send(compliments)
    },
}
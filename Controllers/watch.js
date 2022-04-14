const watch = require('../Models/watch');

exports.getWatch = (req, res) => {
    watch.find()
        .then(response => {
            res.status(200).json(
                {
                    message: "watch Fetched Successfully",
                    watch: response
                })
        })
        .catch(err => {
            res.status(500).json({ error: err })
        })
}
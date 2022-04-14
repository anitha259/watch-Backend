const order = require('../Models/order');

exports.saveOrderDetails = (req, res) => {
    const { placedByUserName, placedByUserId, address, placedOn, items, amount, resId } = req.body;

    let orderObj = new Orders({
        placedBy: placedByUserName,
        placedByUserId,
        placedOn,
        items,
        amount,
        watchId: resId,
        address
    })

    orderObj.save()
        .then(response => {
            res.status(200).json(
                {
                    message: "Order Added Successfully",
                    order: response
                })
        })
        .catch(err => {
            res.status(500).json({ error: err })
        })
}

exports.getOrderByUserId = (req, res) => {
    const userId = req.params.userId;

    order.find({ placedByUserId: userId })
        .then(response => {
            res.status(200).json(
                {
                    message: "Order Fetched Successfully",
                    order: response
                })
        })
        .catch(err => {
            res.status(500).json({ error: err })
        })
}
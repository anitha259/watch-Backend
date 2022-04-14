const Brand = require('../Models/brand');

exports.getBrandByLocation = (req, res) => {
    const locId = req.params.locId;

    Brand.find({ location_id: locId })
        .then(response => {
            res.status(200).json(
                {
                    message: "brand Fetched Successfully",
                    brand: response
                })
        })
        .catch(err => {
            res.status(500).json({ error: err })
        })
}

exports.brandFilter = (req, res) => {
    let { watch, location, model, lcost, hcost, sort, page } = req.body;
    

    sort = sort ? sort : 1;
    page = page ? page : 1;

    const ItemsPerPage = 2;

    let startIndex = ItemsPerPage * page - ItemsPerPage;
    let endIndex = ItemsPerPage * page + 1;

    let filterObj = {};

    watch && (filterObj['watch_id'] = watch);
    location && (filterObj['location_id'] = location);
    model && (filterObj['model_id'] = { $in: model });
    lcost && hcost && (filterObj['min_price'] = { $lte: hcost, $gte: lcost });

    brand.find(filterObj).sort({ min_price: sort })
        .then(response => {
            console.log('resp', response);
            // Pagination Logic

            const paginatedResponse = response.slice(startIndex, endIndex);

            let arr = [];
            for (let i = 1; i <= Math.ceil(response.length / ItemsPerPage); i++) {
                arr.push(i);
            }

            res.status(200).json(
                {
                    message: "brand Fetched Successfully",
                    brand: paginatedResponse,
                    pageCount: arr,
                    currentPage: page
                })
        })
        .catch(err => {
            res.status(500).json({ error: err })
        })
}

exports.getBrandDetailsById = (req, res) => {
    const resId = req.params.resId;

    brand.findById(resId)
        .then(response => {
            res.status(200).json(
                {
                    message: "brand Fetched Successfully",
                    brand: response
                })
        })
        .catch(err => {
            res.status(500).json({ error: err })
        })
}
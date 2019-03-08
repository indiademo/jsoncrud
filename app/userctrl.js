var data2 = require('../data2')
const fs = require('fs');

var userCtrl = {};


userCtrl.addUser = (req, res) => {
    reqdata = {
        "id": req.body.id,
        "Name": req.body.Name,
        "username": req.body.username,
        "email": req.body.email,
        "address": {
            "street": req.body.street,
            "suite": req.body.suite,
            "city": req.body.city,
            "zipcode": req.body.zipcode,
            "geo": {
                "lat": req.body.lat,
                "lng": req.body.lng
            }
        },
        "phone": req.body.phone,
        "website": req.body.website
    }
    console.log(reqdata);



    fs.readFile('./data2.json', function (err, data) {
        var json = JSON.parse(data)
        json.push(reqdata)

        fs.writeFile("./data2.json", JSON.stringify(json))
    })

    res.send('user added')
}

userCtrl.getUser = (req, res) => {
    fs.readFile('./data2.json', function (err, data) {
        var user = JSON.parse(data)
        if (user.length > 0) {
            res.json({
                code: '200',
                message: 'sucess',
                data: user
            })
        } else {
            res.send({
                code: '200',
                message: 'sucess',
                data: 'Data not available'
            })
        }
    })


}

userCtrl.getSingleUser = (req, res) => {
   var userid = req.body.id
console.log(userid)
    fs.readFile('./data2.json', function (err, data) {
        var user = JSON.parse(data)
        const result = user.filter(word => word.id == userid);
        if (result.length > 0) {
            res.send({
                code: '200',
                message: 'sucess',
                data: result
            })
        } else {
            res.json({
                code: '200',
                message: 'sucess',
                data: 'Data not available'
            })
        }

    })





}

module.exports = userCtrl;
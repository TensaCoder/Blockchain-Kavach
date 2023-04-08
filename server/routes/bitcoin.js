const Router = require('express');
const router = Router();
const axios = require('axios');


router.get('/transaction',
    async (req, res) => {
        let txHash = req.body.txHash;                   // TODO: Create ThunderClient request and add txhash in body of request
        try {
            const response = await axios.get(`https://blockchain.info/rawtx/${txHash}`);
            res.send(response.data);

        } catch (error) {
            console.error(error);
            if ((error.response.data.message) === "Item not found or argument invalid"){
                res.send("Item not found or argument invalid")
            }
        }
    }
);


router.get('/block',
    async (req, res) => {
        let blockHash = req.query.blockHash;                   // TODO: Create ThunderClient request and add blockHash in body of request
        console.log(blockHash)
        // res.send("req received")
        try {
            const response = await axios.get(`https://blockchain.info/rawblock/${blockHash}`);
            res.send(response.data);
            console.log(response.data)

        } catch (error) {
            console.error(error);
            if ((error.response.data.message) === "Item not found or argument invalid"){
                res.send("Item not found or argument invalid")
            }
        }
    }
);

router.get('/address',
    async (req, res) => {
        let address = req.body.address;                   // TODO: Create ThunderClient request and add address in body of request
        try {
            const response = await axios.get(`https://blockchain.info/rawaddr/${address}`);
            res.send(response.data);
        } catch (error) {
            console.error(error);
            if ((error.response.data.message) === "Item not found or argument invalid"){
                res.send("Item not found or argument invalid")
            }
        }
    }
);



module.exports = router;

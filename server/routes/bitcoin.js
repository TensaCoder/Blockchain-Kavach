const Router = require('express');
const router = Router();
const axios = require('axios');


router.post('/transaction',
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


router.post('/block',
    async (req, res) => {
        let blockHash = req.body.blockHash;            // TODO: Create ThunderClient request and add blockHash in body of request
        // console.log(blockHash)
        try {
            const response = await axios.get(`https://blockchain.info/rawblock/${blockHash}`);
            res.send(response.data);
            // console.log(response.data)

        } catch (error) {
            console.error(error);
            if ((error.response.data.message) === "Item not found or argument invalid"){
                console.log(error.response.data.message)
                res.send("Item not found or argument invalid")
            }
        }
    }
);

router.post('/address',
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

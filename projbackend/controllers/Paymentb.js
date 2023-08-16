const braintree = require("braintree");

const gateway = new braintree.BraintreeGateway({
  environment: braintree.Environment.Sandbox,
  merchantId: "7rnbvm3gqnyygbff",
  publicKey: "3d255g8k6g26jnvg",
  privateKey: "e98d8c2391e3f15b8c61c8923b766513"
});

const getToken = (req, res)=>{
    gateway.clientToken.generate({}, (err, response) => {
        if(err){
            res.status(500).json(err);
        }else{
            res.send(response);
        }
      });
}

const processPayment = (req, res)=>{
    let nonceFromTheClient = req.body.nonceFromTheClient
    let amountFromTheClient = req.body.amount
    gateway.transaction.sale({
        amount: amountFromTheClient,
        paymentMethodNonce: nonceFromTheClient,
        options: {
          submitForSettlement: true
        }
      }, (err, result) => {
        if(err){
            res.status(500).json(err);
        }else{
            res.json(result)
        }
    });
}

module.exports = {
    getToken,
    processPayment
};
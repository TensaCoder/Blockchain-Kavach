import React, {useState} from 'react'
import axios from "axios"

const Transaction = () => {
  
    const [transactionHash, setTransactionHash] = useState("");

    let onChange = (event) =>{
        setTransactionHash(event.target.value);
        console.log(transactionHash);
    }

    let submit = async (event) =>{
        event.preventDefault();
        console.log(transactionHash);
        let data = {transactionHash: transactionHash}
        try{
            let response = await axios.post(`http://localhost:9000/api/bitcoin/transaction/`, data);
            console.log(response.data);
            if (response.data.hash == transactionHash){
                let transactionOutput = document.getElementById("transactionOutput");
                transactionOutput.innerHTML= `Transaction with hash ${transactionHash} exists!!!`;
            }
            else{
                let transactionOutput = document.getElementById("transactionOutput");
                transactionOutput.innerHTML=response.data;
            }
        }
        catch(error){
            console.error(error);
        }
    }

    return (
        <>
            <div className='container mt-5'>
                <h1>Transaction Value</h1>

                <form>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Enter the Alphanumeric String</label>
                        <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={onChange} />
                    </div>

                    <div className='d-flex justify-content-center'>
                        <button type="submit" className="btn btn-primary" onClick={submit}>Submit</button>
                    </div>
                </form>

                <div className="mt-3 mb-3 container" id='transactionOutput'>

                </div>

            </div>

        </>
    )
}

export default Transaction
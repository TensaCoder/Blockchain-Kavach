import React, { useState} from 'react';
import axios from "axios";

const AccountAddress = () => {
    const [accountAddress, setAccountAddress] = useState("");

    let onChange = (event) =>{
        setAccountAddress(event.target.value);
        console.log(accountAddress);
    }

    let submit = async (event) =>{
        event.preventDefault();
        console.log(accountAddress);
        let data = {accountAddress: accountAddress}
        try{
            let response = await axios.post(`http://localhost:9000/api/bitcoin/address/`, data);
            console.log(response.data);
            if (response.data.address == accountAddress){
                let addressOutput = document.getElementById("addressOutput");
                addressOutput.innerHTML= `Account with address ${accountAddress} exists!!!`;
            }
            else{
                let addressOutput = document.getElementById("addressOutput");
                addressOutput.innerHTML=response.data;
            }
        }
        catch(error){
            console.error(error);
        }
    }

    return (
        <>
            <div className='container mt-5'>
                <h1>Account Address Value</h1>

                <form>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Enter the Alphanumeric String</label>
                        <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={onChange} />
                    </div>

                    <div className='d-flex justify-content-center'>
                        <button type="submit" className="btn btn-primary" onClick={submit}>Submit</button>
                    </div>
                </form>

                <div className="mt-3 mb-3 container" id='addressOutput'>

                </div>

            </div>

        </>
    )
}

export default AccountAddress
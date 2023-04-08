import React, { useState, useEffect } from 'react'
import axios from "axios";

const Block = () => {

    const [blockHash, setBlockHash] = useState("");

    let onChange = (event) =>{
        setBlockHash(event.target.value);
        console.log(blockHash);
    }

    let submit = async (event) =>{
        event.preventDefault();
        console.log(blockHash);
        let data = {blockHash: blockHash}
        try{
            let response = await axios.post(`http://localhost:9000/api/bitcoin/block/`, data);
            console.log(response.data);
            if (response.data.hash == blockHash){
                let blockOutput = document.getElementById("blockOutput");
                blockOutput.innerHTML= `Block with hash ${blockHash} exists!!!`;
            }
            else{
                let blockOutput = document.getElementById("blockOutput");
                blockOutput.innerHTML=response.data;
            }
        }
        catch(error){
            console.error(error);
        }
    }

    return (
        <>
            <div className='container mt-5'>
                <h1>Block Value</h1>

                <form>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Enter the Alphanumeric String</label>
                        <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={onChange} />
                    </div>

                    <div className='d-flex justify-content-center'>
                        <button type="submit" className="btn btn-primary" onClick={submit}>Submit</button>
                    </div>
                </form>

                <div className="mt-3" id="blockOutput">
                </div>

            </div>

        </>
    )
}

export default Block
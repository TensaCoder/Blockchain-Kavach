import React, { useState, useEffect } from 'react'
import axios from "axios";

const Bitcoin = () => {

    const [blockHash, setBlockHash] = useState('00000000000000000001f7fb2f26d3a4dc41597a724211f3ffa31a6ef5b5808f');
    

    let onChange = (event) =>{
        setBlockHash(event.target.value);
        console.log(blockHash);
    }

    let submit = async (event) =>{
        event.preventDefault();
        console.log(blockHash);
        try{
            let response = await axios.get(`http://localhost:9000/api/bitcoin/block/`, { blockHash: blockHash });
            console.log(response.data);
            if (response.data === "Item not found or argument invalid"){
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


            <div className='container mt-4'>
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

                <div className="mb-3">
                    {/* <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" /> */}
                    <div id="blockOutput">

                    </div>
                </div>

            </div>

        </>
    )
}

export default Bitcoin
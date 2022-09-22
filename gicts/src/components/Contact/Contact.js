import { useState } from "react";
const Contact = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")
    const HandleSubmit = (e)=>{
        // console.log("mess");
        e.preventDefault();
        const conta = {name, message,email}
        fetch("http://localhost:9000/messages", {
            method: "POST",
            headers: {"content-type":"application/json"},
            body:JSON.stringify(conta)
        })
        .then(()=>{
            console.log("new message added");
            
        })
    }
    return (
        <div className="cont" id="contact">
            <h1 className="con" id = "topics">Contact Us</h1>
            <form onSubmit={HandleSubmit}>
                <label>Name</label>
                <input
                    type = "text"
                    required
                    value ={name}
                    onChange= {(e)=>setName(e.target.value)}
                />
                <label>Email</label>
                <input
                    type = "text"
                    required
                    value ={email}
                    onChange= {(e)=>setEmail(e.target.value)}
                />
                <label>Message</label>
                <textarea 
                required
                value= {message}
                onChange = {(e)=>setMessage(e.target.value)}
                ></textarea>
                <button className="send" type="submit">Send</button>
            </form>
            
        </div>
    );
}

export default Contact;
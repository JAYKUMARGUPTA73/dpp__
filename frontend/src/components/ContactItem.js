import React from 'react'
import './Contact.css';
const ContactItem = (props) =>{
    const {urlp,worker_id, worker_name, mob_no, email } = props.credentials;
    const containerStyle = {
        backgroundImage: `url(${urlp})`, 
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    };
    console.log(containerStyle);
    return (
        <>
        <div className="max-w-sm w-full lg:max-w-full lg:flex ">
                    <div className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden " id='hi' title="Woman holding a mug">
                    </div>
                    <div className="border bg-gray-700/85 border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-pink rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                        <div className="mb-8">
                            <div className="text-white  font-bold text-xl mb-2"> Worker ID {worker_id}</div>
                            <p className="text-white  text-base">
                                {worker_name}
                            </p>
                            <p className="text-white text-base">{mob_no} </p>
                            <p className="text-white  text-base"> {email} </p>
                        </div>
                    </div>
                </div>
                </> 
    )
}
export default ContactItem;
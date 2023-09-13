import React, { useEffect, useState } from 'react';
import admin1 from './Images/admin1.jpg'

export default function ViewVendor() {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch("http://localhost:8080/getallvendor")
            .then(res => res.json())
            .then(data => setData(data))
            .catch(error => console.error('Error:', error));
    }, []);

    const toggleVendorApproval = (v_id) => {
        setData(prevData => prevData.map(v => v.v_id === v_id ? { ...v, v_status: !v.v_status } : v));
    };

    return (
        <div style={{ backgroundImage: `url(${admin1})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center', minHeight: '93vh' }}>
            <div className="container-fluid mt-100 col-8 border bg-white">
                <h2 className="text-center">
                    <b>Vendor Details</b>
                </h2>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th className="text-center">Vendor Id</th>
                            <th className="text-center">Name</th>
                            <th className="text-center">Email</th>
                            <th className="text-center">Contact</th>
                            <th className="text-center">Address</th>
                            <th className="text-center">Shop_Licence_Id</th>
                            <th className="text-center">Vendor Approve</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map(v => (
                            <tr key={v.v_id}>
                                <td className="text-center">{v.v_id}</td>
                                <td className="text-center">{v.v_name}</td>
                                <td className="text-center">{v.email}</td>
                                <td className="text-center">{v.contact}</td>
                                <td className="text-center">{v.address}</td>
                                <td className="text-center">{v.shop_licence_id}</td>
                                <td className="text-center">
                                    <label className="switch">
                                        <input
                                            type="checkbox"
                                            checked={v.v_status}
                                            onChange={() => toggleVendorApproval(v.v_id)}
                                        />
                                        <span className="slider round"></span>
                                    </label>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
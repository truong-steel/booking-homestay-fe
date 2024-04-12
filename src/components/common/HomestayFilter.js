import React, { useState } from "react";

export const HomestayFilter = ({ data, setFilterData }) => {
    const [filter, setFilter] = useState("");
    const handleSelectChange = (e) => {
        const selectHomestayType = e.target.value;
        setFilter(selectHomestayType);
        const filterHomestays = data.filter((room) =>
            room.roomType.toLowerCase().includes(selectHomestayType.toLowerCase()))
        setFilterData(filterHomestays)
    };

    const clearFilter = () => {
        setFilter("")
        setFilterData(data)
    }

    const homestayTypes = ["", ...new Set(data.map((homestay) => homestay.homestayType))]

    return (
    <div className="input-group mb-3">
        <span className="input-group-text" id="homestay-type">All Homestays</span>
        <select className="form-select" value={filter} onChange={handleSelectChange}>
            <option value={""}>Select a homestay type...</option>
            {homestayTypes.map((type, index) => (
                <option key={index} value={String(type)}>{String(type)}</option>
            ))}
        </select>
        <button className="btn btn-hotel" type="button" onClick={clearFilter}>Clear</button>
    </div>
    );
};
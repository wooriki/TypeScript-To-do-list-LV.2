import React from "react";
import { Link } from "react-router-dom";

interface DetailPageProps {
    id: number;
    title: string;
    detail: string;
}

const DetailPage: React.FC<DetailPageProps> = ({ id, title, detail }) => {
    return (
        <div>
            <h1>Detail Page</h1>
            <h2>ID: {id}</h2>
            <h3>Title: {title}</h3>
            <p>Detail: {detail}</p>
            <Link to="/">Home</Link>
        </div>
    );
};

export default DetailPage;

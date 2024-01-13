import React from "react";

const Footer = () => {
    return (
        <footer className="flex flex-col justify-between items-center text-xs border-t-1 border-gray-400 p-2">
            <h1 className="">Stream Parties</h1>
            <ul className="list-none flex justify-between items-center gap-3">
                <li>Provide By <span className="text-blue-500">Spark Team</span> @ 2024</li>
            </ul>
        </footer>
    );
}

export default Footer;

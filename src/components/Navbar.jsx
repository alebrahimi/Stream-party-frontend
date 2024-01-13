import React from "react";
import Link from "next/link"
import ProfileMenu from "./profileMenu";
function Navbar() {
    const token = true
    return (
        <header className="flex justify-between items-center">
            <h1 className="text-2xl">Stream Parties</h1>
            {
                token ?
                    <ProfileMenu /> :
                    <ul className="list-none flex justify-between items-center gap-3">
                        <Link href="signIn" className="border border-slate-300 text-slate-300 px-2 py-1 rounded hover:bg-slate-700 focus-within:bg-slate-700 outline-none" ><li>SignIn</li></Link>
                        <Link href="signUp" className="border border-slate-300 text-slate-300 px-2 py-1 rounded hover:bg-slate-700 focus-within:bg-slate-700 outline-none" ><li>SignUp</li></Link>
                    </ul>
            }
        </header>
    );
}

export default Navbar;

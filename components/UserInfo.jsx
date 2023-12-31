"use client";

import Image from "next/image";
import SignInBtn from "./SignInBtn";
import { useSession } from "next-auth/react";

export default function UserInfo() {
    const { status, data: session } = useSession();

    if( status === "authenticated") {
        return (
            <div className="shadow-xl p-8 rounded-md flex flex-col gap-3 bg-indigo-200">
                <Image 
                    className="rounded-full" 
                    src={session?.user?.image} 
                    width={60} 
                    height={60}
                    alt="User profile image"
                />
                <div>Name: <span className="font-bold text-indigo-600">{session?.user?.name}</span></div>
                <div>Email: <span className="font-bold text-indigo-600">{session?.user?.email}</span></div>
            </div>
        )
    } else {
        return (
            <div>
                <SignInBtn />
            </div>
        )
    }
}
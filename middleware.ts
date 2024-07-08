import { NextRequest, NextResponse } from "next/server";
import VerifyUser from "./lib/verifyuser";

export async  function middleware(request : NextRequest){
    const token = request.cookies.get("authToken")?.value;
    const isLoggedin = await VerifyUser(token);

    if(!isLoggedin){
        const redirectUrl = new URL('/auth/signin', request.nextUrl.origin);
        redirectUrl.searchParams.append('redirect',request.nextUrl.pathname);
        return NextResponse.redirect(redirectUrl)
    }
    return NextResponse.next();
}

export const config = {
    matcher : ["/contest/1001"]
}
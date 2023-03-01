/* eslint-disable react/display-name */
import React from "react";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import jwt_decode from "jwt-decode";

const withAuth = (Components) => {
    return (props) => {
        const router = useRouter();
        const token = useSelector((state) => state.auth.token);
        React.useEffect(() => {
            if (!token) {
                router.push("/login")
            } else {
                router.push("/home")
            }
        }, [token])
        return <Components {...props} />
    }
}

export default withAuth
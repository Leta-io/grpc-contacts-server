import {sendUnaryData, ServerUnaryCall} from "@grpc/grpc-js";
import {auth} from "../protos/auth";
import {generateAccessToken, generateRefreshToken} from "../utils/auth";
import LoginRequest = auth.LoginRequest;
import LoginResponse = auth.LoginResponse;

// Mock user data for authentication
const USERS = {
    'admin': {password: 'admin'},
    'staff': {password: 'staff'},
};
export const login = (call: ServerUnaryCall<LoginRequest, LoginResponse>, callback: sendUnaryData<LoginResponse>) => {
    const request = call.request
    const response = new LoginResponse();

    if (USERS[request.email] && USERS[request.email].password === request.password) {
        const email = request.email;
        const accessToken = generateAccessToken({email});
        const refreshToken = generateRefreshToken({email});
        response.jwtToken = accessToken;
        response.refreshToken = refreshToken;
        response.status = 200;
        callback(null, response)
    } else {
        const error = "Unauthorized. Check credentials and try again."
        response.error = error;
        response.status = 401;
        callback(new Error(error), response)
    }
}
/* eslint-disable @typescript-eslint/no-non-null-assertion */
import {sign, verify} from "jsonwebtoken";
import {User} from "../entity/User";
import {Response, Request} from "express";

/**
 * Create a access token for the passed user
 * @param   {User} user
 * @return  {string}
 */
export const createAccessToken = (user: User): string => {
    return sign({userId: user.id}, process.env.ACCESS_TOKEN_SECRET!, {expiresIn: "15m"});
}

/**
 * Create a refresh token for the passed user
 * @param   {User} user
 * @return  {string}
 */
export const createRefreshToken = (user: User): string => {
    return sign(
        {userId: user.id, tokenVersion: user.tokenVersion},
        process.env.REFRESH_TOKEN_SECRET!,
        {expiresIn: "7d"}
    );
}

/**
 * Set refresh token as a cookie
 * @param   {Response} res
 * @param   {string} token
 * @return  {void}
 */
export const sendRefreshToken = (res: Response, token: string): void => {
    const date = new Date();
    date.setDate(date.getDate() + 7);

    res.cookie(
        "jid",
        token,
        {
            httpOnly: true,
            expires: date,
        }
    );
}

/**
 * Create a access token from a refresh token
 * @param  {Request} req
 * @param  {Response} res
 * @return {Promise<Response>}
 */
export const createAccessTokenFromRefreshToken = async (req: Request, res: Response): Promise<Response> => {
    const token = req.cookies.jid;

    if (!token) {
        return sendEmptyTokenResponse(res);
    }

    let payload: any = null;
    try {
        payload = verify(token, process.env.REFRESH_TOKEN_SECRET!);
    } catch (e) {
        return sendEmptyTokenResponse(res);
    }

    const user = await User.findOne({id: payload.userId});

    if (!user || user.tokenVersion !== payload.tokenVersion) {
        return sendEmptyTokenResponse(res);
    }

    sendRefreshToken(res, createRefreshToken(user));

    return res.send({ok: true, accessToken: createAccessToken(user)});
}

/**
 * Send an empty token response
 * @param {Response}
 * @return {Response}
 */
export const sendEmptyTokenResponse = (res: Response): Response => {
    return res.send({ok: false, accessToken: ""});
}

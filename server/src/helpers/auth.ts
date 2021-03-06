/* eslint-disable @typescript-eslint/no-non-null-assertion */
import {sign, verify} from "jsonwebtoken";
import {User} from "../entity/User";
import {Response, Request} from "express";
import { getRepository } from "typeorm";

/**
 * Create a access token for the passed user
 * @param   {User} user
 * @return  {string}
 */
export const createAccessToken = (user: User): string => {
    return sign({userId: user.id, organizations: user.organizations, admin: user.admin}, process.env.ACCESS_TOKEN_SECRET!, {expiresIn: "15m"});
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

    const user = await getRepository(User)
        .createQueryBuilder("user")
        .where({id: payload.userId})
        .leftJoinAndSelect("user.organizations", "organizations")
        .leftJoinAndSelect("user.admin", "admin")
        .getOne();

    if (!user || user.tokenVersion !== payload.tokenVersion) {
        return sendEmptyTokenResponse(res);
    }

    sendRefreshToken(res, createRefreshToken(user));

    return res.send({ok: true, accessToken: createAccessToken(user), admin: user.admin});
}

/**
 * Send an empty token response
 * @param {Response}
 * @return {Response}
 */
export const sendEmptyTokenResponse = (res: Response): Response => {
    return res.send({ok: false, accessToken: ""});
}

/**
 * Remove Refresh Token
 * @param {Response}
 * @return {Response}
 */

export const removeRefreshToken = (_req: Request, res: Response): Response => {
    res.clearCookie("jid",  {httpOnly: true,});
    return res.send({ok: true, accessToken: ""});
}
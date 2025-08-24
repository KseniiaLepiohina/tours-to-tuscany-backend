// //validation token via JWT Guard for Login

// import { Injectable } from "@nestjs/common";
// import { PassportStrategy } from "@nestjs/passport";
// import JwksRsa from "jwks-rsa";
// import { Strategy } from "passport-google-oauth20";
// import { ExtractJwt } from "passport-jwt";

// @Injectable()
// export class Auth0Strategy extends PassportStrategy(Strategy) {
//   constructor() {
//     super({
//       secret:JwksRsa.expressJwtSecret({
//         cache:true,
//         rateLimit:true,
//         jwksRequestsPerMinute:5,
//       }),
//       jwtFromRequest:ExtractJwt.fromAuthHeaderAsBearerToken(),
//       audience:'',
//       issuer:`http:localhost:3000`,
//       algoritms:['RS256'],
//     });
//   }
//   async validate(payload: any) {
//     return payload;
//   }
// }
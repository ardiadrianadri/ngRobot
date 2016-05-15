import {Inject} from "@angular/core";
import {Config} from "../config/config";
import {NativeWebSockets} from "nativescript-websockets";
import {Rails} from "./rails";

@Inject()
export class RailsService {
    _rail:Rails;
    
}
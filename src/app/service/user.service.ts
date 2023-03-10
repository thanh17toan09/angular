import { Injectable } from "@angular/core";
import { IUser } from "../interface/user.interface";

@Injectable ({providedIn:'root'})

export class APIUserService {
    constructor(
    ) { }

    _list_user: IUser[] = [
        {
            username: 'admin',
            password: 'admin'
        },
        {
            username: 'user1',
            password: 'user1'
        },
        {
            username: 'user2',
            password: 'user2'
        },
        {
            username: 'user3',
            password: 'user3'
        },
        {
            username: 'user4',
            password: 'user4'
        },
        {
            username: 'user5',
            password: 'user5'
        }
    ];

    getListUser(): IUser[] {
        return this._list_user;
    }

    getListFriend(user:IUser): IUser[] {
        return this._list_user.filter(item => item.username !== user.username)
    }

    checkUser(user: IUser): boolean{
        let check = false;
        this._list_user.forEach((item)=>{
            if(item.username === user.username && item.password  ===user.password){
                check=true;
            }
        })
        return check;
    }
}
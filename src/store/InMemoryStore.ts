import { Store } from './Store';

export interface Room {
    roomId:string;
    chats:Chat[]
}
type UserId = string;
export interface Chat {
    UserId:UserId;
    name:string;
    message:string;
    upvotes:UserId;

}
export class InMemoryStore implements Store {
    private store = new Map<string,Room>;
    constructor(){
        this.store = new Map<string,Room>()
    }
initRoom(){
    
}
getChats(room:string,limit:number,offset:number){

}
getChat(room:string,limit:number,offset:number){

}
upvote(room:string,chatId:string){

}
}
type UserId = string;
interface Chat {
    UserId:UserId;
    name:string;
    message:string;
    upvotes:UserId;

}
export abstract class Store {
    constructor(){

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
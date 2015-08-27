export default function doge (){
    return {
        count: 0,
        click (times){
            this.count += times || 1;
        }
    };
}
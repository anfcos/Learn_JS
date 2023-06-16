class Actor{
    
    constructor(props)
    {
        this.name = props.name;
        this.age = props.age;       
    }
    say(){
        console.log("Я сильнее!")
    }
}
class Hiro extends Actor{
    awards = [];
    gold=[];
    constructor(props){
        super(props);

    }
    log(){
        console.log(this.awards);
    }
    get zp(){
        return this.gold;
    }
    get award(){
        return this.awards;
    }

    set award(value){
        this.awards.push(value);
    }
    set zp(value){
        this.gold.push(value);
    }
    

    sssum(){        
        let res = this.gold.reduce((sum, current) => sum + current, 0);             
        console.log(res);
    }

}
class AntiHiro extends Actor{
    #weapon = [];
    constructor(props){
        super(props);
        this.home = props.home;

    }
    log(){
        console.log(this.arsenal);
    }
    set arsenal(value){
        this.#weapon.push(value);
    }
    get arsenal(){
        return this.#weapon.join(", ");
    }

}
Iliya = new Hiro({name:"Iliya",age:33});

console.log(Iliya)
Iliya.award = "За победу над змеем";
Iliya.award = "За победу над соловьем";
Iliya.zp = 50;
Iliya.zp = 15;
Iliya.log();
Yaga = new AntiHiro({name:"Yaga", age:105, home: "Izbushka"});
console.log(Yaga);
Yaga.arsenal = "Stupa";
Yaga.arsenal = "Zelie";
Yaga.log();

console.log(Iliya.zp)
Iliya.sssum();
Iliya.say();
Yaga.say();

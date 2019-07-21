class Fighter {
    constructor({name, damage, hp, agility}) {
        let fighterName = name;
        let fighterDamage = damage;
        let fighterHp = hp;
        let fighterAgility = agility;
        let maxHp = hp;
        this.win = 0;
        this.lose = 0;
        this.getName = () => fighterName;
        this.getDamage = () => fighterDamage;
        this.getAgility = () => fighterAgility;
        this.getHealth = () => fighterHp;

        this.attack = (defender) => {
            const accuracy = 100;
            let fighterAccuracy = Math.random() * accuracy;
            if(fighterAccuracy > defender.getAgility()){
                defender.dealDamage(this.getDamage());
                console.log(this.getName() + ' make ' + this.getDamage() + ' damage to ' + defender.getName());
            } else{
                console.log(this.getName() +' attack missed');
            }
        } 

        this.logCombatHistory = () => {
            console.log('Name: ' + this.getName() + ', Wins: ' + this.win + ', Losses: ' + this.lose);
        }

        this.heal = (heal) => {
            if (maxHp > fighterHp + heal) {
                fighterHp += heal;
                console.log(this.getName() + ' was cured by ' + heal + ', now his health is: ' + this.getHealth());
            } else {
                fighterHp = maxHp;
                console.log(this.getName() + ' was cured to maximum, now his health is: ' + this.getHealth());
            }
        }

        this.dealDamage = (damage) => {
            fighterHp -= damage
            if(fighterHp < 0) {
                fighterHp = 0;
            }
        }

        this.addWin = () => this.win++;
        this.addLoss = () => this.lose++;
    }
}

let battle = (attacker, defender) => {
    if(defender.getHealth() === 0){
        console.log(defender.getName() + ' is dead and can\'t fight');
    } else if(attacker.getHealth() === 0){
        console.log(attacker.getName() + ' is dead and can\'t fight');
    } else {
        do {
            attacker.attack(defender);
            if(defender.getHealth() === 0){
                attacker.addWin();
                defender.addLoss();

                return;
            }

            defender.attack(attacker);
            if(attacker.getHealth() === 0){
                defender.addWin();
                attacker.addLoss();

                return;
            } 
        } while(defender.getHealth() * attacker.getHealth());
    }
}
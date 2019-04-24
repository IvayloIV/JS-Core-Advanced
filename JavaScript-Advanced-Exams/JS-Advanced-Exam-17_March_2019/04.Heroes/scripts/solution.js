function solve() {
    const validKingdom = ["CASTLE", "DUNGEON", "FORTRESS", "INFERNO",
        "NECROPOLIS", "RAMPART", "STRONGHOLD", "TOWER", "CONFLUX"];
    const kingdomSequence = ["TANKS", "FIGHTERS", "MAGES"];
    const stats = {
        MAGES: { attack: 70, defenses: 30 },
        FIGHTERS: { attack: 50, defenses: 50 },
        TANKS: { attack: 20, defenses: 80 }
    };

    const kingdom = $('#kingdom');
    const kingdomInput = kingdom.find('div input:first-of-type');
    const kingInput = kingdom.find('div input:last-of-type');
    const map = $('#map');
    const rebuildKingdoms = {};
	
    const characters = $('#characters');
    const characterInput = characters.find('div:last-of-type input:first-of-type');
    const kingdomInputCharacter = characters.find('div:last-of-type input:last-of-type');
	
    const actions = $('#actions');
    const attackerInput = actions.find('input:first-of-type');
    const defenderInput = actions.find('input:last-of-type');

    kingdom.find('button').on('click', rebuildKingdom);
    characters.find('button').on('click', joinKingdom);
    actions.find('button').on('click', startWar);

    function startWar() {
        const attackerUpper = attackerInput.val().toUpperCase();
        const defenderUpper = defenderInput.val().toUpperCase();

        if (!rebuildKingdoms.hasOwnProperty(attackerUpper) || !rebuildKingdoms.hasOwnProperty(defenderUpper)) {
            return;
        }

        const attacker = rebuildKingdoms[attackerUpper];
        const defender = rebuildKingdoms[defenderUpper];

        const attackerPoints = attacker.find('fieldset p')
            .toArray()
            .map(a => $(a).text().split(' - '))
            .reduce((a, c) => {
                const [name, pointsStr] = c;
                return a + stats[name].attack * Number(pointsStr);
            }, 0);
			
        const defenderPoints = defender.find('fieldset p')
            .toArray()
            .map(a => $(a).text().split(' - '))
            .reduce((a, c) => {
                const [name, pointsStr] = c;
                return a + stats[name].defenses * Number(pointsStr);
            }, 0);
			
        if (attackerPoints > defenderPoints) {
            defender.find('h2').text(attacker.find('h2').text());
        }
		
        attackerInput.val('');
        defenderInput.val('');
    }

    function joinKingdom() {
        const checkedRadio = characters.find('input[name="characterType"]:checked')[0];
		
        const kingdomUpper = kingdomInputCharacter.val().toUpperCase();
        if (!checkedRadio || characterInput.val().length < 2 || !rebuildKingdoms.hasOwnProperty(kingdomUpper)) {
            return;
        }

        const checkedVal = $(checkedRadio).val();
        const currentKingdom = rebuildKingdoms[kingdomUpper][0];
        const indexType = kingdomSequence.indexOf((checkedVal.toUpperCase() + "S")) + 1;
        const typeP = $(currentKingdom).find(`fieldset p:nth-of-type(${indexType})`);

        const tokens = typeP.text().split(' - ');
        typeP.text(tokens[0] + ' - ' + (Number(tokens[1]) + 1));

        let armyOutput = $(currentKingdom).find('.armyOutput').text();
        $(currentKingdom).find('.armyOutput').text(armyOutput + `${characterInput.val()} `);

        characterInput.val('');
        kingdomInputCharacter.val('');
        $(checkedRadio).prop('checked', false);
    }

    function rebuildKingdom() {
        const kingdomNameUpper = kingdomInput.val().toUpperCase();
        if (kingInput.val().length < 2 || validKingdom.indexOf(kingdomNameUpper) === -1) {
            return;
        }

        const currentKingdom = map.find(`#${kingdomNameUpper.toLowerCase()}`);
        currentKingdom.append($('<h1>').text(kingdomNameUpper))
            .append($('<div>').addClass('castle'))
            .append($('<h2>').text(kingInput.val().toUpperCase()))
            .append($('<fieldset>')
                .append($('<legend>').text('Army'))
                .append($('<p>').text('TANKS - 0'))
                .append($('<p>').text('FIGHTERS - 0'))
                .append($('<p>').text('MAGES - 0'))
                .append($('<div>').addClass('armyOutput')));
				
        rebuildKingdoms[kingdomNameUpper] = currentKingdom;
						
        currentKingdom.css('display', 'inline-block');
        kingInput.val('');
        kingdomInput.val('');
    }
}
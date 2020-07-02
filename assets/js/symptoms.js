const SYMPTOMS = getSymptoms();

const el = document.getElementById('disease-selector');
if (el) {
    fillSymptoms(SYMPTOMS, el);
}

function fillSymptoms(symptoms, target) {
    for (let s in symptoms) {
        let div = document.createElement('div');
        div.classList.add('switch');

        const id = `symptom-${s}`;

        let swtch = document.createElement('span');
        swtch.id = id;
        swtch.name = `${s}`;
        swtch.classList.add('onoff');

        let label = document.createElement('label');
        label.classList.add('onoff-label')
        label.htmlFor = id;
        label.innerText = `${symptoms[s]}`;

        let inp = document.createElement('input');
        inp.type = 'checkbox';
        inp.id = `chk-${symptoms[s]}`;
        let swt = document.createElement('label');
        swt.htmlFor = inp.id;

        swtch.appendChild(inp);
        swtch.appendChild(swt);
        div.appendChild(label);
        div.appendChild(swtch);

        target.appendChild(div);
    }
}

function getSymptoms() {
    return {
        fatigue: 'Fatiga',
        loseWeigth: 'Perdida de peso',
        anxiety: 'Ansiedad',
        sugarLevel: 'Nivel irregular de azucar',
        visionProblem: 'Problemas de visión',
        obesity: 'Obesidad',
        increasedAppetite: 'Aumento de apetito',
        frequentUrination: 'Orina frecuentemente',
        cough: 'Tos',
        highFever: 'Fiebre alta',
        difficultyInBreathing: 'Dificcultad respiratoria',
        runnyNose: 'Mucosidad',
        headache: 'Dolor de cabeza',
        chestPain: 'Dolor de pecho',
        dizziness: 'Mareo',
        lossOfBalance: 'Perdida de balance',
        lossOfConcentration: 'Perdidad de concentración',
        acidity: 'Acidez',
        indigestion: 'Indigestión',
        irritability: 'Irritabilidad',
        depression: 'Depresión',
        neckPain: 'Dolor de cuello',
        painWhenWalking: 'Dolor al caminar',
        weakMuscles: 'Musculos débiles',
        highHeartRate: 'Alta frecuencia cardiaca'
    };
}

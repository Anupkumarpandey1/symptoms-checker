// Array of symptoms and their possible diseases
const symptomDiseaseMapping = [
    { symptom: 'fever', diseases: ['flu', 'COVID-19', 'malaria'] },
    { symptom: 'cough', diseases: ['flu', 'cold', 'COVID-19'] },
    { symptom: 'headache', diseases: ['migraine', 'tension headache', 'flu'] },
    { symptom: 'sore throat', diseases: ['cold', 'flu', 'strep throat'] },
    { symptom: 'nausea', diseases: ['gastroenteritis', 'food poisoning'] },
    { symptom: 'fatigue', diseases: ['anemia', 'depression'] },
    { symptom: 'chest pain', diseases: ['heart attack', 'angina'] },
    // Add more symptoms and corresponding diseases as needed
];

document.getElementById('check-button').addEventListener('click', () => {
    const input = document.getElementById('symptom-input').value;
    const symptoms = input.split(',').map(s => s.trim().toLowerCase());
    const possibleDiseases = new Set();

    symptoms.forEach(symptom => {
        const match = symptomDiseaseMapping.find(s => s.symptom === symptom);
        if (match) {
            match.diseases.forEach(disease => possibleDiseases.add(disease));
        }
    });

    const outputDiv = document.getElementById('diagnosis-output');
    if (possibleDiseases.size > 0) {
        outputDiv.innerHTML = `Possible diagnoses: ${Array.from(possibleDiseases).join(', ')}`;
    } else {
        outputDiv.innerHTML = 'No possible diagnoses found. Please try different symptoms.';
    }
});

// script.js
function suggestMedicine() {
  // Get the input value from the text box
  const issue = document.getElementById('issue').value.toLowerCase();
  
  // Define a list of common issues and corresponding medicines
  const medicineSuggestions = {
      'headache': 'Ibuprofen, Acetaminophen, Aspirin, Naproxen',
      'cold': 'Pseudoephedrine, Diphenhydramine, Phenylephrine, Chlorpheniramine',
      'fever': 'Paracetamol, Ibuprofen, Aspirin',
      'cough': 'Dextromethorphan, Guaifenesin, Bromhexine, Codeine',
      'allergy': 'Loratadine, Cetirizine, Fexofenadine, Diphenhydramine',
      'stomach ache': 'Pepto-Bismol, Antacids, Simethicone, Ranitidine',
      'sore throat': 'Lozenges, Throat spray, Ibuprofen, Paracetamol',
      'indigestion': 'Antacids, Ranitidine, Omeprazole, Bismuth subsalicylate',
      'nausea': 'Dimenhydrinate, Meclizine, Ondansetron, Metoclopramide',
      'diarrhea': 'Loperamide, Bismuth subsalicylate, Oral rehydration salts',
      'constipation': 'Laxatives, Psyllium husk, Bisacodyl, Docusate sodium',
      'muscle pain': 'Ibuprofen, Naproxen, Acetaminophen, Aspirin',
      'joint pain': 'Ibuprofen, Naproxen, Diclofenac, Paracetamol',
      'skin rash': 'Hydrocortisone cream, Calamine lotion, Diphenhydramine cream',
      'sunburn': 'Aloe vera gel, Ibuprofen, Hydrocortisone cream, Cool compresses',
      'acid reflux': 'Omeprazole, Esomeprazole, Ranitidine, Antacids',
      'earache': 'Ibuprofen, Acetaminophen, Ear drops with benzocaine',
      'toothache': 'Ibuprofen, Acetaminophen, Orajel, Clove oil',
      'back pain': 'Ibuprofen, Naproxen, Acetaminophen, Muscle relaxants',
      'insomnia': 'Diphenhydramine, Doxylamine, Melatonin, Valerian root',
      'anxiety': 'Lorazepam, Alprazolam, Diazepam, Buspirone',
      'depression': 'Sertraline, Fluoxetine, Citalopram, Escitalopram',
      'high blood pressure': 'Lisinopril, Amlodipine, Hydrochlorothiazide, Losartan',
      'high cholesterol': 'Atorvastatin, Simvastatin, Rosuvastatin, Pravastatin',
      'diabetes': 'Metformin, Insulin, Glipizide, Pioglitazone',
      'asthma': 'Albuterol, Fluticasone, Montelukast, Budesonide',
      'migraine': 'Sumatriptan, Rizatriptan, Eletriptan, Zolmitriptan',
      'menstrual pain': 'Ibuprofen, Naproxen, Acetaminophen, Midol',
      'bloating': 'Simethicone, Activated charcoal, Pepto-Bismol, Digestive enzymes',
      'heartburn': 'Omeprazole, Esomeprazole, Ranitidine, Antacids',
      'motion sickness': 'Dimenhydrinate, Meclizine, Scopolamine, Ginger supplements'
  };

  // Find the corresponding medicine suggestion
  let suggestion = medicineSuggestions[issue];
  
  // Display the suggestion or a default message if no match is found
  const resultElement = document.getElementById('medicineResult');
  if (suggestion) {
      resultElement.textContent = `Suggested medicines: ${suggestion}`;
  } else {
      resultElement.textContent = 'No suggestions found for this issue. Please consult a healthcare professional.';
  }
}

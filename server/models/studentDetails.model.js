const mongoose = require('mongoose');

const presentingComplaintsSchema = new mongoose.Schema({
    hasDysmorphicFeatures: { type: String },
    smallSizedHead: { type: String },
    ableToWalkAndRun: { type: String },
    noAgeAppropriateComprehensionAndSpeechDevelopment: { type: String },
    reachesGraspsAndManipulatesTheObject: { type: String },
    emotionallyAttachedToParentsAndRecognisesAllFamilyMembers: { type: String },
    hasAdequateEyeContactAndSocialSmile: { type: String },
    eatsSelf: { type: String },
    indicatesTheToiletNeeds: { type: String }
});

const historySchema = new mongoose.Schema({
    chromosomalAberrations: { type: String },
    rhIncompatibility: { type: String },
    geneticAberrations: { type: String },
    consanguinity: { type: String },
    threatenedAbortion: { type: String },
    potentiallyHarmfulMedication: { type: String },
    antenatalCheckUps: { type: String },
    significantAccidentsInjury: { type: String },
    infections: { type: String },
    pregnancy: { type: String },
    attemptedAbortion: { type: String },
    nutrition: { type: String },
    psychologicalTrauma: { type: String },
    amnioticFluid: { type: String },
    irradiation: { type: String },
    nicotine: { type: String },
    alcohol: { type: String },
    ageAtConception: { type: String },
    hypertension: { type: String },
    diabetes: { type: String },
    jaundice: { type: String },
    fetalMovement: { type: String },
    bleedingDuringLatePregnancy: { type: String },
    labourDuration: { type: String },
    prolapsedCord: { type: String },
    cordAroundNeck: { type: String },
    multiplePregnancies: { type: String },
    feedingProblem: { type: String },
    convulsion: { type: String },
    colorOfTheBaby: { type: String },
    significantInjury: { type: String },
    deliveryPlace: { type: String },
    term: { type: String },
    deliveryType: { type: String },
    abnormalPresentation: { type: String },
    respiratoryDistress: { type: String },
    deliveryConductedBy: { type: String },
    labourInduction: { type: String },
    birthCry: { type: String },
    separationFromMotherImmediatelyAfterDelivery: { type: String },
    thyroidDysfunctions: { type: String },
    nutritionalDisorders: { type: String },
    significantHeadInjury: { type: String }
});

const familyHistorySchema = new mongoose.Schema({
    typeOfFamily: { type: String },
    mentalRetardation: { type: String },
    genogram: { type: String },
    consanguinity: { type: String },
    seizuresOrConvulsions: { type: String },
    hearingProblems: { type: String },
    speechProblems: { type: String },
    mentalIllness: { type: String },
    autismOrSpectrumDisorder: { type: String },
    visualProblem: { type: String },
    locomotorProblem: { type: String },
    anyFamilyHistoryOfDelayDisabilityDisorderDiseaseDeficiency: { type: String },
    learningDisabilities: { type: String },
    familyInvolvementIn: { type: String },
    positiveIssuesWithNeighborhoodBecauseOfTheClient: { type: String },
    neighborhoodParticipation: { type: String },
    personalNeedsOfTheClient: { type: String },
    visitsToTheFamilyByOthers: { type: String },
    familysVisitsOutside: { type: String },
    playAndLeisureTimeActivities: { type: String },
    educationalActivities: { type: String },
    supportOfExtendedFamily: { type: String },
    negativeIssuesWithNeighborhoodBecauseOfTheClient: { type: String },
    discontinuedSchool: { type: String },
    educationalHistory: { type: String },
    teacherReport: { type: String },
    overallPerformance: { type: String },
    typeOfSchooling: { type: String },
    ifYesReasonForDiscontinuingSchooling: { type: String },
    ageOfAdmissionIntoSchoolInYears: { type: String },
    involvementInPlay: { type: String },
    observesOthersPlaying: { type: String },
    playBehaviour: { type: String },
    periodicity: { type: String },
    ageOfAttainmentOfMenarche: { type: String },
    attainedMenarche: { type: String },
    menstrualHistory: { type: String },
    anySignificantDetails: { type: String },
    vocationalTraining: { type: String },
    occupationalHistory: { type: String },
    employment: { type: String }
});

const developmentHistorySchema = new mongoose.Schema({
    headControl3To5Months: { type: String },
    rolling3To5Months: { type: String },
    independentSitting6To8Months: { type: String },
    crawling6To8Months: { type: String },
    walking11To14Months: { type: String },
    bilateralHoldingOfToys3To6Months: { type: String },
    holdingSmallItemsWithFingerAndThumb6To9Months: { type: String },
    scribblingWithACrayon12To18Months: { type: String },
    babbling4To8Months: { type: String },
    firstWords11To12Months: { type: String },
    twoWordsPhrases18To24Months: { type: String },
    sentences2To3Months: { type: String },
    smilesAtOthers3To4Months: { type: String },
    respondsToName7To12Months: { type: String },
    feedsSelf3To4Years: { type: String },
    cognitive: { type: String },
    motor: { type: String },
    speechAndLanguage: { type: String },
    social: { type: String },
    significantMedicalIllness: { type: String },
    significantSurgicalIllness: { type: String },
    significantPsychologicalIllness: { type: String },
    anyNegativeReactions: { type: String }
});

const stdSchema = new mongoose.Schema({
    regNo: {
        type: String,
        unique: true,
        required: true
    },
    regDate: {
        type: Date,
        required: true
    },
    dob: { type: Date },
    name: { type: String },
    sex: {
        type: String,
        required: true
    },
    information: { type: String },
    education: { type: String },
    refBy: { type: String },
    occupation: { type: String },
    aadharNo: {
        type: Number,
        unique: true,
        required: true,
    },
    paymentType: { type: String },
    mobileNo: { type: Number },
    purposeVisit: { type: String },
    previousConsultationAndTreatment: { type: String },
    ifYesNatureOfConsultations: { type: String },
    treatmentUnderGone: { type: String },
    typeOfTreatment: { type: String },
    therapeutic: { type: String },
    historyOfPresentCondition: { type: [String] },
    presentingComplaints: presentingComplaintsSchema,
    history: historySchema,
    familyHistory: familyHistorySchema,
    developmentHistory: developmentHistorySchema,
});

module.exports = mongoose.model('studentDetail', stdSchema);
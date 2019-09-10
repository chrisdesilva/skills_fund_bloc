import logo from "../images/logo_bloc.jpg" // add school logo to images folder and import here

// ***** BEGIN GENERAL SCHOOL INFO ***** 

export const schoolLogo = logo // go to header.js if height needs adjustment

export const schoolName = "Bloc"

export const schoolURL = 'https://www.bloc.io/' // update with url of school's website

export const headline = "Learn to Code at Bloc" // update headline as appropriate

export const leadContent = {
    header: "Your last step on the path toward changing your career",
    paragraph: `${schoolName} offers structured, online training programs in software development to fit busy schedules. ${schoolName} partners with Skills Fund to offer tuition financing so more students like you can access their program.`
}

export const threeStepCardText = {
    step1: "",
    step2: {
        header: "select your program",
        text: "Choose between the Designer Track and Part-Time Web Developer Track."
    },
    step3: `You'll be on your way to an exciting career in tech as part of ${schoolName}'s powerful network.`
}

export const netlifyFormName = 'bloc_contact'

export const GATracking = 'UA-68312423-1'

// ***** END GENERAL SCHOOL INFO ***** 


// ***** BEGIN LOAN APP AND CALC INFO ***** 

export const programLoanInfo = [ // update with program names and corresponding loan URLs with market segment code from Master Loan Parameters
    {
        name: "Designer Track",
        url: "https://sf.privateloan.studentloan.org/external/LoanApplication.do?lenderCode=SFBLDT17",
        loanInfo: { 
            maxLoanAmt: 15000,
            loanTerm36: true,
            loanTerm60: true,
            '0': { 
                k: 10, 
                apr36: 10.82, 
                apr60: 12.36
            },
            '1': {
                apr36: 11.69,
                apr60: 12.71
            }
        }
    },
    {
        name: "Part-Time Web Developer Track",
        url: "https://sf.privateloan.studentloan.org/external/LoanApplication.do?lenderCode=SKBLWD17",
        loanInfo: { 
            maxLoanAmt: 15000,
            loanTerm36: true,
            loanTerm60: true,
            '0': { 
                k: 10, 
                apr36: 10.82, 
                apr60: 12.36
            },
            '1': {
                apr36: 11.69,
                apr60: 12.71
            }
        }
    }
]


export const defaultLoanAmount = 10000
export const placeholder = '$10,000'
export const interestRates = {
    ir36: 8.99,
    ir60: 10.99
}

export const hubspotFormId = "0d65163c-a532-41d1-a0ba-c63122440ad1" // create Hubspot form, get form id after publishing

export const selectAProgram = "select_a_bloc_program" // update school name to match form field on Hubspot, *** change to "program_name" if only one program ***"

// ***** BEGIN LOAN CALC TEXT INFO *****
export const programMaxText = "Choose the loan amount that works best for you. Borrow up to $15,000 for Bloc's Designer Track tuition or Part-Time Web Developer Track tuition."

export const paymentTable = {
    headers: ["Program", "Tuition", "Cost of Living", "Max Total"],
    data: [
        {
            name: "PROGRAM 1",
            tuition: "$13,495",
            col: "$6,000",
            max: "$19,495"
        },
        {
            name: "PROGRAM 2",
            tuition: "$16,495",
            col: "$6,000",
            max: "$22,495"
        },
        {
            name: "PROGRAM 3",
            tuition: "$13,495",
            col: "--",
            max: "$13,495"
        },
    ],
    show: false
}

// ***** END LOAN CALC TEXT INFO *****

// ***** END LOAN APP AND CALC INFO ***** 


// ***** BEGIN TERMS AND FAQ INFO *****

export const schoolInfo = { // term details section
    interestRate36: '8.99%',
    interestRate60: '10.99%',
    APRRange36: '10.82 - 11.69%',
    APRRange60: '12.36 - 12.71%',
    interestOnly: [{
        programName: '',
        APR36: '11.16%',
        financeCharge36: '$2,683.21',
        IOPayment36: '$77.91',
        FullMonthlyPayment36: '$330.67',
        APR60: '12.36%',
        financeCharge60: '$4,516.63',
        IOPayment60: '$95.25',
        FullMonthlyPayment60: '$226.07',
        LoanExampleAmt: '$10,000',
        LoanExampleOFeeAmt: '$400',
        LoanExampleAmtPlusOFee: '$10,400',
        programLength: '8' // program length in months
    }],
    immediateRepayment: [{ 
        programName: '',
        APR36: '11.69%',
        financeCharge36: '$1,904.08',
        FullMonthlyPayment36: '$330.67',
        APR60: '12.71%',
        financeCharge60: '$3,564.16',
        FullMonthlyPayment60: '$226.07',
        LoanExampleAmt: '$10,000',
        LoanExampleOFeeAmt: '$400',
        LoanExampleAmtPlusOFee: '$10,400',
    }]
}

export const faq = {
    costOfLiving: false, // true if at least one program has cost of living included
    costOfLivingPrograms: 'Program1 and Program2', // leave as empty string is cost of living availability is the same across all programs
    multCostOfLivingPrograms: false, // true if costOfLivingPrograms string has more than one program
    interestOnly: true, // true if interest-only payments are an option
    immediateRepayment: true, // true if immediate repayment is an option
    multipleLoanLengths: true, // true if 36 and 60 month options are both available
    multipleLoanTypes: true, // true if both IR and IO are available
    multiPrograms: true, // only true if there are multiple programs
    origFee: 0.04,

    // interest payment FAQ info
    interestRate36: '8.99%',
    interestRate60: '10.99%',
    APR36: '11.16%',
    APR60: '12.36%',
    IOPayment36: '$77.91',
    IOPayment60: '$95.25',

    // max loan amounts by program for faq1
    loanRange: [
        {
            programName: "Bloc's Designer Track",
            maxAmount: "$15,000",
            col: false,
            colAmount: "$6,000"
        },
        {
            programName: "Bloc's Part Time Web Developer Track",
            maxAmount: "$15,000",
            col: false,
            colAmount: "$6,000"
        },
    ]
}

// ***** END TERMS AND FAQ INFO ***** 


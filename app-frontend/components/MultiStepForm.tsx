import React, { useState } from 'react';
import { object, string, number } from 'yup';
import Step from "./Step";

type FormData = {
    firstName: string;
    lastName: string;
    age: number;
    email: string;
    phone: string;
    seat: string;
    food: string;
    allergies: string;
};

const formSchema = object().shape({
    firstName: string()
        .required('First name is a required field')
        .matches(/^[^\d]+$/, 'First name should not contain numbers'),
    lastName: string()
        .required('Last name is a required field')
        .matches(/^[^\d]+$/, 'Last name should not contain numbers'),
    age: number()
        .required('Age is a required field')
        .typeError('Age must be a number')
        .positive('Age should be positive'),
    email: string()
        .required('Email is a required field')
        .email('Email should have correct format'),
    phone: string().required('Phone number is a required field'),
    seat: string().required('Seat is a required field'),
    food: string().required('Food is a required field'),
    allergies: string().required('Allergies is a required field'),
});

const MultiStepForm = () => {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState<FormData>({
        firstName: '',
        lastName: '',
        age: 0,
        email: '',
        phone: '',
        seat: '',
        food: '',
        allergies: '',
    });
    const displayStep = 4;

    const onSubmit = (stepData) => {
        setFormData({ ...formData, ...stepData });
        nextStep();
    };

    const prevStep = () => {
        setStep(step - 1);
    };

    const nextStep = () => {
        setStep(step + 1);
    };

    const renderStep = () => {
        switch (step) {
            case 1:
                return (
                    <>
                        <h2>Step {step}</h2>
                        <Step
                            step={step}
                            fields={["firstName", "lastName", "age"]}
                            fieldLabels={["First Name", "Last Name", "Age"]}
                            globalSchema={formSchema}
                            onSubmit={onSubmit}
                            prevStep={prevStep}
                        />
                    </>
                );
            case 2:
                return (
                    <>
                        <h2>Step {step}</h2>
                        <Step
                            step={step}
                            fields={["email", "phone"]}
                            fieldLabels={["Email", "Phone"]}
                            globalSchema={formSchema}
                            onSubmit={onSubmit}
                            prevStep={prevStep}
                        />
                    </>
                );
            case 3:
                return (
                    <>
                        <h2>Step {step}</h2>
                        <Step
                            step={step}
                            fields={["seat", "food", "allergies"]}
                            fieldLabels={["Seat", "Food", "Allergies"]}
                            globalSchema={formSchema}
                            onSubmit={onSubmit}
                            prevStep={prevStep}
                        />
                    </>
                );
            case displayStep:
                return (
                    <>
                        <h2>Step {step}</h2>
                        <div>
                            <h3>Please check that every information below are correct</h3>
                            <div data-testid="firstName">First Name: {formData['firstName']}</div>
                            <div data-testid="lastName">Last Name: {formData['lastName']}</div>
                            <div data-testid="age">Age: {formData['age']}</div>
                            <div data-testid="email">Email: {formData['email']}</div>
                            <div data-testid="phone">Phone: {formData['phone']}</div>
                            <div data-testid="seat">Seat: {formData['seat']}</div>
                            <div data-testid="food">Food: {formData['food']}</div>
                            <div data-testid="allergies">Allergies: {formData['allergies']}</div>
                        </div>
                        <button type="button" data-testid="back" onClick={prevStep}>
                            Previous
                        </button>
                        <button type="submit" onClick={nextStep}>Submit</button>
                    </>
                );
            case displayStep + 1:
                return (
                    <>
                        <h2>Thank you for your submission!</h2>
                        <button type="button" onClick={() => setStep(1)}>
                            Reset
                        </button>
                    </>
                );
            default:
                return null;
        }
    };

    return (
        <div>{renderStep()}</div>
    );
};

export default MultiStepForm;
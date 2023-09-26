import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

type StepProps = {
    step: number;
    fields: string[];
    fieldLabels: string[];
    globalSchema: any,
    onSubmit: (stepData: any) => void;
    prevStep: () => void;
};

const Step: React.FC<StepProps> = ({
    step,
    fields,
    fieldLabels,
    globalSchema,
    onSubmit,
    prevStep,
}) => {

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(globalSchema.pick(fields)),
    });

    const handleFormSubmit = (data) => {
        onSubmit(data); // Pass the form data to the parent component
    };

    return (
        <form onSubmit={handleSubmit(handleFormSubmit)}>
            {fields.map((field, index) => (
                <>
                    <label>{fieldLabels[index]}</label>
                    <input {...register(field)} data-testid={field} />
                    <p>{errors[field]?.message}</p>
                </>
            ))}
            {step > 1 &&
                <button type="button" data-testid="back" onClick={prevStep}>
                    Back
                </button>
            }
            <button type="submit" data-testid="submit">
                Submit
            </button>
        </form>
    );
};

export default Step;
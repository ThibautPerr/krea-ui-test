import React from 'react';

type StepProps = {
    step: number;
    fields: string[];
    fieldLabels: string[];
    handleSubmit: any;
    register: any;
    errors: any;
    onSubmit: (data: any) => void;
    prevStep: () => void;
};

const Step: React.FC<StepProps> = ({
    step,
    fields,
    fieldLabels,
    handleSubmit,
    register,
    errors,
    onSubmit,
    prevStep,
}) => {

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            {fields.map((field, index) => (
                <div>
                    <label>{fieldLabels[index]}</label>
                    <input {...register(field)} data-testid={field} />
                    <p>{errors[field]?.message}</p>
                </div>
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
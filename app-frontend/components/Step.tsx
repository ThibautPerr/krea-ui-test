import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import 'semantic-ui-css/semantic.min.css';

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
        <form onSubmit={handleSubmit(handleFormSubmit)} className='ui fluid form grid'>
            {fields.map((field, index) => (
                <>
                    <div className='two column row' style={{paddingBottom: "0"}} key={field}>
                        <label className='three wide column right floated right aligned middle aligned' style={{ fontSize: "1.1rem" }}>{fieldLabels[index]}: </label>
                        <input className='six wide column left floated left aligned input error' {...register(field)} data-testid={field} placeholder={fieldLabels[index]} />
                    </div>
                    <div className='two column row' style={{ paddingTop: "0" }}>
                        <div className='three wide column right floated right aligned middle aligned'></div>
                        {errors[field]?.message &&
                            (<div className="six wide column left floated left aligned">
                                <div className="ui pointing red basic label">
                                    {errors[field]?.message}
                                </div>
                            </div>)
                        }
                    </div>
                </>
            ))}
            <div className='row centered'>
                {step > 1 &&
                    <button type="button" data-testid="back" className="ui button" onClick={prevStep}>
                        Back
                    </button>
                }
                <button type="submit" data-testid="submit" className="ui primary button">
                    Submit
                </button>
            </div>
        </form>
    );
};

export default Step;
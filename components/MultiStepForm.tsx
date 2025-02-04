// src/components/MultiStepForm.tsx
"use client"

import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/store";
import { updateForm, nextStep, previousStep } from "@/slices/formSlice";
import { Button } from "./ui/button";
 
interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
}
 
const MultiStepForm: React.FC = () => {
  const dispatch = useDispatch();
  const { firstName, lastName, email, phone, step } = useSelector(
    (state: RootState) => state.form
  );
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: { firstName, lastName, email, phone },
  });
 
  const onSubmit: SubmitHandler<FormData> = (data) => {
    dispatch(updateForm(data));
    console.log(data);
  };
 
  return (
    <div className="w-full flex justify-center items-center min-h-screen">
      <form onSubmit={handleSubmit(onSubmit)}>
        {step === 1 && (
          <div className="grid w-72 h-80 border-2 justify-center items-center">
            <div className="flex flex-col w-full">
              <label>First Name</label>
              <input 
              {...register("firstName", { required: true })} 
              type="text"
              placeholder="First Name"
              className="border w-full"
              />
              {errors.firstName && <span className="text-red-500 text-xs">This field is required</span>}
            </div>
            <div className="flex flex-col">
              <label>Last Name</label>
              <input 
              {...register("lastName", { required: true })}
              type="text"
              className="border"
              placeholder="Last Name" 
              />
              {errors.lastName && <span className="text-red-500 text-xs">This field is required</span>}
            </div>
            <Button
              type="button"
              onClick={() => {
                handleSubmit(onSubmit)();
                dispatch(nextStep());
              }}
              className="mt-4"
            >
              Next
            </Button>
          </div>
        )}
        {step === 2 && (
          <div className="grid w-72 h-80 border justify-center items-center">
            <div className="flex flex-col w-full">
              <label>Email Address</label>
              <input 
              {...register("email", { required: true })}
              type="email"
              placeholder="Email"
              className="border" 
              />
              {errors.email && <span className="text-red-500 text-xs">This field is required</span>}
            </div>
            <div className="flex flex-col">
              <label>Phone</label>
              <input 
              {...register("phone", { required: true })}
              type="tel"
              placeholder="Phone"
              className="border"  
              />
              {errors.phone && <span className="text-red-500 text-xs">This field is required</span>}
            </div>
            <div className="flex justify-between">
                <Button 
                    type="button" 
                    onClick={() => dispatch(previousStep())}>
                Back
                </Button>
                <Button 
                    type="submit">
                    Submit
                </Button>
            </div>
          </div>
        )}
      </form>
    </div>
  );
};
 
export default MultiStepForm;
import React from 'react';
import { Control, Controller, FieldValues, useForm, UseFormRegister } from 'react-hook-form';
import Input from './Input';
export interface Props {
  name: string;
  label?: string;
  placeholder?: string;
  value?: any;
  onChange?: any;
  onBlur?: any;
  onFocus?: any;
  required?: boolean;
  disabled?: boolean;
  error?: any;
  errorText?: any;
  size?: number;
  defaultValue?: any;
  control?: Control<any, any>;
  rules?: object;
}

export default function InputForm(props: Props) {
  const { control } = useForm();
  return (
    <Controller
      control={props.control ? props.control : control}
      render={({ field: { onChange, onBlur, value, ref } }) => (
        <Input
          name={props.name}
          label={props.label}
          placeholder={props.placeholder}
          value={value}
          onChange={(value: any)  => {onChange(value); if (props.onChange) props.onChange(value)}}
          onBlur={onBlur}
          onFocus={props.onFocus}
          required={props.required}
          disabled={props.disabled}
          error={props.error}
          errorText={props.errorText}
          size={props.size}
          defaultValue={props.defaultValue} 
        />
      )}
      name={props.name}
      rules={
        props.rules ? props.rules :
        {
          required: {
            value: props.required ? props.required : false,
            message: 'El campo es obligatorio'
          }
        }}
    />
  )
}

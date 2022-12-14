import React from 'react';
import { Control, Controller, useForm } from 'react-hook-form';
import TextArea from './TextArea';

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

export default function TextAreaForm(props: Props) {
  const { control } = useForm()
  return (
    <Controller
      control={props.control ? props.control : control}
      render={({ field: { onChange, onBlur, value, ref } }) => (
        <TextArea
          name={props.name}
          label={props.label}
          placeholder={props.placeholder}
          value={value}
          onChange={(value: any)  => {onChange(value); props.onChange(value)}}
          onBlur={onBlur}
          onFocus={props.onFocus}
          required={props.required}
          disabled={props.disabled}
          error={props.error}
          errorText={props.errorText}
          size={props.size}
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

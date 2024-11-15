import * as React from "react";
import type * as LabelPrimitive from "@radix-ui/react-label";
import { Slot } from "@radix-ui/react-slot";
import * as ReactHookForm from "react-hook-form";
import { classnames } from "@/utils/classnames";
import Label from "@/components/core/label";

const FormRoot = ReactHookForm.FormProvider;

type FormFieldContextValue<
  TFieldValues extends ReactHookForm.FieldValues = ReactHookForm.FieldValues,
  TName extends ReactHookForm.FieldPath<TFieldValues> = ReactHookForm.FieldPath<TFieldValues>
> = {
  name: TName;
};

const FormFieldContext = React.createContext<FormFieldContextValue>(
  {} as FormFieldContextValue
);

const FormField = <
  TFieldValues extends ReactHookForm.FieldValues = ReactHookForm.FieldValues,
  TName extends ReactHookForm.FieldPath<TFieldValues> = ReactHookForm.FieldPath<TFieldValues>
>(
  props: ReactHookForm.ControllerProps<TFieldValues, TName>
) => {
  const { ...rest } = props;

  return (
    <FormFieldContext.Provider value={{ name: props.name }}>
      <ReactHookForm.Controller {...rest} />
    </FormFieldContext.Provider>
  );
};

const useFormField = () => {
  const fieldContext = React.useContext(FormFieldContext);
  const itemContext = React.useContext(FormItemContext);
  const { getFieldState, formState } = ReactHookForm.useFormContext();

  const fieldState = getFieldState(fieldContext.name, formState);

  if (!fieldContext) {
    throw new Error("useFormField should be used within <FormField>");
  }

  const { id } = itemContext;

  return {
    id,
    name: fieldContext.name,
    formItemId: `${id}-form-item`,
    formDescriptionId: `${id}-form-item-description`,
    formMessageId: `${id}-form-item-message`,
    ...fieldState,
  };
};

type FormItemContextValue = {
  id: string;
};

const FormItemContext = React.createContext<FormItemContextValue>(
  {} as FormItemContextValue
);

const FormItem = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>((props, ref) => {
  const { className, ...rest } = props;
  const id = React.useId();

  return (
    <FormItemContext.Provider value={{ id }}>
      <div ref={ref} className={classnames(["gap-2"], className)} {...rest} />
    </FormItemContext.Provider>
  );
});

FormItem.displayName = "FormItem";

const FormLabel = React.forwardRef<
  React.ElementRef<typeof LabelPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root>
>((props, ref) => {
  const { className, ...rest } = props;
  const { formItemId } = useFormField();

  return (
    <Label
      ref={ref}
      className={classnames(className)}
      htmlFor={formItemId}
      {...rest}
    />
  );
});

FormLabel.displayName = "FormLabel";

const FormControl = React.forwardRef<
  React.ElementRef<typeof Slot>,
  React.ComponentPropsWithoutRef<typeof Slot>
>((props, ref) => {
  const { className, ...rest } = props;
  const { error, formItemId, formDescriptionId, formMessageId } =
    useFormField();

  return (
    <Slot
      ref={ref}
      id={formItemId}
      aria-describedby={
        !error
          ? `${formDescriptionId}`
          : `${formDescriptionId} ${formMessageId}`
      }
      aria-invalid={!!error}
      className={classnames("relative", className)}
      {...rest}
    />
  );
});

FormControl.displayName = "FormControl";

const FormDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>((props, ref) => {
  const { className, ...rest } = props;
  const { formDescriptionId } = useFormField();

  return (
    <p
      ref={ref}
      id={formDescriptionId}
      className={classnames(["text-sm"], className)}
      {...rest}
    />
  );
});

FormDescription.displayName = "FormDescription";

const FormMessage = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>((props, ref) => {
  const { className, children, ...rest } = props;
  const { error, formMessageId } = useFormField();
  const body = error ? String(error?.message) : children;

  if (!body) {
    return null;
  }

  return (
    <p
      ref={ref}
      id={formMessageId}
      className={classnames(["text-xs", "text-red-700"], className)}
      {...rest}
    >
      {body}
    </p>
  );
});

FormMessage.displayName = "FormMessage";

const UncontrolledFormMessage = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement> & {
    message?: string;
  }
>((props, ref) => {
  const { className, children, message, ...rest } = props;
  const { formMessageId } = useFormField();
  const body = message ? String(message) : children;

  if (!body) {
    return null;
  }

  return (
    <p
      ref={ref}
      id={formMessageId}
      className={classnames(["text-xs", "text-red-700"], className)}
      {...rest}
    >
      {body}
    </p>
  );
});

UncontrolledFormMessage.displayName = "UncontrolledFormMessage";

const Form = {
  FormRoot,
  FormField,
  useFormField,
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage,
  UncontrolledFormMessage,
};

export default Form;

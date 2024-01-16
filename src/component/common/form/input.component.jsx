import { Form } from "react-bootstrap"
import { Controller, useForm } from "react-hook-form"

export const EmailInput = () => {
    const {control, formState: {errors}} = useForm()

    return (<>
        <Controller
            name="email"
            control={control}
            render={(({field}) => <Form.Control 
            {...field}
            defaultValue={"content"}
            type="email"
            size="sm"
            placeholder="Enter Your email..."
        >
        </Form.Control>)}></Controller>
    </>)
}
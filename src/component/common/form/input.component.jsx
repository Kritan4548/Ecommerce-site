import { Form } from "react-bootstrap"
import { Controller, useForm } from "react-hook-form"

export const EmailInput = () => {
    const { control, formState: { errors } } = useForm()

    return (<>
        <Controller
            name="email"
            control={control}
            render={(({ field }) => <Form.Control
                {...field}
                defaultValue={"content"}
                type="email"
                size="sm"
                placeholder="Enter Your email..."
            >
            </Form.Control>)}></Controller>
    </>)
}

export const ImageUploader = ({loading=false,setError,setThumb,setValue}) => {
    return (
        <>

            <Form.Control type="file" size="sm"
                disabled={loading}
                onChange={(e) => {
                    // const files =Object.values(e.target.files);
                    const image = e.target.files[0]
                    const ext = (image.name.split(".")).pop();
                    if (['jpg', 'jpeg', 'png', 'gif', 'svg', 'bmp', 'webp'].includes(ext.toLowerCase())) {
                        if (image.size <= 3000000) {
                            setThumb(image);
                            setValue("image", image);
                        } else {
                            setError("image", "File should be less than 3Mb")
                        }
                    }
                    else {
                        setError("image", "File format not supported")
                    }

                }}
            />
</>
    )
}
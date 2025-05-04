import { Controller, useForm } from "react-hook-form";
import UploadImageButton from "../components/ui/UploadImageButton";
import { useState } from "react";
import { Button } from "@mui/material";
import ImageField from "../components/ui/ImageField";

const App = () => {
    const {control,handleSubmit}=useForm()
    const [preview,setPreview]=useState(null)

    const onSubmit=(data)=>{
        console.log(data.profile[0].name)
    }

    console.log('preview',preview)
    return (
        <div>
            <h1>Main App</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Controller
                    name="profile"
                    control={control}
                    defaultValue={null}
                    render={({field})=>(
                        <UploadImageButton
                            onChange={(e)=>{
                                const file=e.target.files?.[0]
                                if(file){
                                    field.onChange(e.target.files)
                                    setPreview(URL.createObjectURL(file))
                                }
                            }}
                            >
                            Upload Profile Image
                        </UploadImageButton>
                    )}
                />

{preview && (
        <div style={{ marginTop: '1rem' }}>
            <ImageField img={preview}></ImageField>
        </div>
      )}

                <Button type="submit">submit</Button>

            </form>
        </div>
    );
};

export default App;
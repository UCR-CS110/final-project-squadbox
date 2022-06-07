import React, {useState} from 'react'
import { useForm } from "react-hook-form";
import { TextInput } from '../form-components';

const EditButton = (props) => {
    const [editFormFlag, setFlag] = useState(false);
    const { register, handleSubmit } = useForm();

    function showEditForm(flag) {
        if(flag === true) {
            setFlag(true);
        }
        else {
            setFlag(false);
        }
    }

    const onSubmit = async (data) => {
        console.log(props.roomId)
        await fetch('http://localhost:8080/editMessage', {
            method: 'POST',
            mode: 'cors', // this cannot be 'no-cors'
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                message: props.message,
                roomName: props.roomId,
                newMessage: data.NewMessage
            })
        })
    }
    
    if(editFormFlag === false) {
        return (
            <span>
                <button onClick={() => showEditForm(true)}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pen" viewBox="0 0 16 16">
                    <path d="m13.498.795.149-.149a1.207 1.207 0 1 1 1.707 1.708l-.149.148a1.5 1.5 0 0 1-.059 2.059L4.854 14.854a.5.5 0 0 1-.233.131l-4 1a.5.5 0 0 1-.606-.606l1-4a.5.5 0 0 1 .131-.232l9.642-9.642a.5.5 0 0 0-.642.056L6.854 4.854a.5.5 0 1 1-.708-.708L9.44.854A1.5 1.5 0 0 1 11.5.796a1.5 1.5 0 0 1 1.998-.001zm-.644.766a.5.5 0 0 0-.707 0L1.95 11.756l-.764 3.057 3.057-.764L14.44 3.854a.5.5 0 0 0 0-.708l-1.585-1.585z"/>
                    </svg></button>
            </span>
        );
    }
    else {
        return (
            <span>
                <span>
                    <button onClick={() => showEditForm(false)}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pen" viewBox="0 0 16 16">
                    <path d="m13.498.795.149-.149a1.207 1.207 0 1 1 1.707 1.708l-.149.148a1.5 1.5 0 0 1-.059 2.059L4.854 14.854a.5.5 0 0 1-.233.131l-4 1a.5.5 0 0 1-.606-.606l1-4a.5.5 0 0 1 .131-.232l9.642-9.642a.5.5 0 0 0-.642.056L6.854 4.854a.5.5 0 1 1-.708-.708L9.44.854A1.5 1.5 0 0 1 11.5.796a1.5 1.5 0 0 1 1.998-.001zm-.644.766a.5.5 0 0 0-.707 0L1.95 11.756l-.764 3.057 3.057-.764L14.44 3.854a.5.5 0 0 0 0-.708l-1.585-1.585z"/>
                    </svg></button>
                </span>
                <form onSubmit={handleSubmit(onSubmit)} className="w-full">
                    <span className="flex flex-column">
                        <TextInput name="NewMessage" register={register} required={true} placeholder="Type new message here" />
                        <button type="submit">EDIT MESSAGE</button>
                    </span>
                </form>
            </span>
        );
    }
}

export default EditButton;
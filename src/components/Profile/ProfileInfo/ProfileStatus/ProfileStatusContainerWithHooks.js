import React, {useEffect, useState} from "react";
import ProfileStatus from "./ProfileStatus";


const ProfileStatusWithHooks = (props) => {
    let [editMode, setEditMode] = useState(false)
    let [status, setStatus] = useState(props.status)

    useEffect( () => {
        setStatus(props.status)
    }, [props.status])

    let activateEditMode = () => {
        setEditMode(true)
    }

    let deactivateEditMode = () => {
        setEditMode(false)
        props.updateStatus(status)
    }

    let onStatusChange = (e) => {
        setStatus( e.currentTarget.value)
    }

    return (
        <ProfileStatus {...props}
                       editMode={editMode}
                       status={status}
                       activateEditMode={activateEditMode}
                       deactivateEditMode={deactivateEditMode}
                       onStatusChange={onStatusChange}
        />
    )

}

export default ProfileStatusWithHooks;
import {useEffect, useState} from "react";

type RegistrationData = {
    id: number | null
    name: string
    dato_token: string
    webex_access_token: string | null
    onsite: boolean
    stage: number | null
}
export const useMe = (regId: string) => {
    const [registrationData, setRegistrationData] = useState<RegistrationData | null>(null)

    const refresh = async () => {
        const res = await fetch("https://wy8qg2hpoh.execute-api.eu-west-1.amazonaws.com/default/iokRegistrationData?id=" + regId + "&eventId=netacad25hu")
        setRegistrationData(await res.json());
    }

    useEffect(() => {
        refresh()
    }, [regId])

    return registrationData;
}
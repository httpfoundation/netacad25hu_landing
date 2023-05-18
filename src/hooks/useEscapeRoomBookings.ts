import {useQuerySubscription} from "react-datocms";
import {token} from "../tools/datoCmsTools";

export type EscapeRoomMember = {
    id: number
    name: string
}
export type EscapeRoomBooking = {
    id: number
    startingTime: Date
    position: number
    member1: EscapeRoomMember
    member2: EscapeRoomMember
    member3: EscapeRoomMember
    member4: EscapeRoomMember
    member5: EscapeRoomMember
    member6: EscapeRoomMember
    member7: EscapeRoomMember
    member8: EscapeRoomMember
}
export const useEscapeRoomBookings = () => {
    const {data, status, error} = useQuerySubscription<{ allEscaperoombookings: EscapeRoomBooking[] }>({
        token,
        query: `
			query {
				allEscaperoombookings {
					id
					startingTime
					position
					member1 {
					  id
					  name
					}
					member2 {
					  id
					  name
					}
					member3 {
					  id
					  name
					}
					member4 {
					  id
					  name
					}
					member5 {
					  id
					  name
					}
					member6 {
					  id
					  name
					}
					member7 {
					  id
					  name
					}
					member8 {
					  id
					  name
					}
			  }
		  }
		`
    })

    return {
        data: data?.allEscaperoombookings.map(b => ({
            ...b,
            members: [b.member1, b.member2, b.member3, b.member4, b.member5, b.member6, b.member7, b.member8]
        })), status, error
    };
}
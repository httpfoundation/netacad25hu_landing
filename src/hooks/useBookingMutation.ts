import {SiteClient} from "datocms-client";

export const useBookingMutation = (token: string) => {
    const client = new SiteClient(token);
    return (bookingId: number, members: (number | null | string | undefined)[]) => {
        const data = members.reduce((obj, memberId, idx) => ({...obj, [`member${idx + 1}`]: memberId}), {});
        return client?.item.update(bookingId.toString(), data);
    }
}
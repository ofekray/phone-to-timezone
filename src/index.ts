import { phoneToTimezoneTrie } from "./data/phone-to-time-zone.js"

const phoneToTimezone = (phone: string) => {
    return phoneToTimezoneTrie.findTimezones(phone) ?? [];
}

export default phoneToTimezone;
import { phoneToTimezoneTrie } from "./data/phone-to-time-zone.js"

const phoneToTimezone = (phone: string) => {
    return phoneToTimezoneTrie.find(phone) ?? [];
}

export default phoneToTimezone;
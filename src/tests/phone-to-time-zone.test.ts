import { test } from "node:test";
import assert from "node:assert";
import phoneToTimezone from "../index.js";

test("phoneToTimeZone", async (t) => {
    const testCases: Array<[string, string[]]> = [
        ["41221234567", ["Europe/Zurich"]],
        ["12125556789", ["America/New_York"]],
        ["442079460958", ["Europe/London"]],
        ["81312345678", ["Asia/Tokyo"]],
    ];

    for (const [phone, expected] of testCases) {
        const actual = phoneToTimezone(phone);
        await t.test(`phoneToTimezone("${phone}") should return ${JSON.stringify(expected)}`, async () => {
            assert.deepStrictEqual(actual, expected);
        });
    }
});
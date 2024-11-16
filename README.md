# Phone to Timezone

Get possible timezones by phone number.

## Description

This project provides a utility to determine possible timezones based on phone numbers. It uses a trie data structure to efficiently map phone number prefixes to timezones.

## Installation

To install the dependencies, run:

```sh
npm install phone-to-timezone
```

## Example

```typescript
import phoneToTimezone from 'phone-to-timezone';

const timezones = phoneToTimezone("12125556789");
console.log(timezones); // Output: ["America/New_York"]
```

## License

This project is licensed under the Apache License 2.0. See the [LICENSE](LICENSE) file for details.
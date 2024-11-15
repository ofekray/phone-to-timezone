class PhoneToTimezoneTrieNode {
    public childern: Map<string, PhoneToTimezoneTrieNode>;

    constructor(public timezones?: string[]) {
        this.childern = new Map();
    }
}

export class PhoneToTimezoneTrie {
    private root: PhoneToTimezoneTrieNode;

    constructor() {
        this.root = new PhoneToTimezoneTrieNode();
    }

    insert(phone: string, timezones: string[]) {
        let node = this.root;
        for (let i = 0; i < phone.length; i++) {
            const digit = phone.charAt(i);
            if (!node.childern.has(digit)) {
                node.childern.set(digit, new PhoneToTimezoneTrieNode());
            }
            node = node.childern.get(digit)!;
        }
        node.timezones = timezones;
    }

    find(phone: string): string[] | undefined {
        let node = this.root;
        for (let i = 0; i < phone.length; i++) {
            const digit = phone.charAt(i);
            if (!node.childern.has(digit)) {
                return undefined;
            }
            node = node.childern.get(digit)!;
        }
        return node.timezones;
    }
}
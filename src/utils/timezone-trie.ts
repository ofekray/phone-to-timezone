class PhoneToTimezoneTrieNode {
    public children: Map<string, PhoneToTimezoneTrieNode>;

    constructor(public timezones?: string[]) {
        this.children = new Map();
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
            if (!node.children.has(digit)) {
                node.children.set(digit, new PhoneToTimezoneTrieNode());
            }
            node = node.children.get(digit)!;
        }
        node.timezones = timezones;
    }

    findTimezones(phone: string): string[] | undefined {
        let node = this.root;
        let latestTimezones: string[] | undefined;

        for (let i = 0; i < phone.length; i++) {
            const digit = phone.charAt(i);
            if (!node.children.has(digit)) {
                break;
            }
            node = node.children.get(digit)!;
            if (node.timezones) {
                latestTimezones = node.timezones;
            }
        }

        return latestTimezones;
    }
}
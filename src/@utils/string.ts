export function trim(string: string): string {
    if(string) {
        return string.replace(/[\s\n\t]+/g, ' ').replace(/\s+$/g, '')
    }
    return string
}
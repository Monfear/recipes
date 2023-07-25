export function setViewTitle(subtitle: string): void {
    let mainTitle: string = 'Recipes'
    document.title = `${mainTitle} | ${subtitle}`;
};
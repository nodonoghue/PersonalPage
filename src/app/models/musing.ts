export type Musing = {
    title: string;
    subtitle: string;
    description: string;
    datewritten: Date;
    paragraphs: Paragraph[];
}

export class Paragraph {
    text: string;
}
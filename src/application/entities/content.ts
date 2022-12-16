export class Content {
  private readonly content: string;

  public get value(): string {
    return this.content;
  }

  private validateContentLenght(content: string): boolean {
    return content.length >= 5 && content.length <= 240;
  }

  constructor(content: string) {
    const contentLenghtValid = this.validateContentLenght(content);

    if(!contentLenghtValid) {
      throw new Error('Invalid content lenght.');
    }

    this.content = content;
  }
}

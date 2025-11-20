declare module "aos" {
  export interface AosOptions {
    duration?: number;
    once?: boolean;
    offset?: number;
    delay?: number;
    easing?: string;
    mirror?: boolean;
    anchorPlacement?: string;
  }

  export default class AOS {
    static init(options?: AosOptions): void;
    static refresh(): void;
    static refreshHard(): void;
  }
}


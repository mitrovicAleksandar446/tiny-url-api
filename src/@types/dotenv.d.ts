declare module 'dotenv' {
  interface DotenvConfigOptions {
    encoding: string;
    path: string;
    debug: boolean;
  }

  function config(options?: DotenvConfigOptions): void;
  function parse(src: string | Buffer, options?: DotenvConfigOptions): void;
}

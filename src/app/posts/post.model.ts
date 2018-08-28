export class Post {

  constructor(private id: string, private _title: string, private _content: string) {
  }


  get title(): string {
    return this._title;
  }

  set title(newTitle: string) {
    this._title = newTitle;
  }



  public set content(v: string) {
    this._content = v;
  }

 public get content(): string {
   return this._content;
 }

}

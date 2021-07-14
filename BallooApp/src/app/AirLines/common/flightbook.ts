export class Flightbook {
    next(ticket: Flightbook) {
      throw new Error("Method not implemented.");
    }
    type:string;
    source:string;
    destination:string;
    date:Date;
}

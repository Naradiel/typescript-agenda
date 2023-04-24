export class Telefono {
  private _tipo: string;
  private _numero: number;

  constructor(tipo: string, numero: number) {
    this._tipo = tipo;
    this._numero = numero;
  }

  // Getters y Setters públicos para acceder a ellos fuera de la clase
  public get tipo(): string {
    return this._tipo;
  }

  public set tipo(value: string) {
    this._tipo = value;
  }

  public get numero(): number {
    return this._numero;
  }

  public set numero(value: number) {
    this._numero = value;
  }
}

export class Direccion {
  private _calle: string;
  private _numero: number;
  private _piso: number;
  private _letra: string;
  private _codigoPostal: number;
  private _poblacion: string;
  private _provincia: string;

  constructor(
    calle: string,
    numero: number,
    piso: number,
    letra: string,
    codigoPostal: number,
    poblacion: string,
    provincia: string
  ) {
    this._calle = calle;
    this._numero = numero;
    this._piso = piso;
    this._letra = letra;
    this._codigoPostal = codigoPostal;
    this._poblacion = poblacion;
    this._provincia = provincia;
  }

  // Establecemos getters públicos para acceder a ellos fuera de la clase
  public get calle(): string {
    return this._calle;
  }

  public get numero(): number {
    return this._numero;
  }

  public get piso(): number {
    return this._piso;
  }

  public get letra(): string {
    return this._letra;
  }

  public get codigoPostal(): number {
    return this._codigoPostal;
  }

  public get poblacion(): string {
    return this._poblacion;
  }

  public get provincia(): string {
    return this._provincia;
  }

  // Establecemos setters públicos para acceder a ellos fuera de la clase
  public set calle(value: string) {
    this._calle = value;
  }

  public set numero(value: number) {
    this._numero = value;
  }

  public set piso(value: number) {
    this._piso = value;
  }

  public set letra(value: string) {
    this._letra = value;
  }

  public set codigoPostal(value: number) {
    this._codigoPostal = value;
  }

  public set poblacion(value: string) {
    this._poblacion = value;
  }

  public set provincia(value: string) {
    this._provincia = value;
  }
}

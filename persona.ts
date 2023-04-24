// Importamos las clases derivadas de la clase Persona para poder usarlas aquí
import { Direccion } from "./direccion";
import { Mail } from "./mail";
import { Telefono } from "./telefono";

export class Persona {
    private _nombre: string;
    private _apellidos: string;
    private _edad: number;
    private _dni: string;
    private _cumpleanos: string;
    private _colorfav: string;
    private _sexo: string;
    private _direcciones: Direccion[] = [];
    private _mails: Mail[] = [];
    private _telefonos: Telefono[] = [];
    private _notas: string;

    constructor (
        nombre: string,
        apellidos: string,
        edad: number,
        dni: string,
        cumpleanos: string,
        colorfav: string,
        sexo: string,
        direcciones: Direccion,
        mails: Mail,
        telefonos: Telefono,
        notas: string
      ) {
        this._nombre = nombre;
        this._apellidos = apellidos;
        this._edad = edad;
        this._dni = dni;
        this._cumpleanos = cumpleanos;
        this._colorfav = colorfav;
        this._sexo = sexo;
        this._direcciones.push(direcciones)
        this._mails.push(mails)
        this._telefonos.push(telefonos)
        this._notas = notas;
      }
    
      // Establecemos getters públicos para acceder a ellos fuera de la clase
      public get nombre(): string {
        return this._nombre;
      }
    
      public get apellidos(): string {
        return this._apellidos;
      }
    
      public get edad(): number {
        return this._edad;
      }
    
      public get dni(): string {
        return this._dni;
      }
    
      public get cumpleanos(): string {
        return this._cumpleanos;
      }
    
      public get colorfav(): string {
        return this._colorfav;
      }
    
      public get sexo(): string {
        return this._sexo;
      }
    
      public get direcciones(): Direccion[] {
        return this._direcciones;
      }
    
      public get mails(): Mail[] {
        return this._mails;
      }
    
      public get telefonos(): Telefono[] {
        return this._telefonos;
      }
    
      public get notas(): string {
        return this._notas;
      }
    
      // Establecemos setters públicos para acceder a ellos fuera de la clase
      public set nombre(nombre: string) {
        this._nombre = nombre;
      }
    
      public set apellidos(apellidos: string) {
        this._apellidos = apellidos;
      }
    
      public set edad(edad: number) {
        this._edad = edad;
      }
    
      public set dni(dni: string) {
        this._dni = dni;
      }
    
      public set cumpleanos(cumpleanos: string) {
        this._cumpleanos = cumpleanos;
      }
    
      public set colorfav(colorfav: string) {
        this._colorfav = colorfav;
      }
    
      public set sexo(sexo: string) {
        this._sexo = sexo;
      }
    
      public set direcciones(direcciones: Direccion[]) {
        this._direcciones = direcciones;
      }
    
      public set mails(mails: Mail[]) {
        this._mails = mails;
      }
    
      public set telefonos(telefonos: Telefono[]) {
        this._telefonos = telefonos;
      }
    
      public set notas(notas: string) {
        this._notas = notas;
      }
    }
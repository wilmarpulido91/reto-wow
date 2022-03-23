export interface Agency {
  id: number,
  agencia: string,
  distrito: string,
  direccion: string,
  lat: number,
  lon: number,
  provincia?: string,
  departamento?: string,
}
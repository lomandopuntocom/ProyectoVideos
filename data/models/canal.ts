class Usuario
{
    Nombre : string;
    Biografia: string;
    Redes: string;
    Inf_contacto: string;
    Historial: Video[];
    Mis_videos: Video[];
    Mis_Listas: Video []
    
    constructor(nombre: string, 
        biografia: string, 
        redes:string, 
        inf_contacto: string, 
        historial: Video[], 
        mis_videos: Video[], 
        mis_listas: Video[])
    {
        this.Nombre = nombre;
        this.Biografia = biografia;
        this.Redes = redes;
        this. Inf_contacto = inf_contacto;
        this.Historial = historial;
        this.Mis_videos = mis_videos;
        this.Mis_Listas = mis_listas;
    }
}
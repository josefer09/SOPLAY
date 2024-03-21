import  Cotizacion  from "../models/cotizacion";
import { Request, Response } from "express";
import { Cotizacion as CotizacionDao } from "../interface";


type response = {
    status: number;
    msg: string;
}

type request = {
    body: {};
}


export const crearCotizacion = async (req:Request , res: Response) => {
    // Verificar si la solicitud tiene datos en el cuerpo
    if (!req.body) {
        return res.status(400).json({ msg: 'La solicitud no contiene datos en el cuerpo' });
    }

    // Extraer datos del cuerpo de la solicitud
    const { nombre, email, empresa, telefono, foto, descripcion, servicio } = req.body;

    try {
        // Guardar en la DB
        const cotizacionAlmacenada = await Cotizacion.create({ nombre, email, empresa, telefono, foto, descripcion, servicio });
        return res.status(200).json({ msg: 'Se generó la cotización' });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ msg: 'Hubo un error al procesar la solicitud' });
    }
}
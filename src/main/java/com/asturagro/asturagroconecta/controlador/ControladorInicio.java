package com.asturagro.asturagroconecta.controlador;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import com.asturagro.asturagroconecta.servicio.ServicioUsuario;


@Controller
public class ControladorInicio {
	
	@Autowired
	private ServicioUsuario S_usuario;
	
	/*******************************************/
	/*     LLAMADA A LA PANTALLA DE INICIO     */
	/*******************************************/

    @GetMapping("/inicio")
	public String pantallaInicio(Model modelo) {
    	return "asturagroconecta";
    }
	
}

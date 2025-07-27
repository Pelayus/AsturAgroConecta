package com.asturagro.asturagroconecta.servicio;

import java.util.List;
import java.util.Optional;
import com.asturagro.asturagroconecta.modelo.Usuario;

public interface ServicioUsuario {
	
	List<Usuario> obtenerTodos();
    Optional<Usuario> obtenerPorId(Long id);
    Usuario guardar(Usuario usuario);
    void eliminar(Long id);
    Optional<Usuario> buscarPorNombreUsuario(String nombreUsuario);
    Optional<Usuario> buscarPorEmail(String email);
    Optional<Usuario> buscarPorDni(String dni);
    
}

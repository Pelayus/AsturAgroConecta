package com.asturagro.asturagroconecta.servicioImpl;

import com.asturagro.asturagroconecta.modelo.Usuario;
import com.asturagro.asturagroconecta.repositorio.UsuarioRepositorio;
import com.asturagro.asturagroconecta.servicio.ServicioUsuario;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Optional;

@Service
public class ServicioUsuarioImpl implements ServicioUsuario {

    @Autowired
    private UsuarioRepositorio usuarioRepositorio;

    @Override
    public List<Usuario> obtenerTodos() {
        return usuarioRepositorio.findAll();
    }

    @Override
    public Optional<Usuario> obtenerPorId(Long id) {
        return usuarioRepositorio.findById(id);
    }

    @Override
    public Usuario guardar(Usuario usuario) {
        return usuarioRepositorio.save(usuario);
    }

    @Override
    public void eliminar(Long id) {
        usuarioRepositorio.deleteById(id);
    }

    @Override
    public Optional<Usuario> buscarPorNombreUsuario(String nombreUsuario) {
        return usuarioRepositorio.findByNombreUsuario(nombreUsuario);
    }

    @Override
    public Optional<Usuario> buscarPorEmail(String email) {
        return usuarioRepositorio.findByEmail(email);
    }

    @Override
    public Optional<Usuario> buscarPorDni(String dni) {
        return usuarioRepositorio.findByDni(dni);
    }
}
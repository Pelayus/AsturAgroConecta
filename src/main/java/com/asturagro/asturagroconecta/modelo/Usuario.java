package com.asturagro.asturagroconecta.modelo;

import java.io.Serializable;
import java.time.LocalDate;

import jakarta.persistence.*;

@Entity
public class Usuario implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "nombre", length = 50, nullable = false)
    private String nombre;

    @Column(name = "nombre_usuario", unique = true, nullable = false, length = 30)
    private String nombreUsuario;

    @Column(name = "email", length = 50, nullable = false, unique = true)
    private String email;

    @Column(name = "contraseña", length = 255, nullable = false)
    private String contraseña;

    @Column(name = "dni", unique = true, nullable = false, length = 10)
    private String dni;

    @Column(name = "fecha_nacimiento", nullable = false)
    private LocalDate fechaNacimiento;

    @Enumerated(EnumType.STRING)
    @Column(name = "rol", nullable = false, length = 20)
    private Rol rol;

    @Column(name = "telefono", length = 15)
    private String telefono;

    @Column(name = "direccion", length = 100)
    private String direccion;

    @Column(name = "localidad", length = 50)
    private String localidad;

    @Column(name = "provincia", length = 50)
    private String provincia;

    @Column(name = "fecha_registro", nullable = false)
    private LocalDate fechaRegistro = LocalDate.now();

    @Column(name = "activo", nullable = false)
    private boolean activo = true;

    public Usuario() {
        super();
    }

    public Usuario(Long id, String nombre, String nombreUsuario, String email, String contraseña, String dni,
                   LocalDate fechaNacimiento, Rol rol, String telefono, String direccion,
                   String localidad, String provincia, LocalDate fechaRegistro, boolean activo) {
        this.id = id;
        this.nombre = nombre;
        this.nombreUsuario = nombreUsuario;
        this.email = email;
        this.contraseña = contraseña;
        this.dni = dni;
        this.fechaNacimiento = fechaNacimiento;
        this.rol = rol;
        this.telefono = telefono;
        this.direccion = direccion;
        this.localidad = localidad;
        this.provincia = provincia;
        this.fechaRegistro = fechaRegistro;
        this.activo = activo;
    }

    // Getters y Setters

    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public String getNombre() { return nombre; }
    public void setNombre(String nombre) { this.nombre = nombre; }

    public String getNombreUsuario() { return nombreUsuario; }
    public void setNombreUsuario(String nombreUsuario) { this.nombreUsuario = nombreUsuario; }

    public String getEmail() { return email; }
    public void setEmail(String email) { this.email = email; }

    public String getContraseña() { return contraseña; }
    public void setContraseña(String contraseña) { this.contraseña = contraseña; }

    public String getDni() { return dni; }
    public void setDni(String dni) { this.dni = dni; }

    public LocalDate getFechaNacimiento() { return fechaNacimiento; }
    public void setFechaNacimiento(LocalDate fechaNacimiento) { this.fechaNacimiento = fechaNacimiento; }

    public Rol getRol() { return rol; }
    public void setRol(Rol rol) { this.rol = rol; }

    public String getTelefono() { return telefono; }
    public void setTelefono(String telefono) { this.telefono = telefono; }

    public String getDireccion() { return direccion; }
    public void setDireccion(String direccion) { this.direccion = direccion; }

    public String getLocalidad() { return localidad; }
    public void setLocalidad(String localidad) { this.localidad = localidad; }

    public String getProvincia() { return provincia; }
    public void setProvincia(String provincia) { this.provincia = provincia; }

    public LocalDate getFechaRegistro() { return fechaRegistro; }
    public void setFechaRegistro(LocalDate fechaRegistro) { this.fechaRegistro = fechaRegistro; }

    public boolean isActivo() { return activo; }
    public void setActivo(boolean activo) { this.activo = activo; }
}